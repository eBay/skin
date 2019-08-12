#!/usr/bin/env node
const glob = require('glob');
const path = require('path');
const dsList = ['ds4', 'ds6'];
const less = require('less');
const fs = require('fs');
const pkg = require('../package.json');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const cleanCSSPlugin = new LessPluginCleanCSS({ advanced: true });
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const autoprefixPlugin = new LessPluginAutoPrefix();
const currentDir = path.dirname(__dirname);
const { exec } = require('child_process');
const processed = [];
const skipped = []

function getCDNPath(bundle, dsV) {
  return `${currentDir}/_cdn/${bundle}/v${pkg.version}/${dsV}`;
}

/**
 * Generates a raw less file for given css file
 * @param {*} file
 * @param {*} classDef The prefix with all the scopeSpecificity
 */
function generateRawLess(file, classDef, args) {
  const fileName = path.basename(file, '.css');
  if (args.modules.length > 0 && args.modules.indexOf(fileName) === -1) {
    skipped.push(fileName);
    return '';
  }
  processed.push(fileName);
  if (!!classDef) {
    // Need to read file and output
    const cssContents = fs.readFileSync(file);
    return `${classDef} {
             ${cssContents}
            }`;
  } else {
    return `@import (inline) "${file}";`;
  }

}

/**
 * Generates a single less file from all CSS files in the dist directory
 * @param {*} dsV The DS version (either 4 or 6)
 * @param {*} args Yargs passed in
 */
function generateLESS(dsV, args) {
  let classDef = '';
  if (args.scopeClass) {
    for (let i = 0; i < args.scopeSpecificity; i++) {
      classDef += `.${args.scopeClass}`;
    }
  }
  return new Promise((resolve, reject) => {
    glob(`${currentDir}/dist/**/${dsV}/**/*.css`, (err, files) => {
      const compiled = files.map((file) => generateRawLess(file, classDef, args)).join('\n');

      if (args.modules.length > 0) {
        console.log(`Processed ${processed.length} modules for ${dsV}`)
      }
      if (args.verbose) {
        console.log(`Modules processed: ${processed.join(',')}`)

        console.log(`Skipped ${skipped.length} modules`)
        console.log(`Modules skipped: ${skipped.join(',')}`)
      }
      resolve({
        css: compiled,
        dsV,
      });
    })
  })
}

/**
 * Runs the compilation of less
 * @param {*} res The response with dsVersion and raw css/less
 * @param {*} plugin The given plugin to run the render with
 */
function compileLess(res, plugin) {
  return Promise.all(res.map((raw) => less.render(raw.css, { plugins: [plugin] })
    .then((render) => ({
      css: render.css,
      dsV: raw.dsV
    }))
  ));
}

/**
 * Runs npm build to get dist output
 */
function prebuild() {
  return new Promise((resolve, reject) => {
    console.log('Running build...')
    exec('npm run build', (err) => {
      if (err) {
        return reject(err);
      }
      console.log('npm build successful')
      return resolve();
    });
  });
}

function makeDir(path) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, { recursive: true }, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

function writeFile(file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

function writeAllFiles(res, args) {
  return Promise.all(res.map((out) => {
    const path = getCDNPath(args.name, out.dsV);
    return makeDir(path).then(() => writeFile(`${path}/skin.min.css`, out.css));
  }))

}

/**
 * Main function to start, generates less files and compiles and writes them
 * @param {*} name
 * @param {*} args
 */
function runCSSBuild(name, args) {
  prebuild().then(() => Promise.all(
    dsList.map((ds) => generateLESS(ds, args))
  ))
    .then((res) => compileLess(res, autoprefixPlugin))
    .then((res) => compileLess(res, cleanCSSPlugin))
    .then((res) => writeAllFiles(res, args))
    .then(() => {
      console.log(`Bundles created successfully!
Please upload the ./_cdn/${args.name}/${pkg.version} directory to CDN
`);
    }).catch((e) => {
      console.error(e);
    });
}


require('yargs') // eslint-disable-line
  .command('gen [name]', 'generates a CDN bundle with the given name', (yargs) => {
    yargs
      .positional('name', {
        describe: 'name to generate bundle',
        default: 'skin'
      })
  }, (argv) => {
    runCSSBuild(argv.name, argv);
  })
  .option('scope-class', {
    describe: 'Scoped class to prefix bundle with',
    default: ''
  })
  .option('scope-specificity', {
    describe: 'How many times to repeat scope',
    default: '1'
  })
  .option('modules', {
    alias: 'm',
    type: 'array',
    default: []
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean'
  })
  .argv