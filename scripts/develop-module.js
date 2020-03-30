const fs = require('fs');
const path = require('path');
const arg = require('arg');
const log = require('./log');

const DS_VERSION = 'DS6.5.v1.01';

class DevelopModuleError extends Error {
    constructor(message) {
        super(message);
    }
}

const args = arg({
    '--module-name': String,
    '--help': Boolean
});
const moduleName = args['--module-name'];
const shouldHelp = args['--help'];

function run() {
    try {
        validateArguments();
        processRequest();
    } catch (error) {
        if (!(error instanceof DevelopModuleError)) {
            throw error;
        }

        log.error(error.message);
    }
}

function validateArguments() {
    if (shouldHelp || moduleName) {
        return;
    }

    throw new DevelopModuleError('Incorrect usage! Pass --help flag for help.');
}

function processRequest() {
    if (shouldHelp) {
        processHelpRequest();
    } else if (moduleName) {
        processNewModuleRequest();
    } else {
        throw new DevelopModuleError('Script Error! Unknown flag that passed validation to process request.');
    }
}

function processHelpRequest() {
    log.info(`
USAGE:
    --module-name
                                The new module that you want to generate the boilerplate code for.
                                Eg: node scripts/develop-module.js --module-name=toast-message
    --help
                                Used to generate this help message
                                Eg: node scripts/develop-module.js --help
    `);
}

function processNewModuleRequest() {
    const newModuleData = {
        id: moduleName.replace(/\s/g, '-').toLowerCase(),
        moduleName
    };

    addStyles(newModuleData);
    addDocs(newModuleData);
    addTests(newModuleData);

    log.info('Generated boilerplate code for the new module %s', moduleName);
    log.info('Add documentation in file ~ %s', newModuleData.moduleDocFilePath);
    log.info('Add styles in folder ~ %s', newModuleData.srcFolderPath);
    log.info('Add tests in file ~ %s', newModuleData.testFilePath);
}

function addStyles(newModuleData) {
    addSourceStyles(newModuleData);
    addSourceBundleStyles(newModuleData);
    addPackagingStyles(newModuleData);
}

function addDocs(newModuleData) {
    addDocsModuleDoc(newModuleData);
    addDocsModuleList(newModuleData);
    addDocsMain(newModuleData);
    addDocsIndex(newModuleData);
}

function addSourceStyles(newModuleData) {
    const srcFolderPath = path.join(__dirname, '..', 'src', 'less', newModuleData.id);
    const baseFolderPath = path.join(__dirname, '..', 'src', 'less', newModuleData.id, 'base');
    const ds4FolderPath = path.join(__dirname, '..', 'src', 'less', newModuleData.id, 'ds4');
    const ds6FolderPath = path.join(__dirname, '..', 'src', 'less', newModuleData.id, 'ds6');
    newModuleData.srcFolderPath = srcFolderPath;

    if (fs.existsSync(srcFolderPath)) {
        log.warn('[STYLES][directory] Styles directory already exists!');
        return;
    }

    fs.mkdirSync(srcFolderPath);
    fs.mkdirSync(baseFolderPath);
    fs.mkdirSync(ds4FolderPath);
    fs.mkdirSync(ds6FolderPath);

    const baseStylesContent = `.${newModuleData.id} {
    display: block; // This is boilerplate generated style. Please update this!
}
`;

    const ds4StylesContent = `@import '../base/${newModuleData.id}.less';\n`;
    const ds6StylesContent = ds4StylesContent;

    fs.writeFileSync(path.join(baseFolderPath, `${newModuleData.id}.less`), baseStylesContent);
    fs.writeFileSync(path.join(ds4FolderPath, `${newModuleData.id}.less`), ds4StylesContent);
    fs.writeFileSync(path.join(ds6FolderPath, `${newModuleData.id}.less`), ds6StylesContent);
}

function addSourceBundleStyles(newModuleData) {
    const ds4FileBundlePath = path.join(__dirname, '..', 'src', 'less', 'bundles', 'skin', 'ds4', 'skin.less');
    const ds6FileBundlePath = path.join(__dirname, '..', 'src', 'less', 'bundles', 'skin', 'ds6', 'skin.less');

    if (fs.readFileSync(ds4FileBundlePath, 'utf8').match(`${newModuleData.id}.less`)) {
        log.warn('[STYLES][skin.less] Skin styles already exists!');
        return;
    }

    fs.appendFileSync(ds4FileBundlePath, `@import "../../../${newModuleData.id}/ds4/${newModuleData.id}.less";\n`);
    fs.appendFileSync(ds6FileBundlePath, `@import "../../../${newModuleData.id}/ds6/${newModuleData.id}.less";\n`);
}

function addPackagingStyles(newModuleData) {
    addPackagingStyleDependencies(newModuleData);
    addPackagingStylesDs4Reference(newModuleData);
    addPackagingStylesDs6Reference(newModuleData);
    addPackagingStylesIndexReference(newModuleData);
}

function addPackagingStyleDependencies(newModuleData) {
    const dependenciesFile = 'index.browser.json';
    const dependenciesContent = fs.readFileSync(dependenciesFile, 'utf8');
    if (dependenciesContent.match(newModuleData.id)) {
        log.warn('[STYLES][%s] Dependencies already exists!', dependenciesFile);
        return;
    }

    const dependenciesLines = dependenciesContent.split('\n');
    const finalContent = [];
    let isDeps = false;
    for (const line of dependenciesLines) {
        if (line.match(/"dependencies"\s*\t*:\s*\t*\[/)) {
            isDeps = true;
        } else if (isDeps && line.match(']')) {
            isDeps = false;
            finalContent.push(`${finalContent.pop()},`);
            finalContent.push(`        "./${newModuleData.id}"`);
        }

        finalContent.push(line);
    }

    fs.writeFileSync(dependenciesFile, finalContent.join('\n'));
}

function addPackagingStylesDs4Reference(newModuleData) {
    const ds4File = `${newModuleData.id}[ds-4].less`;
    if (fs.existsSync(ds4File)) {
        log.warn('[STYLES][%s] DS4 root styles already exists!', ds4File);
        return;
    }

    fs.writeFileSync(ds4File, `@import "./dist/${newModuleData.id}/ds4/${newModuleData.id}.css";\n`);
}

function addPackagingStylesDs6Reference(newModuleData) {
    const ds6File = `${newModuleData.id}.less`;
    if (fs.existsSync(ds6File)) {
        log.warn('[STYLES][%s] DS6 root styles already exists!', ds6File);
        return;
    }

    fs.writeFileSync(ds6File, `@import "./dist/${newModuleData.id}/ds6/${newModuleData.id}.css";\n`);
}

function addPackagingStylesIndexReference(newModuleData) {
    const indexFile = `index.less`;
    if (fs.readFileSync(indexFile, 'utf8').match(`@import "./${newModuleData.id}";\n`)) {
        log.warn('[STYLES][%s] Index root styles already exists!', indexFile);
        return;
    }

    fs.appendFileSync(indexFile, `@import "./${newModuleData.id}";\n`);
}

function addDocsModuleDoc(newModuleData) {
    const moduleDocFilePath = path.join(__dirname, '..', 'docs', '_includes', 'common', `${newModuleData.id}.html`);
    newModuleData.moduleDocFilePath = moduleDocFilePath;
    if (fs.existsSync(moduleDocFilePath)) {
        log.warn('[DOC][%s.html] Module doc already exists!', newModuleData.id);
        return;
    }
    const moduleDocContent = `<div id="${newModuleData.id}">
    {% include common/section-header.html name="${newModuleData.id}" version=page.versions.${newModuleData.id} %}

    <p>This is generated documentation for ${newModuleData.moduleName}. Update it!</p>

    <h3>Your new module (${newModuleData.moduleName}) variant!</h3>
    <p>Talk about this variant of ${newModuleData.moduleName} here</p>
    <div class="demo">
        <div class="demo__inner">
            <!-- Your new module variant HTML goes here for docs -->
            <div class="${newModuleData.id}">CHANGE THIS</div>
        </div>
    </div>

    {% highlight html %}
<!-- Your new module variant HTML goes here for code view -->
<div class="${newModuleData.id}">CHANGE THIS</div>
    {% endhighlight %}
</div>
`;

    fs.writeFileSync(moduleDocFilePath, moduleDocContent);
}

function addDocsModuleList(newModuleData) {
    const moduleListFilePath = path.join(__dirname, '..', 'docs', '_includes', 'common', 'module-list.html');
    if (fs.readFileSync(moduleListFilePath, 'utf8').match(`href="#${newModuleData.id}"`)) {
        log.warn('[DOC][module-list.html] Module list already exists!');
        return;
    }

    const { moduleName: newModuleName } = newModuleData;
    const listItemName = newModuleName.charAt(0).toUpperCase() + newModuleName.slice(1);

    const moduleListContent = `<li><a href="#${newModuleData.id}">${listItemName}</a></li>\n`;
    fs.appendFileSync(moduleListFilePath, moduleListContent);
}

function addDocsIndex(newModuleData) {
    const indexFilePath = path.join(__dirname, '..', 'docs', 'index.html');
    const currentIndexFileContent = fs.readFileSync(indexFilePath, 'utf8');
    const newIndexFileContent = [];
    let isVersions = false;
    const indexFileLines = currentIndexFileContent.split('\n');
    for (const line of indexFileLines) {
        if (line.match('versions\s*:')) {
            isVersions = true;
        } else if (isVersions && line.match(`\s*\t*${newModuleData.id}:\s*\t*.+`)) {
            log.warn('[DOC][index.html] Index doc already exists!');
            return;
        } else if (isVersions && line.match('---')) {
            isVersions = false;
            newIndexFileContent.push(`    ${newModuleData.id}: ${DS_VERSION}`);
        }

        newIndexFileContent.push(line);
    }

    fs.writeFileSync(indexFilePath, newIndexFileContent.join('\n'));
}

function addDocsMain(newModuleData) {
    const mainFilePath = path.join(__dirname, '..', 'docs', '_includes', 'common', 'main.html');
    if (fs.readFileSync(mainFilePath, 'utf8').match(`include common/${newModuleData.id}.html`)) {
        log.warn('[DOC][main.html] Main doc content already exists!');
        return;
    }

    const mainContent = `{% include common/${newModuleData.id}.html %}
<img class="skin-graphic" src="{{ page.static_dir }}/skin-graphic.png" alt="" />
`;

    fs.appendFileSync(mainFilePath, mainContent);
}

function addTests(newModuleData) {
    const testFilePath = path.join(__dirname, '..', 'src', 'less', newModuleData.id, `${newModuleData.id}.stories.js`);
    newModuleData.testFilePath = testFilePath;

    if (fs.existsSync(testFilePath)) {
        log.warn('[TESTS][`${newModuleData.id}.stories.js`] Test file already exists!');
        return;
    }

    const testContent = `export default { title: 'details' };

export const generatedVariant = () => \`
<div class="${newModuleData.id}">Update This Code</div>
\`;
`;
    fs.writeFileSync(testFilePath, testContent);
}

run();
