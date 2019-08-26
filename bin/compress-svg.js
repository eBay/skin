#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const Svgo = require('svgo');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, 'src', 'svg');
const files = [
  path.resolve(svgDir, 'ds6', 'icons.svg'),
  path.resolve(svgDir, 'ds4', 'icons.svg'),
];
const base64Config = {
  ds6Color: '#111820',
  overrides: {
    'icon-checkbox-checked': '#3665F2'
  },
  modules: [{
    suffix: 'light',
    color: '#ffffff',
    list: [
      'icon-arrow-left',
      'icon-arrow-left-small',
      'icon-arrow-right',
      'icon-arrow-right-small',
      'icon-checkbox-checked',
      'icon-checkbox-checked-small',
      'icon-checkbox-unchecked',
      'icon-checkbox-unchecked-small',
      'icon-chevron-down',
      'icon-chevron-down-small',
      'icon-chevron-left',
      'icon-chevron-left-small',
      'icon-chevron-right',
      'icon-chevron-right-small',
      'icon-close',
      'icon-close-small',
      'icon-radio-checked',
      'icon-radio-checked-small',
      'icon-radio-unchecked',
      'icon-radio-unchecked-small',
      'icon-tick',
      'icon-tick-small',
      'icon-chevron-down-bold',
      'icon-window',
    ]
  }]
}
const svgo = new Svgo({
  plugins: [{
    "cleanupAttrs": true
  }, {
    "removeDoctype": true
  }, {
    "removeXMLProcInst": false
  }, {
    "removeComments": false
  }, {
    "removeMetadata": true
  }, {
    "removeTitle": true
  }, {
    "removeDesc": true
  }, {
    "removeUselessDefs": false
  }, {
    "removeEditorsNSData": true
  }, {
    "removeEmptyAttrs": true
  }, {
    "removeHiddenElems": false
  }, {
    "removeEmptyText": true
  }, {
    "removeEmptyContainers": true
  }, {
    "removeViewBox": false
  }, {
    "cleanupEnableBackground": true
  }, {
    "convertStyleToAttrs": true
  }, {
    "convertColors": true
  }, {
    "convertPathData": true
  }, {
    "convertTransform": true
  }, {
    "removeUnknownsAndDefaults": true
  }, {
    "removeNonInheritableGroupAttrs": true
  }, {
    "removeUselessStrokeAndFill": false
  }, {
    "removeUnusedNS": true
  }, {
    "minifyStyles": false
  }, {
    "cleanupIDs": false
  }, {
    "cleanupNumericValues": true
  }, {
    "moveElemsAttrsToGroup": true
  }, {
    "moveGroupAttrsToElems": true
  }, {
    "collapseGroups": true
  }, {
    "removeRasterImages": false
  }, {
    "mergePaths": true
  }, {
    "convertShapeToPath": true
  }, {
    "sortAttrs": true
  }, {
    "removeDimensions": true
  }],
  js2svg: { pretty: true }

});

files.forEach(async (filePath) => {
  try {
    const dsVersion = filePath.indexOf('ds6') > -1 ? 'ds6' : 'ds4';
    const data = await fs.promises.readFile(filePath, 'utf8')
    const result = await svgo.optimize(data, { path: filePath });
    await fs.promises.writeFile(result.path, result.data)
    const svgGenerator = new SVGGenerator(result, dsVersion)
    await svgGenerator.generateAllBase64();
  } catch (e) {
    console.error('An error has occurred', e)
  }
});

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
