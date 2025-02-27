/* eslint-disable no-console */
"use strict";
const fs = require("fs");
const path = require("path");
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, "src", "svg");
const svgFlagDir = path.resolve(currentDir, "src", "svg", "flag");
const masterFlagPath = path.resolve(svgDir, "flags.svg");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const configFilePath = path.resolve(
    currentDir,
    "src",
    "components",
    "data",
    "site.json",
);
const file = fs.readFileSync(configFilePath, "utf8");
const config = JSON.parse(file);
const { html2xhtml } = require("./util");

async function getFiles(dir) {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        dirents.map((dirent) => {
            const res = path.resolve(dir, dirent.name);
            return dirent.isDirectory() ? getFiles(res) : res;
        }),
    );
    return Array.prototype.concat(...files);
}

/**
 * Processes missing flag file prefixing
 * @param {string} dir
 * @returns promise
 */
async function processFilePrefixing(dir) {
    const aFiles = await getFiles(dir);
    await normalizeFiles(aFiles);
    return await getFiles(dir);
}

async function prefixFlag(fileDir, fileBase) {
    const renameFrom = path.join(fileDir, fileBase);
    const renameTo = path.join(fileDir, `${config.flags.prefix}-${fileBase}`);

    await fs.rename(renameFrom, renameTo, (error) => {
        if (error) return console.error(error);
        console.log(
            `Prefixed Flag: ${fileBase} > ${config.flags.prefix}-${fileBase}`,
        );
    });
}

async function normalizeFiles(svgs) {
    const svgFiles = svgs.filter((f) => f.endsWith(".svg"));

    await svgFiles.map(async (filePath) => {
        const fileDir = path.parse(filePath).dir;
        const fileBase = path.parse(filePath).base;
        const data = await fs.promises.readFile(filePath, "utf8");
        const svgJsDom = new JSDOM(data, { contentType: "text/xml" });
        const querySelector = svgJsDom.window.document.querySelector("svg");

        if (querySelector.hasAttribute("height")) {
            querySelector.removeAttribute("height");
        }
        if (querySelector.hasAttribute("width")) {
            querySelector.removeAttribute("width");
        }

        await fs.promises.writeFile(filePath, await html2xhtml(svgJsDom, true));
        if (!fileBase.startsWith("flag-")) {
            await prefixFlag(fileDir, fileBase);
        }
    });

    return svgFiles;
}

function sortMethod({ id: a }, { id: b }) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

class GenerateFlags {
    constructor(files, masterFlagFile) {
        this.imageList = [];
        this.svgs = files.filter((f) => f.endsWith(".svg"));
        this.masterFlagSymbols = new JSDOM(masterFlagFile);
        this.masterDocument = this.masterFlagSymbols.window.document;
        this.masterList = [];
    }

    processSymbolToSVG(symbol, name) {
        const newSVGCode = symbol.outerHTML
            .replace("<svg", "<symbol")
            .replace("</svg", "</symbol");

        const svgJsDom = new JSDOM(newSVGCode, { contentType: "text/xml" });
        const svgFragment = svgJsDom.window.document.querySelector("symbol");
        svgFragment.setAttribute("id", name);
        svgFragment.removeAttribute("xmlns");
        svgFragment.removeAttribute("width");
        svgFragment.removeAttribute("height");

        return svgFragment;
    }

    async processSvg(filePath, filename, lessFile) {
        const data = await fs.promises.readFile(filePath, "utf8");
        const symbols = JSDOM.fragment(data);
        const symbol = symbols.querySelector("svg");

        const nameObj = stripName(filename);
        console.log("Processing SVG:", symbol, filename);
        // Need to parse it before pushing
        this.masterList.push(this.processSymbolToSVG(symbol, filename));

        const sizes = symbol.getAttribute("viewBox");

        if (sizes === null) {
            console.log(`ERROR: viewbox dimensions missing from ${filename}`);
            return;
        }

        const [, , width, height] = sizes.split(" ");
        const id = `${nameObj.prefix}-${nameObj.fullName}`;
        lessFile.push({
            id,
            data: `svg.${id} { height: ${height}px; width: ${width}px; }`,
        });
    }

    async run() {
        const masterSvg = this.masterDocument.querySelector("svg");

        while (masterSvg.lastChild) {
            masterSvg.removeChild(masterSvg.lastChild);
        }

        const lessFile = [];

        await Promise.all(
            this.svgs.map(async (filePath) => {
                const filename = path.parse(filePath).name;
                await this.processSvg(filePath, filename, lessFile);
            }),
        );

        this.imageList.sort();
        config.flags.list = this.imageList;

        await fs.promises.writeFile(configFilePath, YAML.stringify(config));

        this.masterList.sort(sortMethod);
        this.masterList.forEach((symbol) => {
            this.masterDocument.querySelector("svg").appendChild(symbol);
        });

        const fileOutput = await html2xhtml(this.masterFlagSymbols);
        await fs.promises.writeFile(masterFlagPath, fileOutput);
    }
}

function stripName(name) {
    const matcher = new RegExp(`^((?:flag-)?)$`);
    const nameMatch = name.match(matcher);
    if (nameMatch) {
        const [, prefix, newName, postfix] = nameMatch;
        const fullName = `${newName}${postfix}`;
        return {
            prefix,
            name: newName,
            postfix,
            simpleName: prefix === "flag-" ? fullName : `${prefix}${fullName}`,
            fullName,
        };
    }
    return {
        name,
    };
}

async function runGenerateFlags() {
    await processFilePrefixing(svgFlagDir);

    const files = await getFiles(svgFlagDir);
    const masterFlagFile = await fs.promises.readFile(masterFlagPath);

    const gen = new GenerateFlags(files, masterFlagFile);
    await gen.run();
}

module.exports = { runGenerateFlags };
