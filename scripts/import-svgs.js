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
const { html2xhtml } = require('./util');

async function runImport(svg, name, file, argv) {
    const skinFile = await fs.promises.readFile(path.resolve(svgDir, `${file}.svg`), 'utf8');
    const svgFile = await fs.promises.readFile(svg, 'utf8');

    const oldSymbols = new JSDOM(skinFile, { contentType: 'text/html' });

    const newSVGFile = optimize(svgFile, svgConfig)
        .data.replace('<svg', '<symbol')
        .replace('</svg', '</symbol');

    const svgJsDom = new JSDOM(newSVGFile, { contentType: 'text/xml' });
    const svgFragment = svgJsDom.window.document.querySelector('symbol');
    svgFragment.setAttribute('id', name);
    if (argv.keepFill === 'false') {
        svgFragment.removeAttribute('fill');
        svgFragment.querySelectorAll('[fill]').forEach((node) => {
            node.removeAttribute('fill');
        });
    }

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
