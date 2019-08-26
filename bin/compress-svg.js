#!/usr/bin/env node
'use strict';


var FS = require('fs'),
  PATH = require('path'),
  SVGO = require('svgo'),
  files = [
    PATH.resolve(__dirname, '../', 'src', 'svg', 'ds6', 'icons.svg'),
    PATH.resolve(__dirname, '../', 'src', 'svg', 'ds4', 'icons.svg'),
  ],
  svgo = new SVGO({
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

files.forEach((filePath) => {

  FS.readFile(filePath, 'utf8', function (err, data) {

    if (err) {
      throw err;
    }


    svgo.optimize(data, { path: filePath }).then(function (result) {
      FS.writeFileSync(result.path, result.data);
      // {
      //     // optimized SVG data string
      //     data: '<svg width="10" height="20">test</svg>'
      //     // additional info such as width/height
      //     info: {
      //         width: '10',
      //         height: '20'
      //     }
      // }

    });

  });


});