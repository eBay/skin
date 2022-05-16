'use strict';
const fs = require('fs');
const path = require('path');
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, 'src', 'svg');
const jsdom = require('jsdom');
const prettier = require('prettier');
const { JSDOM } = jsdom;
const config = require('./image-config.json');

async function getFiles(dir) {
    const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        dirents.map((dirent) => {
            const res = path.resolve(dir, dirent.name);
            return dirent.isDirectory() ? getFiles(res) : res;
        })
    );
    return Array.prototype.concat(...files);
}

function stripName(name, mappedName) {
    const index = name.indexOf(mappedName);
    return index === 0 ? `${mappedName}-${name.slice(mappedName.length)}` : name;
}

async function runImport() {
    const files = await getFiles(svgDir);
    const svgs = files.filter((file) => file.endsWith('.svg'));
    await Promise.all(
        svgs.map(async (filePath) => {
            const filename = path.basename(filePath);
            const mappedName = config.aliases[filename];
            if (!mappedName) {
                return;
            }
            const data = await fs.promises.readFile(filePath, 'utf8');
            const symbols = JSDOM.fragment(data);
            const lessFile = ['/* This is a generated file, DO NOT EDIT */'];
            symbols.querySelectorAll('symbol').forEach((symbol) => {
                if (config.skip.indexOf(symbol.id) > -1) {
                    return;
                }
                const sizes = symbol.getAttribute('viewBox');
                const [, , width, height] = sizes.split(' ');
                lessFile.push(
                    `svg.${stripName(
                        symbol.id,
                        mappedName
                    )} { height: ${height}px; width: ${width}px; }`
                );
            });

            await fs.promises.writeFile(
                `src/less/${mappedName}/generated-icons.less`,
                prettier.format(lessFile.join('\n'), { parser: 'less', tabWidth: 4 })
            );
        })
    );
}

require('yargs') // eslint-disable-line
    .usage('Usage: $0 <command> [options]')
    .command(
        'gen',
        'generates less files with styles from svg icons',
        () => {},
        () => {
            try {
                runImport();
            } catch (e) {
                console.log(e);
            }
        }
    )
    .option('verbose', {
        alias: 'v',
        type: 'boolean',
    })
    .demandCommand(1)
    .help().argv;
