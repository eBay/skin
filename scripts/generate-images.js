'use strict';
const fs = require('fs');
const path = require('path');
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, 'src', 'svg');
const masterIconPath = path.resolve(svgDir, 'icons.svg');
const jsdom = require('jsdom');
const prettier = require('prettier');
const { JSDOM } = jsdom;
const configFilePath = path.resolve(currentDir, 'docs', '_data', 'icons.yaml');
const file = fs.readFileSync(configFilePath, 'utf8');
const YAML = require('yaml');
const config = YAML.parse(file);
const { html2xhtml } = require('./util');
const genText = 'This is a generated file, DO NOT EDIT';

async function getFiles(dir) {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        dirents.map((dirent) => {
            const res = path.resolve(dir, dirent.name);
            return dirent.isDirectory() ? getFiles(res) : res;
        })
    );
    return Array.prototype.concat(...files);
}

class GenerateImages {
    constructor(files, masterIconFile) {
        this.imageList = {};
        this.smallImageList = {};
        this.svgs = files.filter((f) => f.endsWith('.svg') && f !== 'icons.svg');
        this.masterIconSymbols = new JSDOM(masterIconFile);
        this.masterDocument = this.masterIconSymbols.window.document;
    }

    appendImages(filename, nameObj) {
        if (nameObj.postfix === '-small') {
            this.smallImageList[filename].push(nameObj.name);
        } else {
            this.imageList[filename].push(nameObj.name);
        }
    }

    insertIntoMasterFile(symbol) {
        this.masterDocument.querySelector('svg').appendChild(symbol);
    }

    async processSvg(filePath, mappedName, filename) {
        const data = await fs.promises.readFile(filePath, 'utf8');
        const symbols = JSDOM.fragment(data);

        const lessFile = [`/* ${genText} */`];
        symbols.querySelectorAll('symbol').forEach((symbol) => {
            const nameObj = stripName(symbol.id, mappedName.prefix, mappedName.postfix);
            this.appendImages(filename, nameObj);

            this.insertIntoMasterFile(symbol);

            if (config.skip.indexOf(symbol.id) > -1) {
                return;
            }
            const sizes = symbol.getAttribute('viewBox');
            const [, , width, height] = sizes.split(' ');
            lessFile.push(
                `svg.${nameObj.prefix}-${nameObj.name}${nameObj.postfix} { height: ${height}px; width: ${width}px; }`
            );
        });

        return lessFile;
    }

    async run() {
        const masterSvg = this.masterDocument.querySelector('svg');

        while (masterSvg.lastChild) {
            masterSvg.removeChild(masterSvg.lastChild);
        }

        await Promise.all(
            this.svgs.map(async (filePath) => {
                const filename = path.parse(filePath).name;
                const mappedName = config[filename];
                if (!mappedName) {
                    return;
                }

                this.imageList[filename] = this.imageList[filename] || [];
                this.smallImageList[filename] = this.smallImageList[filename] || [];

                const lessFile = await this.processSvg(filePath, mappedName, filename);

                this.imageList[filename].sort();
                this.smallImageList[filename].sort();
                await fs.promises.writeFile(
                    `src/less/icon/generated/${filename}.less`,
                    prettier.format(lessFile.join('\n'), { parser: 'less', tabWidth: 4 })
                );
            })
        );
        Object.keys(config).forEach((key) => {
            config[key].list = this.imageList[key] || [];
            config[key].smallList = this.smallImageList[key] || [];
        });
        await fs.promises.writeFile(configFilePath, YAML.stringify(config));

        await fs.promises.writeFile(masterIconPath, html2xhtml(this.masterIconSymbols));
    }
}

function stripName(name, mappedPrefix, mappedPostfix) {
    const matcher = new RegExp(
        `^((?:${mappedPrefix}-|icon-))([\\w-]+?)((?:${mappedPostfix || ''}|-small))$`
    );
    const nameMatch = name.match(matcher);
    if (nameMatch) {
        const [, prefix, newName, postfix] = nameMatch;
        return {
            prefix,
            name: newName,
            postfix,
        };
    }
    return {
        name,
    };
}

async function runGenerate() {
    const files = await getFiles(svgDir);
    const masterIconFile = await fs.promises.readFile(masterIconPath);

    await new GenerateImages(files, masterIconFile).run();
}

module.exports = { runGenerate };
