const fs = require('fs');
const prettier = require('prettier');
const path = require('path');
const config = require('./config.json');
const currentDir = path.dirname(path.dirname(__dirname));
const distDir = path.join(currentDir, 'dist');
const files = fs
    .readdirSync(distDir)
    .filter(
        (filename) => config.skip.indexOf(filename) === -1 && config.nested.indexOf(filename) === -1
    );
const browserRemap = [];
const { ModuleBuilder } = require('./module-builder');

async function generateTopLevelFiles() {
    const browser = {};

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

    // Generate SVGs
    const svgDistDir = path.join(distDir, 'svg');
    await fs.promises.copyFile(
        path.join(svgDistDir, 'icons.svg'),
        path.join(currentDir, 'svg.svg')
    );
}

async function cleanTopLevelFiles() {
    await fs.promises.unlink(path.join(currentDir, 'browser.json'));
    await fs.promises.unlink(path.join(currentDir, 'index.js'));
    await fs.promises.unlink(path.join(currentDir, 'index.mjs'));
    await fs.promises.unlink(path.join(currentDir, 'index.css'));
    await fs.promises.unlink(path.join(currentDir, 'index.browser.json'));
    await fs.promises.unlink(path.join(currentDir, 'svg.svg'));
}

const moduleData = [].concat(
    files.map(
        (moduleName) =>
            new ModuleBuilder(moduleName, config, {
                distDir,
            })
    ),
    Object.keys(config.modules).map(
        (moduleName) =>
            new ModuleBuilder(moduleName, config, {
                hasBaseModule: false,
                distDir,
            })
    ),
    config.nested.map(
        (moduleName) =>
            new ModuleBuilder(moduleName, config, {
                isNested: true,
                distDir,
            })
    )
);

async function generateTopLevel() {
    for (const mod of moduleData) {
        try {
            await mod.run();
        } catch (e) {
            console.error(e);
        }
    }
    await generateTopLevelFiles();
}

async function cleanTopLevel() {
    for (const mod of moduleData) {
        try {
            await mod.clean();
        } catch (e) {
            console.error(e);
        }
    }
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
