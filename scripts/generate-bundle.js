#!/usr/bin/env node
/* eslint-disable no-console */
const glob = require('glob');
const path = require('path');
const less = require('less');
const fs = require('fs');
const pkg = require('../package.json');
const rimraf = require('rimraf');
const CleanCSS = require('clean-css');
const cleanCSSInstance = new CleanCSS({
    advanced: true,
    promise: true,
});
const currentDir = path.dirname(__dirname);
const { exec } = require('child_process');
const bodyMatch = new RegExp('body ?({(?:.|\\s|\\S)*?})', 'm');

// The list of directories in the dist to pull
const dsList = ['ds4', 'ds6'];

/**
 * Main Processing class. Holds info about args passed and ds version
 */
class CssProcesser {
    constructor(dsVersion, args) {
        this.dsVersion = dsVersion;
        this.args = args;
        this.processed = [];
        this.skipped = [];

        let classDef = '';
        const scopeClass = args.scopeClass;
        if (scopeClass) {
            for (let i = 0; i < args.scopeSpecificity; i++) {
                classDef += `.${scopeClass}`;
            }
        }
        this.classDef = classDef;
    }

    get minify() {
        return this.args.minify !== false;
    }

    run() {
        return this.generateLESS()
            .then((raw) => this.compileLess(raw))
            .then((raw) => (this.minify ? cleanCSSInstance.minify(raw) : { styles: raw }))
            .then((raw) => this.writeAllFiles(raw.styles))
            .catch((e) => console.error(e));
    }

    getDistCss() {
        return new Promise((resolve, reject) => {
            glob(`${currentDir}/dist/**/${this.dsVersion}/**/*.css`, (err, files) => {
                if (err) {
                    return reject(err);
                }
                resolve(files);
            });
        });
    }

    wrap(cssContents) {
        return `${this.classDef} {
             ${cssContents}
            }`;
    }

    rewrapBody(cssContents) {
        // First get match
        const body = bodyMatch.exec(cssContents);
        if (body && body[1]) {
            // Add new body
            const newContents = cssContents.replace(bodyMatch, '');
            return `body ${this.classDef} ${body[1]}
      ${this.wrap(newContents)}
     `;
        }
        return this.wrap(cssContents);
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
            const cssContents = fs.readFileSync(file).toString();
            // Check if it's global module and change body
            if (fileName === 'global') {
                return this.rewrapBody(cssContents);
            }
            return this.wrap(cssContents);
        }
        return `@import (inline) "${file}";`;
    }

    processFiles(files) {
        return new Promise((resolve) => {
            const compiled = files.map((file) => this.generateRawLess(file)).join('\n');
            const processed = this.processed;
            const skipped = this.skipped;
            const dsVersion = this.dsVersion;

            if (this.args.modules.length > 0 || this.args.verbose) {
                console.log(`Processed ${processed.length} modules for ${dsVersion}`);
            }
            if (this.args.verbose) {
                console.log(`Modules processed: ${processed.join(',')} for ${dsVersion}`);

                console.log(`Skipped ${skipped.length} modules for ${dsVersion}`);
                console.log(`Modules skipped: ${skipped.join(',')} for ${dsVersion}`);
            }
            resolve(compiled);
        });
    }

    generateLESS() {
        return this.getDistCss(this.dsVersion).then((files) => this.processFiles(files));
    }

    compileLess(raw) {
        return less.render(raw).then((render) => render.css);
    }

    writeAllFiles(raw) {
        const cdnPath = getCDNPath(this.args.name, this.dsVersion);
        rimraf.sync(cdnPath);
        return makeDir(cdnPath).then(() =>
            writeFile(
                `${cdnPath}/skin.${this.minify ? 'min.' : ''}css`,
                `/* autoprefixer: off */\n${raw}\n/* autoprefixer: on */`
            )
        );
    }
}

function getCDNPath(bundle, dsVersion) {
    return `${currentDir}/_cdn/${bundle}/v${pkg.version}/${dsVersion}`;
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
        console.log('Running build...');
        exec('npm run build:css', (err) => {
            if (err) {
                return reject(err);
            }
            console.log('npm build successful');
            return resolve();
        });
    });
}

function makeDir(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, { recursive: true }, (err) => {
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
    prebuild()
        .then(() =>
            Promise.all(
                dsList.map((ds) => {
                    const cssProcesser = new CssProcesser(ds, args);
                    return cssProcesser.run();
                })
            )
        )
        .then(() => {
            console.log(`Bundles created successfully!
Please upload the ./_cdn/${args.name}/v${pkg.version} directory to CDN
`);
        })
        .catch((e) => {
            console.error(e);
        });
}

async function listBundles(argv) {
    await prebuild();
    dsList.forEach((dsVersion) => {
        const cssProcesser = new CssProcesser(dsVersion, argv);
        cssProcesser.getDistCss().then((files) => {
            console.log(`======================`);
            console.log(`${dsVersion} - modules avaiable`);
            console.log(`======================`);
            files.forEach((file) => {
                console.log(path.basename(file, '.css'));
            });
        });
    });
}

module.exports = {
    runCSSBuild,
    listBundles,
};
