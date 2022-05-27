'use strict';
const fs = require('fs');
const path = require('path');
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, 'src', 'svg');
const jsdom = require('jsdom');
const prettier = require('prettier');
const { JSDOM } = jsdom;
const configFilePath = path.resolve(currentDir, 'docs', '_data', 'icons.yaml');
const file = fs.readFileSync(configFilePath, 'utf8');
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

function stripName(name, mappedPrefix, mappedPostfix) {
    const matcher = new RegExp(
        `^((?:${mappedPrefix}-|icon-))([\\w-]+?)((?:${mappedPostfix || ''}|-small))$`
    );
    const nameMatch = name.match(matcher);
    if (nameMatch) {
        const [, prefix, newName, postfix] = nameMatch;
        return {
            prefix,
            name: newName,
            postfix,
        };
    }
    return {
        name,
    };
}

async function runGenerate() {
    const files = await getFiles(svgDir);
    const imageList = {};
    const smallImageList = {};
    const svgs = files.filter((f) => f.endsWith('.svg'));
    await Promise.all(
        svgs.map(async (filePath) => {
            const filename = path.parse(filePath).name;
            const mappedName = config[filename];
            if (!mappedName) {
                return;
            }
            imageList[filename] = imageList[filename] || [];
            smallImageList[filename] = smallImageList[filename] || [];
            const data = await fs.promises.readFile(filePath, 'utf8');
            const symbols = JSDOM.fragment(data);
            const lessFile = ['/* This is a generated file, DO NOT EDIT */'];
            symbols.querySelectorAll('symbol').forEach((symbol) => {
                const nameObj = stripName(symbol.id, mappedName.prefix, mappedName.postfix);

                if (nameObj.postfix === '-small') {
                    smallImageList[filename].push(nameObj.name);
                } else {
                    imageList[filename].push(nameObj.name);
                }

                if (config.skip.indexOf(symbol.id) > -1) {
                    return;
                }
                const sizes = symbol.getAttribute('viewBox');
                const [, , width, height] = sizes.split(' ');
                lessFile.push(
                    `svg.${nameObj.prefix}-${nameObj.name}${nameObj.postfix} { height: ${height}px; width: ${width}px; }`
                );
            });

            imageList[filename].sort();
            await fs.promises.writeFile(
                `src/less/icon/generated/${filename}.less`,
                prettier.format(lessFile.join('\n'), { parser: 'less', tabWidth: 4 })
            );
        })
    );
    Object.keys(config).forEach((key) => {
        config[key].list = imageList[key] || [];
        config[key].smallList = smallImageList[key] || [];
    });
    await fs.promises.writeFile(configFilePath, YAML.stringify(config));
    console.log(config);
}

module.exports = { runGenerate };
