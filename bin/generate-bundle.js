#!/usr/bin/env node
const glob = require('glob');
const path = require('path');
const less = require('less');
const fs = require('fs');
const pkg = require('../package.json');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const cleanCSSPlugin = new LessPluginCleanCSS({ advanced: true });
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const autoprefixPlugin = new LessPluginAutoPrefix();
const currentDir = path.dirname(__dirname);
const { exec } = require('child_process');

// The list of directories in the dist to pull
const dsList = ['ds4', 'ds6'];

/**
 * Main Processing class. Holds info about args passed and ds version
 */
class CssProcesser {
  constructor(dsV, args) {
    this.dsV = dsV;
    this.args = args;
    this.processed = [];
    this.skipped = [];

    let classDef = '';
    if (args.scopeClass) {
      for (let i = 0; i < args.scopeSpecificity; i++) {
        classDef += `.${args.scopeClass}`;
      }
    }
    this.classDef = classDef;
  };

  run() {
    return this.generateLESS()
      .then((raw) => this.compileLess(raw, autoprefixPlugin))
      .then((raw) => this.compileLess(raw, cleanCSSPlugin))
      .then((raw) => this.writeAllFiles(raw))
      .catch((e) => console.error(e));
  }

  getDistCss() {
    return new Promise((resolve, reject) => {
      glob(`${currentDir}/dist/**/${this.dsV}/**/*.css`, (err, files) => {
        if (err) {
          return reject(err);
        }
        resolve(files);
      });
    });
  }

  /**
   * Generates a raw less file for given css file
   * @param {*} file
   */
  generateRawLess(file) {
    const fileName = path.basename(file, '.css');
    if (this.args.modules.length > 0 && this.args.modules.indexOf(fileName) === -1) {
      this.skipped.push(fileName);
      return '';
    }
    this.processed.push(fileName);

    if (!!this.classDef) {
      // Need to read file and output
      const cssContents = fs.readFileSync(file);
      return `${this.classDef} {
             ${cssContents}
            }`;
    } else {
      return `@import (inline) "${file}";`;
    }
  }

  processFiles(files) {
    return new Promise((resolve, reject) => {
      const compiled = files.map((file) => this.generateRawLess(file)).join('\n');
      const processed = this.processed
      const skipped = this.skipped;
      const dsV = this.dsV;

      if (this.args.modules.length > 0 || this.args.verbose) {
        console.log(`Processed ${processed.length} modules for ${dsV}`)
      }
      if (this.args.verbose) {
        console.log(`Modules processed: ${processed.join(',')} for ${dsV}`)

        console.log(`Skipped ${skipped.length} modules for ${dsV}`)
        console.log(`Modules skipped: ${skipped.join(',')} for ${dsV}`)
      }
      resolve(compiled);
    });
  }

  generateLESS() {
    return this.getDistCss(this.dsV).then((files) => this.processFiles(files));
  }

  compileLess(raw, plugin) {
    return less.render(raw, { plugins: [plugin] })
      .then((render) => render.css,
      );
  }

  writeAllFiles(raw) {
    const path = getCDNPath(this.args.name, this.dsV);
    return makeDir(path).then(() => writeFile(`${path}/skin.min.css`, raw));
  }
}

function getCDNPath(bundle, dsV) {
  return `${currentDir}/_cdn/${bundle}/v${pkg.version}/${dsV}`;
}


/**
 * Runs the compilation of less
 * @param {*} res The response with dsVersion and raw css/less
 * @param {*} plugin The given plugin to run the render with
 */
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



/**
 * Main function to start, generates less files and compiles and writes them
 * @param {*} name
 * @param {*} args
 */
function runCSSBuild(name, args) {
  prebuild().then(() => Promise.all(
    dsList.map((ds) => {
      const cssProcesser = new CssProcesser(ds, args);
      return cssProcesser.run();
    })))
    .then(() => {
      console.log(`Bundles created successfully!
Please upload the ./_cdn/${args.name}/${pkg.version} directory to CDN
`);
    }).catch((e) => {
      console.error(e);
    });
}


require('yargs') // eslint-disable-line
  .command('list', 'List all available modules', (yargs) => {


  }, (argv) => {
    dsList.forEach((dsV) => {
      const cssProcesser = new CssProcesser(dsV, argv);
      cssProcesser.getDistCss().then((files) => {
        console.log(`======================`);
        console.log(`${dsV} - modules avaiable`);
        console.log(`======================`);
        files.forEach((file) => {
          console.log(path.basename(file, '.css'));
        })
        console.log()
        console.log()

      })
    });
  })
  .command('gen [name]', 'generates a CDN bundle with the given name', (yargs) => {
    yargs
      .positional('name', {
        describe: 'name to generate bundle',
        default: 'skin'
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
        describe: 'Space separated list of modules to include. If empty, will include all',
        default: []
      })

  }, (argv) => {
    runCSSBuild(argv.name, argv);
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean'
  })
  .argv