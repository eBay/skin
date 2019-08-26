#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const Svgo = require('svgo');
const files = [
  path.resolve(__dirname, '../', 'src', 'svg', 'ds6', 'icons.svg'),
  path.resolve(__dirname, '../', 'src', 'svg', 'ds4', 'icons.svg'),
];
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
  const data = await fs.promises.readFile(filePath, 'utf8');
  const result = await svgo.optimize(data, { path: filePath });
  fs.promises.writeFile(result.path, result.data);
});
