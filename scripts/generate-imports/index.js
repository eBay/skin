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

function getMJSFileName(filename) {
    return path.join(currentDir, `${filename}.mjs`);
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
    return `"require: ./${filename}.js"`;
}

function getCSSRequireSyntax(filepath, ext) {
    let fullFilePath = `${filepath}.${ext}`;
    if (filepath.endsWith('.css') || filepath.includes('svg')) {
        fullFilePath = filepath;
    }
    return `@import "./${fullFilePath}";\n`;
}

function getJSRequireSyntax(filepath, ext) {
    let fullFilePath = `${filepath}.${ext}`;
    if (filepath.endsWith('.css') || filepath.includes('svg')) {
        fullFilePath = filepath;
    }
    return `require('./${fullFilePath}');\n`;
}

function getMJSRequireSyntax(filepath, ext) {
    let fullFilePath = `${filepath}.${ext}`;
    if (filepath.endsWith('.css') || filepath.includes('svg')) {
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
    await fs.promises.unlink(getMJSFileName(file));

    config.dsVersions.forEach(async (ds) => {
        const dsSkip = config.dsSkip[ds] || [];
        if (dsSkip.indexOf(file) > -1) {
            return;
        }

        await fs.promises.unlink(getFileName(file, ds, 'js'));
        await fs.promises.unlink(getFileName(file, ds, 'css'));
    });
}

async function generateFile(filename) {
    const additional = config.addModules[filename] || [];

    await writeBrowserJSON(filename, filename, additional);
    await writeFile(filename, filename, additional, getJSRequireSyntax, 'js');
    await writeFile(filename, filename, additional, getCSSRequireSyntax, 'css');

    await fs.promises.writeFile(
        getMJSFileName(filename),
        [filename]
            .concat(additional)
            .map((file) => getMJSRequireSyntax(file, 'css'))
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
            .concat(
                browserRemap.map((items) => ({
                    from: `./${items.filename}.css`,
                    to: `./${items.filename}[ds-${items.ds}].css`,
                    'if-flag': `ds-${items.ds}`,
                })),
                {
                    from: './less.less',
                    to: './less[ds-4].less',
                    'if-flag': 'ds-4',
                }
            ),
    };

    const indexFiles = browserRemap.filter(
        (item) => config.skipIndex.indexOf(item.filename) === -1
    );
    const contentJS = indexFiles
        .map((item) => {
            return `require('./${item.filename}.js');\n`;
        })
        .join('');
    const contentMJS = indexFiles
        .map((item) => {
            return `import './${item.filename}.css';\n`;
        })
        .join('');

    const contentBrowser = indexFiles
        .map((item) => {
            return `"require: ./${item.filename}.js"`;
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
    await fs.promises.writeFile(path.join(currentDir, 'index.mjs'), contentMJS);
    await fs.promises.writeFile(path.join(currentDir, 'index.css'), contentCSS);
    await fs.promises.writeFile(
        path.join(currentDir, 'index.browser.json'),
        prettier.format(`{ "dependencies": [ ${contentBrowser} ]}`, { parser: 'json' })
    );
}

async function cleanTopLevelFiles() {
    await fs.promises.unlink(path.join(currentDir, 'browser.json'));
    await fs.promises.unlink(path.join(currentDir, 'index.js'));
    await fs.promises.unlink(path.join(currentDir, 'index.mjs'));
    await fs.promises.unlink(path.join(currentDir, 'index.css'));
    await fs.promises.unlink(path.join(currentDir, 'index.browser.json'));
}

async function generateCustomModule(filename, modules) {
    await writeBrowserJSON(filename, null, modules);
    await writeFile(filename, null, modules, getCSSRequireSyntax, 'css');
    await writeFile(filename, null, modules, getJSRequireSyntax, 'js');

    await fs.promises.writeFile(
        getMJSFileName(filename),
        modules.map((file) => getMJSRequireSyntax(file, 'css')).join('')
    );
}

async function generateTopLevel() {
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

async function cleanTopLevel() {
    await Promise.all(
        files.map(async (file) => {
            try {
                return await cleanFile(file);
            } catch (e) {
                console.error(e);
            }
        })
    );

    await Promise.all(
        Object.keys(config.modules).map(async (moduleName) => {
            try {
                return await cleanFile(moduleName);
            } catch (e) {
                console.error(e);
            }
        })
    );

    try {
        await cleanTopLevelFiles();
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    cleanTopLevel,
    generateTopLevel,
};
