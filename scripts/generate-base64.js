#!/usr/bin/env node
'use strict';

const helper = require('./generate-helper');

helper.runner(async (data) => {
  const result = await helper.optimizeSVG(data.filePath);
  const svgGenerator = new helper.SVGGenerator(result, data.dsVersion);
  await svgGenerator.generateAllBase64();
});
