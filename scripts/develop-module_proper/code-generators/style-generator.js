const fs = require('fs');
const path = require('path');
const log = require('../../log');
const BaseGenerator = require('./base-generator');
const writeLine = require('../util/line-writer');

const getBaseStyleContent = moduleId => `// This is boilerplate generated style. Please update this!
.${moduleId} {
    display: block;
}
`;
const getReferBaseStyleContent = moduleId => `@import '../base/${moduleId}.less';\n`;
const getModuleBrowserContent = moduleId => `{
    "dependencies": [
        "require: ./${moduleId}"
    ]
}
`;

/**
 * Code generation for stylesheets
 */
class StyleGenerator extends BaseGenerator {
    /**
     * Generate styles
     * @param {string} moduleName is the new module name that has to be code generated.
     * @param {string} moduleId is the new module id derived from module name.
     */
    constructor(moduleName, moduleId) {
        super(moduleName, moduleId);
        this.sourceStyleLocation = path.join(__dirname, '..', '..', '..', 'src', 'less');
    }

    generate() {
        this._addSourceStyles();
        this._addSourceBundleStyles();
        this._addPackagingStyles();

        log.info('Styles added! Make changes in %s folder.', path.join(this.sourceModuleLocation));
    }

    _addSourceStyles() {
        const sourceModuleLocation = path.join(this.sourceStyleLocation, this.moduleId);

        if (!fs.existsSync(sourceModuleLocation)) {
            fs.mkdirSync(sourceModuleLocation);
        }

        const baseStyleContent = getBaseStyleContent(this.moduleId);
        const dsContent = getReferBaseStyleContent(this.moduleId);

        this._addSourceStylesProper(path.join(sourceModuleLocation, 'base'), baseStyleContent);
        this._addSourceStylesProper(path.join(sourceModuleLocation, 'ds4'), dsContent);
        this._addSourceStylesProper(path.join(sourceModuleLocation, 'ds6'), dsContent);

        this.sourceModuleLocation = sourceModuleLocation;
    }

    _addSourceStylesProper(folder, content) {
        const file = path.join(folder, `${this.moduleId}.less`);
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }
        if (fs.existsSync(file)) {
            log.warn(`[STYLES][${file}] Styles file already exists!`);
            return;
        }
        fs.writeFileSync(file, content);
    }

    _addSourceBundleStyles() {
        this._addSourceBundleStylesProper('ds4');
        this._addSourceBundleStylesProper('ds6');
    }

    _addSourceBundleStylesProper(version) {
        const filePathFromRoot = path.join('src', 'less', 'bundles', 'skin', version, 'skin.less');
        const newLineContent = `@import "../../../${this.moduleId}/${version}/${this.moduleId}.less";`;
        writeLine({
            filePathFromRoot,
            newLineContent,
            getLineMeta: (prevLine, currentLine, nextLine) => ({
                shouldAppend: !nextLine || currentLine > newLineContent
            })
        });
    }

    _addPackagingStyles() {
        this._addPackagingIndexDependencies();
        this._addPackagingBrowserDependencies();
        this._addPackagingModuleBrowserDependencies();
        this._addPackagingStylesDsReference('ds4');
        this._addPackagingStylesDsReference('ds6');
        this._addPackagingStylesIndexReference();
    }

    _addPackagingIndexDependencies() {
        this._addDependencies(`        "require: ./${this.moduleId}"`, 'index.browser.json');
    }

    _addPackagingBrowserDependencies() {
        this._addDependencies(`    "./${this.moduleId}"`, 'browser.json');

        const from = `./dist/${this.moduleId}/ds6/${this.moduleId}.css`;
        const newMappingItem = {
            from,
            to: `./dist/${this.moduleId}/ds4/${this.moduleId}.css`,
            'if-flag': 'ds-4'
        };
        const browserJsonFile = path.join(__dirname, '..', '..', '..', 'browser.json');
        const newMappings = [];
        const browserJson = require(browserJsonFile);
        let newItemAdded = false;
        browserJson.requireRemap.forEach(item => {
            if (!newItemAdded && item.from > from) {
                newItemAdded = true;
                newMappings.push(newMappingItem);
            }
            newMappings.push(item);
        });

        if (!newItemAdded) {
            newItemAdded = true;
            newMappings.push(newMappingItem);
        }

        browserJson.requireRemap = newMappings;

        fs.writeFileSync(browserJsonFile, JSON.stringify(browserJson, null, 2));
    }

    _addPackagingModuleBrowserDependencies() {
        const projectRootPath = path.join(__dirname, '..', '..', '..');
        const moduleBrowserPath = path.join(projectRootPath, `${this.moduleId}.browser.json`);

        if (fs.existsSync(moduleBrowserPath)) {
            log.warn('[STYLES][%s] Module browser content already exists!', moduleBrowserPath);
            return;
        }

        fs.writeFileSync(moduleBrowserPath, getModuleBrowserContent(this.moduleId));
    }

    _addDependencies(newLineContent, filePathFromRoot) {
        writeLine({
            filePathFromRoot,
            sectionPredicate: line => line.match(/"dependencies"\s*\t*:\s*\t*\[/),
            newLineContent,
            getLineMeta: (prevLine, currentLine, nextLine) => ({
                shouldAppend: nextLine && nextLine.match(/]/)
                    || (!StyleGenerator._isLegacyLine(currentLine) && currentLine > newLineContent),
                prevLineSuffix: prevLine && !prevLine.endsWith(',') ? ',' : '',
                newLineSuffix: !nextLine || nextLine.match(/]/) ? '' : ','
            })
        });
    }

    _addPackagingStylesDsReference(version) {
        const filePathFromRoot = `${this.moduleId}${version === 'ds4' ? '[ds-4]' : ''}.js`;
        if (fs.existsSync(filePathFromRoot)) {
            log.warn('[STYLES][%s] Style already exists!', filePathFromRoot);
            return;
        }
        fs.writeFileSync(filePathFromRoot, `require('./dist/${this.moduleId}/${version}/${this.moduleId}.css');\n`);
    }

    _addPackagingStylesIndexReference() {
        const filePathFromRoot = 'index.js';
        const newLineContent = `require('./${this.moduleId}');`;
        writeLine({
            filePathFromRoot,
            newLineContent,
            getLineMeta: (prevLine, currentLine, nextLine) => ({
                shouldAppend: !nextLine
                    || (!StyleGenerator._isLegacyLine(currentLine) && currentLine > newLineContent)
            })
        });
    }

    static _isLegacyLine(currentLine) {
        return currentLine.match(/global/) || currentLine.match(/utility/) || currentLine.match(/root/);
    }
}

module.exports = StyleGenerator;
