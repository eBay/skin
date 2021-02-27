#!/usr/bin/env node
/* eslint-disable no-console */
'use strict';
const fs = require('fs');
const path = require('path');
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, 'src', 'svg');
const Svgo = require('svgo');
const config = require('./image-config.json');
const jsdom = require('jsdom');
const { svgoImportConfig } = config;
const svgo = new Svgo(svgoImportConfig);
const { JSDOM } = jsdom;

function getId(filePath, baseDir) {
    const relativeFile = path.relative(baseDir, filePath);
    const parts = path.parse(relativeFile);
    let fileName = `${parts.dir}/${parts.name}`;
    fileName = fileName
        .toLowerCase()
        .replace(/(_| |\/)/g, '-')
        .replace(/&/g, 'n')
        // Remove default
        .replace(/-default(-24dp)?$/, '')
        // Add small if small
        .replace(/-small(-16dp)?$/, '-small')
        // Add large if large
        .replace(/-large(-64dp)?$/, '-large')
        // Remove starting icon
        .replace(/-chevrons-/, '-chevron-')
        .replace(/-thumb-(up|down)(-unselected)?/, '-thumbs-$1')
        .replace(/-unselected/, '')
        .replace(/-outline(s)?/, '')
        .replace(/^(ic|icons)-photo-editor/, 'icon-photo')
        .replace(
            /^(ic|icons)-(action|content|programs|status|navigation|status|reviews|filter|device)-/,
            'icon-'
        );

    Object.keys(config.renames).forEach((item) => {
        if (fileName.indexOf(item) === 0) {
            fileName = fileName.replace(item, config.renames[item]);
        }
    });
    return fileName;
}

async function getDuplicates(promiseData) {
    const data = await fs.promises.readFile(path.resolve(svgDir, 'ds6', 'icons.svg'), 'utf8');
    const oldSymbols = JSDOM.fragment(data);
    const missingIds = [];
    oldSymbols.querySelectorAll('symbol').forEach((symbol) => {
        if (!promiseData[symbol.getAttribute('id')]) {
            missingIds.push(symbol);
        }
    });
    return missingIds;
}

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

function createSVG(id, svgData) {
    const dom = JSDOM.fragment(svgData.data);
    const newDom = JSDOM.fragment('<symbol/>');
    newDom.firstChild.setAttribute('viewBox', dom.firstChild.getAttribute('viewBox'));
    newDom.firstChild.setAttribute('id', id);
    const use = dom.querySelectorAll('use');
    let useAttrs = [];
    if (use.length) {
        useAttrs = Array.prototype.map.call(use, (u) => u.attributes);
    }
    dom.querySelectorAll('path').forEach((el, iter) => {
        el.removeAttribute('id');
        newDom.firstChild.innerHTML += el.outerHTML;
        const useAttr = useAttrs[iter] || [];
        for (let i = 0; i < useAttr.length; i++) {
            const attr = useAttr[i];
            if (!(attr.name === 'fill' && attr.value === '#111820')) {
                el.setAttribute(attr.name, attr.value);
            }
        }
    });

    return { dom: newDom.firstChild, id };
}

function sortMethod(a, b) {
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }

    // names must be equal
    return 0;
}

async function runImport(directory) {
    const files = await getFiles(directory);
    const svgs = files.filter((file) => file.endsWith('.svg'));
    const baseHtml = JSDOM.fragment('<svg xmlns="http://www.w3.org/2000/svg"></svg>');
    const idMap = {};
    const aliases = [];

    const promiseData = await Promise.all(
        svgs.map(async (filePath) => {
            const data = await fs.promises.readFile(filePath, 'utf8');
            const newSvg = await svgo.optimize(data, { path: filePath });
            const domId = getId(filePath, directory);
            const aliasID = config.aliases[domId];

            // try {
            idMap[domId] = true;
            if (aliasID) {
                (Array.isArray(aliasID) ? aliasID : [aliasID]).forEach((aID) => {
                    idMap[aID] = true;
                    aliases.push(createSVG(aID, newSvg));
                });
            }
            return createSVG(domId, newSvg);
        })
    );

    promiseData.sort(sortMethod);
    aliases.sort(sortMethod);

    const dups = await getDuplicates(idMap);

    promiseData.concat(aliases).forEach((html) => {
        baseHtml.firstChild.appendChild(html.dom);
    });
    baseHtml.innerHTML += '<!-- Old SVGS -->';

    dups.forEach((html) => {
        baseHtml.firstChild.appendChild(html);
    });

    console.log(baseHtml.firstChild.outerHTML);
}

require('yargs') // eslint-disable-line
    .usage('Usage: $0 <command> [options]')
    .command(
        'dir <directory>',
        'generates SVG image file from all SVGs in a given directory',
        (yargs) => {
            yargs.positional('directory', {
                describe: 'directory to import SVG from',
                demand: true,
                default: '',
            });
        },
        (argv) => {
            try {
                runImport(argv.directory, argv);
            } catch (e) {
                console.log(e);
            }
        }
    )
    .command(
        'file <file>',
        'generates SVG images from a sketch file',
        (yargs) => {
            yargs.positional('file', {
                describe: 'sketch file to import SVG from',
                demand: true,
                default: '',
            });
        },
        async (argv) => {
            try {
                await importFromSketch(argv.file, argv);
            } catch (e) {
                console.log(e);
            }
        }
    )

    .option('verbose', {
        alias: 'v',
        type: 'boolean',
    })
    .demandCommand(1)
    .help().argv;
