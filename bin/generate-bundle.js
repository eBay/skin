#!/usr/bin/env node
const glob = require('glob');
const path = require('path');
const dsList = ['ds4', 'ds6'];
const less = require('less');
const fs = require('fs');
var pkg = require('../package.json');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleanCSSPlugin = new LessPluginCleanCSS({ advanced: true });
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefixPlugin = new LessPluginAutoPrefix();
const currentDir = path.dirname(__dirname);

function getCDNPath(bundle, dsV) {
  console.log()
    return `${currentDir}/_cdn/${bundle}/v${pkg.version}/${dsV}`;
}

function generateLESS(dsV, args) {
  let classDef = '';
  if (args.scopeClass) {
    for (let i = 0; i < args.scopeSpecificity; i++) {
      classDef += `.${args.scopeClass}`;
    }
  }

  return new Promise((resolve, reject) => {
    glob(`${currentDir}/dist/**/${dsV}/**/*.css`, (err, files) => {
      const compiled = files.map((file) => {
        if (!!classDef) {
          // Need to read file and output
          const cssContents = fs.readFileSync(file);
          return `${classDef} {
             ${cssContents}
            }`;
        } else {
          return `@import (inline) "${file}";`;
        }
      }).join('\n');
      resolve({
        css: compiled,
        dsV,
      });
    })
  })
}

function compileLess(res, plugin) {
  return Promise.all(res.map((raw) => less.render(raw.css, { plugins: [plugin] })
    .then((render) => {
      console.log(Object.keys(render))
      return {
      css: render.css,
      dsV: raw.dsV
    };
  }
    )
  ));
}

function fetchCSS(name, args) {
  Promise.all(
    dsList.map((ds) => generateLESS(ds, args))
  )
    .then((res) => compileLess(res, autoprefixPlugin))
    .then((res) => compileLess(res, cleanCSSPlugin))
    .then((output) => {
      output.forEach((out) => {
        const path = getCDNPath(args.name, out.dsV);
        fs.mkdirSync(path, {recursive: true});
        fs.writeFileSync(`${path}/skin.min.css`, out.css);
        console.log(`Wrote output to ${path}`);
      })
      console.log(`Bundle created successfully!
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
    console.log('ok')
    fetchCSS(argv.name, argv);
  })
  .option('scope-class', {
    describe: 'Scoped class to prefix bundle with',
    default: ''
  })
  .option('scope-specificity', {
    describe: 'How many times to show scope',
    default: '1'
  })
  .option('modules', {
    alias: 'm',
    default: []
  })
  .argv