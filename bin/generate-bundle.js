#!/usr/bin/env node
const glob = require('glob');
const dsList = ['ds4', 'ds6'];
const less = require('less');
var LessPluginCleanCSS = require('less-plugin-clean-css');
 var cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});
 var LessPluginAutoPrefix = require('less-plugin-autoprefix');
 var autoprefixPlugin = new LessPluginAutoPrefix();

function generateLESS(dsV, args) {

            let classDef = '';
          if (args.scopeClass) {
            for (let i = 0; i < args.scopeSpecificity; i ++) {
              classDef += `.${args.scopeClass}`;
            }
          }

  return new Promise((resolve, reject) => {
    glob(`dist/**/${dsV}/**/*.css`, (err, files) => {
        resolve(files.map((file) => {
          const statement = `@import (inline) "${file}";`;
          if (classDef) {
           return `${classDef} {
              ${statement}
            }`;
          } else {
            return statement
          }
        }).join('\n'));
    })
  })
}

function fetchCSS(name, args) {
  Promise.all(
    dsList.map((ds) => generateLESS(ds, args))
).then((res) => {
    return Promise.all(res.map((f) => less.render(f, {plugins: [cleanCSSPlugin, autoprefixPlugin]})));
  }).then((output) => {
    console.log(output);
    console.log(args);

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