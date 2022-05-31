const fs = require('fs');
const prettier = require('prettier');
const path = require('path');
const currentDir = path.dirname(path.dirname(__dirname));

function getBrowserFileName(filename, basePath) {
    return path.join(currentDir, basePath || '', `${filename}.browser.json`);
}

function getMJSFileName(filename, basePath) {
    return path.join(currentDir, basePath || '', `${filename}.mjs`);
}

function getFileName(filename, ext, basePath) {
    return path.join(currentDir, basePath || '', `${filename}.${ext}`);
}

function getBrowserRequireSyntax(filename) {
    return `require: ./${filename}.js`;
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

/* Options:
 *   hasBaseModule: true/false | if the base module should be included in the requires.
 *   isNested: true/fase | if this module has nested additioanl modules
 *   distDir: string | The distDir for modules
 */
class ModuleBuilder {
    constructor(moduleName, config, options) {
        this.moduleName = moduleName;
        this.config = config;
        this.additionalModules = config.modules[moduleName] || [];
        this.options = Object.assign(
            {
                hasBaseModule: true,
                isNested: false,
                distDir: '',
            },
            options
        );
    }

    getFilePath(filename) {
        let file = filename;
        let filePath = filename;
        let prefixPath = '';
        if (this.config.overrideFile[filename]) {
            file = this.config.overrideFile[filename];
        } else if (this.options.isNested) {
            filePath = filename === this.moduleName ? 'index' : this.moduleName;
            prefixPath = '../';
        }
        return `${prefixPath}dist/${filePath}/${file}`;
    }

    async clean() {
        if (this.options.isNested) {
            await fs.promises.rm(this.moduleName, { recursive: true });
        } else {
            await fs.promises.unlink(getBrowserFileName(this.moduleName));
            await fs.promises.unlink(getMJSFileName(this.moduleName));

            await fs.promises.unlink(getFileName(this.moduleName, 'js'));
            await fs.promises.unlink(getFileName(this.moduleName, 'css'));
        }
    }

    async run() {
        if (this.options.isNested) {
            // create directory
            await fs.promises.mkdir(path.join(currentDir, this.moduleName), { recursive: true });
            // Get all modules now in directory
            const moduleList = await fs.promises.readdir(
                path.join(this.options.distDir, this.moduleName)
            );

            await Promise.all(
                moduleList.map(async (file) => {
                    let modName = path.parse(file).name;

                    if (modName === this.moduleName) {
                        modName = 'index';
                    }
                    await this.writeBrowserJSON(modName);
                    await this.writeModuleFiles(modName);
                })
            );
        } else {
            await this.writeBrowserJSON();
            await this.writeModuleFiles();
        }
    }

    async writeBrowserJSON(currentModule) {
        const additionalRequires = this.additionalModules.map((addFile) =>
            getBrowserRequireSyntax(addFile)
        );
        const filename = currentModule || this.moduleName;
        const requires = additionalRequires.concat(
            this.options.hasBaseModule ? [getBrowserRequireSyntax(filename)] : []
        );

        const content = { dependencies: requires };
        return await fs.promises.writeFile(
            getBrowserFileName(filename, this.options.isNested && this.moduleName),
            prettier.format(JSON.stringify(content), { parser: 'json' })
        );
    }

    async writeModuleFiles(currentModule) {
        const modules = this.additionalModules;
        const mod = currentModule || this.moduleName;
        const filename = this.options.hasBaseModule ? this.getFilePath(mod) : null;
        const baseDirectory = this.options.isNested ? this.moduleName : false;

        await fs.promises.writeFile(
            getFileName(mod, 'js', baseDirectory),
            this.parseAdditionalModules(getJSRequireSyntax, 'js', { modules, filename })
        );

        await fs.promises.writeFile(
            getFileName(mod, 'css', baseDirectory),
            this.parseAdditionalModules(getCSSRequireSyntax, 'css', { modules, filename })
        );

        await fs.promises.writeFile(
            getFileName(mod, 'mjs', baseDirectory),
            this.parseAdditionalModules(getMJSRequireSyntax, 'css', { modules, filename })
        );
    }

    parseAdditionalModules(getSyntax, ext, { modules, filename }) {
        const additioanlContent = modules.map((addFile) => getSyntax(addFile, ext));
        const content = additioanlContent.concat(filename ? [getSyntax(filename, 'css')] : []);
        return content.join('');
    }
}

module.exports = { ModuleBuilder };
