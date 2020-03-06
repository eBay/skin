#!/usr/bin/env node
'use strict';
const fs = require('fs')
const path = require('path')
const helper = require('./generate-helper');
const Svgo = require('svgo');
const config = require('./image-config.json');
const jsdom = require("jsdom");
const { svgoImportConfig } = config;
const svgo = new Svgo(svgoImportConfig);
const { JSDOM } = jsdom;

function getId(filePath) {
  let fileName = path.basename(filePath, '.svg');

   return fileName.toLowerCase()
    .replace(/_/g, '-')
    .replace(/ /g, '-')
    .replace(/&/g, 'n')
    // Remove default
    .replace(/(-default)?-24dp/, '')
    // Add small if small
    .replace(/(-small)?-16dp/, '-small')
    // Add large if large
    .replace(/(-large)?-64dp/, '-large')
    // Remove starting icon
    .replace(/^ic-(photo-editor|action|content|programs|status|navigation|status|reviews|filter|device)-/, 'icon-');


  return fileName;
}


async function runImport(directory) {
    const files = await fs.promises.readdir(directory);
    const svgs = files.filter((file) => file.endsWith('.svg'));

    svgs.forEach(async (file) => {
      const filePath = path.join(directory, file);
      const data = await fs.promises.readFile(filePath, 'utf8');
      const newSvg = await svgo.optimize(data, { path: filePath });
      try {
      const dom = JSDOM.fragment(newSvg.data);
      const newDom = JSDOM.fragment('<symbol/>');
      newDom.firstChild.setAttribute('viewBox', dom.firstChild.getAttribute('viewBox'));
      newDom.firstChild.setAttribute('id', getId(newSvg.path));
      const fillSelector = dom.querySelector('use[fill]');
      let fill = fillSelector && fillSelector.getAttribute('fill');
     dom.querySelectorAll('path').forEach((el) => {
        el.removeAttribute('id');
        newDom.firstChild.innerHTML += el.outerHTML
      });
      if (fill === "#111820") {
        fill = null;
      }
      console.log(newDom.firstChild.outerHTML, newSvg, getId(newSvg.path), fill);
      } catch(e) {
        console.log(e);
      }
    });
}


require('yargs') // eslint-disable-line
  .usage('Usage: $0 <command> [options]')
  .command('dir <directory>', 'generates a CDN bundle with the given name', (yargs) => {
    yargs
      .positional('directory', {
        describe: 'directory to import SVG from',
        demand: true,
        default: ''
      })
  }, (argv) => {
    runImport(argv.directory, argv);
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean'
  })
  .demandCommand(1)
  .help()
  .argv