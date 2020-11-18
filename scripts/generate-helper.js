const fs = require('fs');
const path = require('path');
const Svgo = require('svgo');
const jsdom = require("jsdom");
const config = require('./image-config.json');
const { JSDOM } = jsdom;
const currentDir = path.dirname(__dirname);
const svgDir = path.resolve(currentDir, 'src', 'svg');
const { exec } = require('child_process');
const files = [
  path.resolve(svgDir, 'ds6', 'icons.svg'),
  path.resolve(svgDir, 'ds4', 'icons.svg'),
];
const { base64Config, svgoConfig } = config;
const svgo = new Svgo(svgoConfig);

async function runner(executer) {
    await Promise.all(files.map(async (filePath) => {
        try {
            const dsVersion = filePath.indexOf('ds6') > -1 ? 'ds6' : 'ds4';
            await executer({
                dsVersion,
                filePath,
            })
            console.log(`Wrote all ${dsVersion} files`);
        } catch (e) {
            console.error('An error has occurred', e);
        }
    }));
    await postBuild();
}

async function optimizeSVG(filePath) {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return await svgo.optimize(data, { path: filePath });
}

async function postBuild() {
    return new Promise((resolve, reject) => {
        console.log('Running build...');
        exec('npm run build', (err) => {
            if (err) {
                return reject(err);
            }
            console.log('Build successful!');
            return resolve();
        });
    });
}

async function writeSymbols(result, dsVersion) {
    const fileOutput = rawSvgToHtml(result.data);
    await fs.promises.writeFile(`${currentDir}/docs/_includes/${dsVersion}/symbols.html`, fileOutput);
}

function rawSvgToHtml(data) {
    return data.replace(/<svg.*>/, '<div hidden>\n<svg>').replace('</svg>', '</svg>\n</div>').replace(/<\?xml.*\?>(?:\s|\S)/, '');
}

class SVGGenerator {
    constructor(allSVGs, dsVersion) {
        this.allSVGs = allSVGs;
        this.dsVersion = dsVersion;
        this.dom = new JSDOM(this.allSVGs.data);
        this.output = [];
    }

    async generateAllBase64() {
        this.dom.window.document.querySelectorAll("symbol").forEach((svg) => {
            this.generateBase64(svg, base64Config);
            base64Config.modules.forEach((module) => {
                if (module.list.indexOf(svg.id) > -1) {
                    this.generateBase64(svg, module);
                }
            });
        });

        return await fs.promises.writeFile(`${currentDir}/src/less/variables/${this.dsVersion}/base64-variables.less`,
            `// This is a generated file. Do not edit!
${this.output.join('\n')}
`
        );
    }

    getColor(id, module) {
        const lookup = module || base64Config;
        if (module.overrides && module.overrides[id]) {
            return module.overrides[id];
        }
        if (this.dsVersion === 'ds6') {
            return lookup.ds6Color || lookup.color;
        } else {
            return lookup.ds4Color || lookup.color;
        }
    }

    generateBase64(svg, module) {
        const color = this.getColor(svg.id, module);
        const win = this.dom.window;
        let variableName = `@${svg.id}`;
        let modifiedPath;
        if (module.prefix) {
            variableName += `-${module.prefix}`;
        }
        variableName += `-base64`;
        if (module.suffix) {
            variableName += `-${module.suffix}`;
        }
        svg.querySelectorAll('path').forEach((path) => {
            if (!path.hasAttribute('fill') && !!color) {
                modifiedPath = path;
                path.setAttribute('fill', color);
            }
        })
        const base64 = win.btoa((new win.XMLSerializer()).serializeToString(svg).replace('<symbol', '<svg').replace('/symbol>', '/svg>').replace(/(  )+/g, ''));
        if (modifiedPath) {
            modifiedPath.removeAttribute('fill');
        }
        this.output.push(`${variableName}: "${base64}";`);
    }
}

module.exports = {
    SVGGenerator,
    optimizeSVG,
    postBuild,
    writeSymbols,
    runner,
    rawSvgToHtml
};
