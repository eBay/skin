#!/usr/bin/env node
/* eslint-disable no-console */
'use strict';
const fs = require('fs');
const path = require('path');
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, 'src', 'svg');
const { optimize } = require('svgo');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const svgConfig = require('./svgo.config');
const { parse } = require('parse5');
const { serializeToString } = require('xmlserializer');

/**
 * Convert a standard HTML5 string to XHTML-compliant string
 *
 * @param {string} htmlString : html string to convert to xhtml
 */
function html2xhtml(html) {
    const bodyHtml = html.window.document.querySelector('body').innerHTML;
    const dom = parse(bodyHtml);
    const xmlHeader = `<?xml version="1.0" encoding="utf-8"?>\n`;
    return `${xmlHeader}${serializeToString(dom.childNodes[0].childNodes[1].childNodes[0])}\n`;
}

async function runImport(svg, name, file, argv) {
    const skinFile = await fs.promises.readFile(path.resolve(svgDir, `${file}.svg`), 'utf8');
    const svgFile = await fs.promises.readFile(svg, 'utf8');

    const oldSymbols = new JSDOM(skinFile);

    const newSVGFile = optimize(svgFile, svgConfig)
        .data.replace('<svg', '<symbol')
        .replace('</svg', '</symbol');

    const svgFragment = JSDOM.fragment(newSVGFile);

    svgFragment.firstChild.setAttribute('id', name);

    const existing = oldSymbols.window.document.querySelector(`#${name}`);
    if (existing) {
        console.log('existing icon found, updating');
        existing.parentNode.replaceChild(svgFragment, existing);
    } else {
        console.log('adding new icon');
        oldSymbols.window.document.querySelector('svg').appendChild(svgFragment);
    }

    const newFileData = html2xhtml(oldSymbols);

    await fs.promises.writeFile(path.resolve(svgDir, `${file}.svg`), newFileData);
}

module.exports = { runImport };
