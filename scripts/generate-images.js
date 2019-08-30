#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const Svgo = require('svgo');
const jsdom = require("jsdom");
const config = require('./image-config.json');
const { JSDOM } = jsdom;
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, 'src', 'svg');
const files = [
  path.resolve(svgDir, 'ds6', 'icons.svg'),
  path.resolve(svgDir, 'ds4', 'icons.svg'),
];
const { base64Config, svgoConfig } = config;
const svgo = new Svgo(svgoConfig);

files.forEach(async (filePath) => {
  try {
    const dsVersion = filePath.indexOf('ds6') > -1 ? 'ds6' : 'ds4';
    const data = await fs.promises.readFile(filePath, 'utf8')
    const result = await svgo.optimize(data, { path: filePath });
    await fs.promises.writeFile(result.path, result.data)
    const svgGenerator = new SVGGenerator(result, dsVersion)
    await svgGenerator.generateAllBase64();
    await writeSymbols(result, dsVersion);
  } catch (e) {
    console.error('An error has occurred', e)
  }
});

async function writeSymbols(result, dsVersion) {
  const dom = new JSDOM(result.data);
  const fileOutput = result.data.replace(/<svg.*>/, '<svg hidden>').replace(/<\?xml.*\?>(?:\s|\S)/, '');
  await fs.promises.writeFile(`${currentDir}/docs/_includes/${dsVersion}/symbols.html`, fileOutput);
}

class SVGGenerator {
  constructor(allSVGs, dsVersion) {
    this.allSVGs = allSVGs;
    this.dsVersion = dsVersion;
    this.dom = new JSDOM(this.allSVGs.data);
    this.output = [];
  }

  async generateAllBase64() {
    this.dom.window.document.querySelectorAll("symbol").forEach((svg) => {
      this.generateBase64(svg, base64Config);
      base64Config.modules.forEach((module) => {
        if (module.list.indexOf(svg.id) > -1) {
          this.generateBase64(svg, module);
        }
      });
    });

    return await fs.promises.writeFile(`${currentDir}/src/less/variables/${this.dsVersion}/base64-variables.less`,
      `// This is a generated file. Do not edit!
${this.output.join('\n')}
`
    );
  }

  getColor(id, module) {
    const lookup = module || base64Config;
    if (module.overrides && module.overrides[id]) {
      return module.overrides[id];
    }
    if (this.dsVersion === 'ds6') {
      return lookup.ds6Color || lookup.color;
    } else {

      return lookup.ds4Color || lookup.color;
    }
  }

  generateBase64(svg, module) {
    const color = this.getColor(svg.id, module);
    const win = this.dom.window;
    let variableName = `@${svg.id}`;
    if (module.prefix) {
      variableName += `-${module.prefix}`;
    }
    variableName += `-base64`;
    if (module.suffix) {
      variableName += `-${module.suffix}`;
    }
    svg.querySelectorAll('path').forEach((path) => {
      if (!path.hasAttribute('fill') && !!color) {
        path.setAttribute('fill', color);
      }
    })
    const base64 = win.btoa((new win.XMLSerializer()).serializeToString(svg).replace('<symbol', '<svg').replace('/symbol>', '/svg>').replace(/(  )+/g, ''))
    this.output.push(`${variableName}: "${base64}";`);
  }
}
