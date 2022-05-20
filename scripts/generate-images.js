'use strict';
const fs = require('fs');
const path = require('path');
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, 'src', 'svg');
const jsdom = require('jsdom');
const prettier = require('prettier');
const { JSDOM } = jsdom;
const file = fs.readFileSync(path.resolve(currentDir, 'docs', '_data', 'icons.yaml'), 'utf8');
const YAML = require('yaml');
const config = YAML.parse(file);

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
    let index = name.indexOf(mappedName);
    if (index === 0) {
        return `${mappedName}-${name.slice(mappedName.length)}`;
    }
    const iconPrefix = 'icon-';
    index = name.indexOf(iconPrefix);
    if (index === 0) {
        return `icon--${name.slice(iconPrefix.length)}`;
    }
    return name;
}

async function runGenerate() {
    const files = await getFiles(svgDir);
    const svgs = files.filter((f) => f.endsWith('.svg'));
    await Promise.all(
        svgs.map(async (filePath) => {
            const filename = path.parse(filePath).name;
            const mappedName = config[filename];
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
                        mappedName.prefix
                    )} { height: ${height}px; width: ${width}px; }`
                );
            });

            await fs.promises.writeFile(
                `src/less/${mappedName.output || mappedName.prefix}/generated-icons.less`,
                prettier.format(lessFile.join('\n'), { parser: 'less', tabWidth: 4 })
            );
        })
    );
}

module.exports = { runGenerate };
