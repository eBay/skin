'use strict';
const fs = require('fs');
const path = require('path');
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, 'src', 'svg');
const svgIconDir = path.resolve(currentDir, 'src', 'svg', 'icon');
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

function sortMethod({ id: a }, { id: b }) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

class GenerateImages {
    constructor(files, masterIconFile) {
        this.imageList = [];
        this.svgs = files.filter((f) => f.endsWith('.svg') && f !== 'icons.svg');
        this.masterIconSymbols = new JSDOM(masterIconFile);
        this.masterDocument = this.masterIconSymbols.window.document;
        this.masterList = [];
    }

    processSymbolToSVG(symbol, name) {
        const newSVGCode = symbol.outerHTML.replace('<svg', '<symbol').replace('</svg', '</symbol');

        const svgJsDom = new JSDOM(newSVGCode, { contentType: 'text/xml' });
        const svgFragment = svgJsDom.window.document.querySelector('symbol');
        svgFragment.setAttribute('id', name);
        svgFragment.removeAttribute('xmlns');
        return svgFragment;
    }

    async processSvg(filePath, filename, lessFile) {
        const data = await fs.promises.readFile(filePath, 'utf8');
        const symbols = JSDOM.fragment(data);
        const symbol = symbols.querySelector('svg');

        const nameObj = stripName(filename);
        if (config.skipDocs.indexOf(nameObj.simpleName) === -1) {
            this.imageList.push(nameObj.fullName);
        }

        // Need to parse it before pushing
        this.masterList.push(this.processSymbolToSVG(symbol, filename));

        if (config.skip.indexOf(filename) > -1) {
            return;
        }
        const sizes = symbol.getAttribute('viewBox');

        if (sizes === null) {
            console.log('ERROR: viewbox dimensions missing from ' + filename);
            return;
        }

        const [, , width, height] = sizes.split(' ');
        const id = `${nameObj.prefix}-${nameObj.fullName}`;
        lessFile.push({
            id,
            data: `svg.${id} { height: ${height}px; width: ${width}px; }`,
        });
    }

    async run() {
        const masterSvg = this.masterDocument.querySelector('svg');

        while (masterSvg.lastChild) {
            masterSvg.removeChild(masterSvg.lastChild);
        }

        const lessFile = [];

        await Promise.all(
            this.svgs.map(async (filePath) => {
                const filename = path.parse(filePath).name;
                await this.processSvg(filePath, filename, lessFile);
            })
        );

        lessFile.sort(sortMethod);

        await fs.promises.writeFile(
            `src/less/icon/generated/icon.less`,
            prettier.format(
                [`/* ${genText} */`].concat(lessFile.map(({ data }) => data)).join('\n'),
                { parser: 'less', tabWidth: 4 }
            )
        );

        this.imageList.sort();
        config.icons.list = this.imageList;

        await fs.promises.writeFile(configFilePath, YAML.stringify(config));

        this.masterList.sort(sortMethod);
        this.masterList.forEach((symbol) => {
            this.masterDocument.querySelector('svg').appendChild(symbol);
        });

        await fs.promises.writeFile(masterIconPath, html2xhtml(this.masterIconSymbols));
    }
}

function stripName(name, mappedPrefix, mappedPostfix) {
    const matcher = new RegExp(`^((?:icon-|program-badge-|star-rating-)?)([\\w-]+?)((?:|-small))$`);
    const nameMatch = name.match(matcher);
    if (nameMatch) {
        const [, prefix, newName, postfix] = nameMatch;
        const fullName = `${newName}${postfix}`;
        return {
            prefix,
            name: newName,
            postfix,
            simpleName: prefix === 'icon-' ? fullName : `${prefix}${fullName}`,
            fullName,
        };
    }
    return {
        name,
    };
}

async function runGenerate() {
    const files = await getFiles(svgIconDir);
    const masterIconFile = await fs.promises.readFile(masterIconPath);

    const gen = new GenerateImages(files, masterIconFile);
    await gen.run();
}

module.exports = { runGenerate };
