"use strict";
const fs = require("fs");
const path = require("path");
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, "src", "svg");
const svgIconDir = path.resolve(currentDir, "src", "svg", "icon");
const masterIconPath = path.resolve(svgDir, "icons.svg");
const jsdom = require("jsdom");
const prettier = require("prettier");
const { JSDOM } = jsdom;
const configFilePath = path.resolve(currentDir, "docs", "_data", "icons.yaml");
const file = fs.readFileSync(configFilePath, "utf8");
const YAML = require("yaml");
const config = YAML.parse(file);
const { html2xhtml } = require("./util");
const { query } = require("winston");
const { size } = require("@floating-ui/dom");
const genText = "This is a generated file, DO NOT EDIT";
const supportedSizes = ["12", "16", "18", "20", "24", "32", "48", "64"];

const defsList = [];

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
 * Processes missing icon file prefixing
 * @param {string} dir
 * @returns promise
 */
async function processFilePrefixing(dir) {
    const aFiles = await getFiles(dir);
    const prefixedFiles = await normalizeFiles(aFiles);

    // return prefixedFiles;
    return await getFiles(dir);
}

async function prefixIcon(fileDir, fileBase) {
    const renameFrom = fileDir + "/" + fileBase;
    const renameTo = fileDir + "/" + config.icons.prefix + "-" + fileBase;

    await fs.rename(renameFrom, renameTo, (error) => {
        if (error) return console.log(error);

        console.log(
            "Prefixed Icon: " +
                fileBase +
                " > " +
                config.icons.prefix +
                "-" +
                fileBase,
        );
    });
}

async function normalizeFiles(svgs) {
    const svgFiles = svgs.filter(
        (f) => f.endsWith(".svg") && f !== "icons.svg",
    );

    await svgFiles.map(async (filePath) => {
        const fileDir = path.parse(filePath).dir;
        const fileBase = path.parse(filePath).base;
        const data = await fs.promises.readFile(filePath, "utf8");
        const svgJsDom = new JSDOM(data, { contentType: "text/xml" });
        const querySelector = svgJsDom.window.document.querySelector("svg");

        querySelector.hasAttribute("height") &&
            querySelector.removeAttribute("height");
        querySelector.hasAttribute("width") &&
            querySelector.removeAttribute("width");

        await fs.promises.writeFile(filePath, await html2xhtml(svgJsDom, true));

        if (
            !fileBase.startsWith("icon-") &&
            !fileBase.startsWith("star-rating-") &&
            !fileBase.startsWith("image-placeholder")
        ) {
            await prefixIcon(fileDir, fileBase);
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

function sortMethodObj({ id: a }, { id: b }) {
    const aName = a && a.name;
    const bName = b && b.name;

    if (aName < bName) {
        return -1;
    }
    if (aName > bName) {
        return 1;
    }
    return 0;
}

class GenerateImages {
    constructor(files, masterIconFile) {
        this.imageList = [];
        this.svgs = files.filter(
            (f) => f.endsWith(".svg") && f !== "icons.svg",
        );
        this.masterIconSymbols = new JSDOM(masterIconFile);
        this.masterDocument = this.masterIconSymbols.window.document;
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
        const defs = svgFragment.querySelector("defs");
        if (defs) {
            defsList.push(defs);
            defs.remove();
        }

        return svgFragment;
    }

    async processSvg(filePath, filename) {
        const data = await fs.promises.readFile(filePath, "utf8");
        const symbols = JSDOM.fragment(data);
        const symbol = symbols.querySelector("svg");
        const nameObj = stripName(filename);
        const isAllowedInDocs =
            config.skipDocs.indexOf(nameObj.simpleName) === -1 &&
            (config.deprecated === null ||
                config.deprecated.indexOf(nameObj.simpleName) === -1);

        const sizes = symbol.getAttribute("viewBox");

        if (sizes === null) {
            console.log("ERROR: viewbox dimensions missing from " + filename);
            return;
        }

        const [, , width, height] = sizes.split(" ");

        if (isAllowedInDocs) {
            this.imageList.push({
                name: nameObj.fullName,
                size: nameObj.size,
                height,
                width,
            });
        }
        console.log("Processing SVG:", symbol, filename);
        // Need to parse it before pushing
        this.masterList.push(this.processSymbolToSVG(symbol, filename));

        if (config.skip.indexOf(filename) > -1) {
            return;
        }
    }

    async run() {
        const masterSvg = this.masterDocument.querySelector("svg");

        while (masterSvg.lastChild) {
            masterSvg.removeChild(masterSvg.lastChild);
        }

        await Promise.all(
            this.svgs.map(async (filePath) => {
                const filename = path.parse(filePath).name;
                // console.log(filename);
                await this.processSvg(filePath, filename);
            }),
        );
        if (defsList.length) {
            const fragment = this.masterDocument.createDocumentFragment();
            defsList.forEach((defs) => {
                Array.from(defs.children).forEach((defChild) => {
                    fragment.appendChild(defChild);
                });
            });
            const defsEl = this.masterDocument.createElement("defs");
            defsEl.appendChild(fragment);
            masterSvg.appendChild(defsEl);
        }

        this.imageList.sort(sortMethodObj);
        config.icons.list = this.imageList;

        await fs.promises.writeFile(configFilePath, YAML.stringify(config));

        this.masterList.sort(sortMethod);
        this.masterList.forEach((symbol) => {
            this.masterDocument.querySelector("svg").appendChild(symbol);
        });

        const fileOutput = await html2xhtml(this.masterIconSymbols);
        await fs.promises.writeFile(masterIconPath, fileOutput);
    }
}

function stripName(name, mappedPrefix, mappedPostfix) {
    const matcher = new RegExp(
        `^((?:icon-|program-badge-|star-rating-)?)([\\w-]+?)((?:|-small))$`,
    );
    const sizeMatcher = new RegExp(`(${supportedSizes.join("|")})(?:-\\w+)?$`);

    const nameMatch = name.match(matcher);
    if (nameMatch) {
        const [, prefix, newName, postfix] = nameMatch;
        const sizeMatch = name.match(sizeMatcher);
        let size;
        let rawSize;
        if (sizeMatch) {
            size = sizeMatch[0];
            rawSize = sizeMatch[1];
        }

        const fullName = `${newName}${postfix}`;
        return {
            prefix,
            name: newName,
            postfix,
            size,
            rawSize,
            simpleName: prefix === "icon-" ? fullName : `${prefix}${fullName}`,
            fullName,
        };
    }
    return {
        name,
    };
}

async function runGenerate() {
    await processFilePrefixing(svgIconDir);

    const files = await getFiles(svgIconDir);
    const masterIconFile = await fs.promises.readFile(masterIconPath);

    const gen = new GenerateImages(files, masterIconFile);
    await gen.run();
}

module.exports = { runGenerate };
