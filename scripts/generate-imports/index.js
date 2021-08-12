const fs = require('fs');
const prettier = require('prettier');
const path = require('path');
const config = require('./config.json');
const currentDir = path.dirname(path.dirname(__dirname));
const files = fs
    .readdirSync(path.join(currentDir, 'dist'))
    .filter((filename) => config.skip.indexOf(filename) === -1);
const browserRemap = [];

function getBrowserFileName(filename) {
    return path.join(currentDir, `${filename}.browser.json`);
}

function getJSFileName(filename) {
    return path.join(currentDir, `${filename}.js`);
}

function getFileName(filename, ds, ext) {
    const arcMatch = ds === config.defaultDS ? '' : `[ds-${ds}]`;
    return path.join(currentDir, `${filename}${arcMatch}.${ext}`);
}

function getFilePath(filename, ds) {
    const file = config.overrideFile[filename] ? config.overrideFile[filename] : `${filename}`;
    const dsPath = config.dsPathSkip.indexOf(filename) > -1 ? '' : `ds${ds}/`;
    return `dist/${filename}/${dsPath}${file}`;
}

function getBrowserRequireSyntax(filename) {
    return `"./${filename}.css"`;
}

function getCSSRequireSyntax(filepath, ext) {
    let fullFilePath = `${filepath}.${ext}`;
    if (filepath.indexOf('.css') === filepath.length - 4 || filepath.includes('svg')) {
        fullFilePath = filepath;
    }
    return `@import "./${fullFilePath}";\n`;
}

function getJSRequireSyntax(filepath, ext) {
    let fullFilePath = `${filepath}.${ext}`;
    if (filepath.indexOf('.css') === filepath.length - 4 || filepath.includes('svg')) {
        fullFilePath = filepath;
    }
    return `import './${fullFilePath}';\n`;
}

async function writeBrowserJSON(filename, base, additional) {
    const additionalRequires = additional.map((addFile) => getBrowserRequireSyntax(addFile));

    const requires = additionalRequires.concat(base ? [getBrowserRequireSyntax(base)] : []);

    const content = `{"dependencies": [${requires.join(',')}]}`;
    return await fs.promises.writeFile(
        getBrowserFileName(filename),
        prettier.format(content, { parser: 'json' })
    );
}

async function writeFile(filename, base, additional, getSyntax, ext) {
    config.dsVersions.forEach(async (ds) => {
        const dsSkip = config.dsSkip[ds] || [];
        if (dsSkip.indexOf(filename) > -1) {
            return;
        }
        const file = base && getFilePath(base, ds);
        const additioanlContent = additional.map((addFile) => getSyntax(addFile, ext));
        const content = additioanlContent.concat(base ? [getSyntax(file, 'css')] : []);

        await fs.promises.writeFile(getFileName(filename, ds, ext), content.join(''));
    });
}

async function cleanFile(file) {
    await fs.promises.unlink(getBrowserFileName(file));
    await fs.promises.unlink(getJSFileName(file));

    config.dsVersions.forEach(async (ds) => {
        const dsSkip = config.dsSkip[ds] || [];
        if (dsSkip.indexOf(file) > -1) {
            return;
        }

        await fs.promises.unlink(getFileName(file, ds, 'css'));
    });
}

async function generateFile(filename) {
    const additional = config.addModules[filename] || [];

    await writeBrowserJSON(filename, filename, additional);
    await writeFile(filename, filename, additional, getCSSRequireSyntax, 'css');
    await fs.promises.writeFile(
        getJSFileName(filename),
        [filename]
            .concat(additional)
            .map((file) => getJSRequireSyntax(file, 'css'))
            .join('')
    );

    config.dsVersions.forEach(async (ds) => {
        const dsSkip = config.dsSkip[ds] || [];
        if (ds !== config.defaultDS && dsSkip.indexOf(filename) === -1) {
            browserRemap.push({
                ds,
                filename,
            });
        }
    });
}

async function generateTopLevelFiles() {
    const browser = {
        requireRemap: browserRemap
            .map((items) => ({
                from: `./${items.filename}.js`,
                to: `./${items.filename}[ds-${items.ds}].js`,
                'if-flag': `ds-${items.ds}`,
            }))
            .concat({
                from: './less.less',
                to: './less[ds-4].less',
                'if-flag': 'ds-4',
            }),
    };

    const indexFiles = browserRemap.filter(
        (item) => config.skipIndex.indexOf(item.filename) === -1
    );
    const contentJS = indexFiles
        .map((item) => {
            return `import './${item.filename}.css';\n`;
        })
        .join('');
    const contentBrowser = indexFiles
        .map((item) => {
            return `"./${item.filename}.css"`;
        })
        .join(',');
    const contentCSS = indexFiles
        .map((item) => {
            return `@import "./${item.filename}.css";\n`;
        })
        .join('');
    await fs.promises.writeFile(
        path.join(currentDir, 'browser.json'),
        prettier.format(JSON.stringify(browser), { parser: 'json' })
    );
    await fs.promises.writeFile(path.join(currentDir, 'index.js'), contentJS);
    await fs.promises.writeFile(path.join(currentDir, 'index.css'), contentCSS);
    await fs.promises.writeFile(
        path.join(currentDir, 'index.browser.json'),
        prettier.format(`{ "dependencies": [ ${contentBrowser} ]}`, { parser: 'json' })
    );
}

async function cleanTopLevelFiles() {
    await fs.promises.unlink(path.join(currentDir, 'browser.json'));
    await fs.promises.unlink(path.join(currentDir, 'index.js'));
    await fs.promises.unlink(path.join(currentDir, 'index.css'));
    await fs.promises.unlink(path.join(currentDir, 'index.browser.json'));
}

async function generateCustomModule(filename, modules) {
    await writeBrowserJSON(filename, null, modules);
    await writeFile(filename, null, modules, getCSSRequireSyntax, 'css');
    await fs.promises.writeFile(
        getJSFileName(filename),
        modules.map((file) => getJSRequireSyntax(file, 'css')).join('')
    );
}

require('yargs') // eslint-disable-line
    .usage('Usage: $0 <command> [options]')
    .command(
        'gen',
        'Generates all imports',
        () => {},
        async () => {
            await Promise.all(
                files.map(async (file) => {
                    return await generateFile(file);
                })
            );
            await Promise.all(
                Object.keys(config.modules).map(async (moduleName) => {
                    return await generateCustomModule(moduleName, config.modules[moduleName]);
                })
            );

            await generateTopLevelFiles();
        }
    )
    .command(
        'clean',
        'Cleans all imports',
        () => {},
        async () => {
            files.forEach(async (file) => {
                return await cleanFile(file);
            });
            Object.keys(config.modules).forEach(async (moduleName) => {
                return await cleanFile(moduleName);
            });
            await cleanTopLevelFiles();
        }
    )
    .option('verbose', {
        alias: 'v',
        type: 'boolean',
    })
    .demandCommand(1)
    .help().argv;
