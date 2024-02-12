const fs = require("fs");
const path = require("path");
const log = require("../../log");
const writeLine = require("../util/line-writer");
const BaseGenerator = require("./base-generator");

const getModuleDocContent = (
    moduleName,
    moduleId,
) => `<!-- Auto generated code -->
<div id="${moduleId}">
    {% include section-header.html name="${moduleId}" version=page.ds_map.${moduleId}.ds-version %}

    <p>This is generated documentation for ${moduleName}. Update it!</p>

    <h3>Your new module (${moduleName}) variant!</h3>
    <p>Talk about this variant of ${moduleName} here</p>
    <div class="demo">
        <div class="demo__inner">
            <!-- Your new module variant HTML goes here for docs -->
            <div class="${moduleId}">CHANGE THIS</div>
        </div>
    </div>

    {% highlight html %}
    <!-- Your new module variant HTML goes here for code view -->
<div class="${moduleId}">CHANGE THIS</div>
    {% endhighlight %}
</div>
`;

const getMainContent = (moduleId) => `
{% include ${moduleId}.html %}
<img class="skin-graphic" src="{{ page.static_dir }}/skin-graphic.png" alt="" />
`;

/**
 * Code generation for docs
 */
class DocumentationGenerator extends BaseGenerator {
    /**
     * Generate docs
     * @param {string} moduleName is the new module name that has to be code generated.
     * @param {string} moduleId is the new module id derived from module name.
     */
    constructor(moduleName, moduleId) {
        super(moduleName, moduleId);
        this.docsFolder = path.join(__dirname, "..", "..", "..", "docs");
        this.docsCommonFolder = path.join(this.docsFolder, "_includes");
    }

    generate() {
        this._addDocsModuleDoc();
        this._addDocsModuleList();
        this._addDocsMain();
        this._addDocsIndex();

        log.info(
            "Docs added! Make changes in %s file.",
            path.join(this.moduleDocFilePath),
        );
    }

    _addDocsModuleDoc() {
        const moduleDocFilePath = path.join(
            this.docsCommonFolder,
            `${this.moduleId}.html`,
        );
        if (fs.existsSync(moduleDocFilePath)) {
            log.warn("[DOC][%s] Module doc already exists!", moduleDocFilePath);
            return;
        }
        fs.writeFileSync(
            moduleDocFilePath,
            getModuleDocContent(this.moduleName, this.moduleId),
        );

        this.moduleDocFilePath = moduleDocFilePath;
    }

    _addDocsModuleList() {
        const filePathFromRoot = path.join(
            "docs",
            "_includes",
            "module-list.html",
        );
        const newLineContent = `<li><a href="#${this.moduleId}">${this.moduleName}</a></li>`;
        writeLine({
            filePathFromRoot,
            newLineContent,
            getLineMeta: (prevLine, currentLine, nextLine) => ({
                shouldAppend: !nextLine || currentLine > newLineContent,
            }),
        });
    }

    _addDocsMain() {
        const filePathFromRoot = path.join("docs", "_includes", "main.html");
        const newLineContent = getMainContent(this.moduleId).trim();
        writeLine({
            filePathFromRoot,
            newLineContent,
            duplicateCheckText: `${this.moduleId}.html`,
            getLineMeta: (prevLine, currentLine, nextLine) => ({
                shouldAppend: !nextLine || currentLine > newLineContent,
            }),
        });
    }

    _addDocsIndex() {
        const filePathFromRoot = path.join("docs", "index.html");
        const newIndentedLine = `\n        `;
        const group = `${newIndentedLine}ds-group: CHANGE-OR-REMOVE-THIS-LINE`;
        const name = `${newIndentedLine}ds-name: CHANGE-THIS-TO-DESIGN-SYSTEM-COMPONENT-NAME`;
        const version = `${newIndentedLine}ds-version: CHANGE-THIS-TO-DESIGN-SYSTEM-COMPONENT-VERSION`;
        const status = `${newIndentedLine}status: CHANGE-OR-REMOVE-THIS-LINE`;
        const newLineContent = `    ${this.moduleId}:${group}${name}${status}${version}`;
        writeLine({
            filePathFromRoot,
            sectionPredicate: (line) => line.match(/ds_map\s*:/),
            newLineContent,
            duplicateCheckText: `\s*\t*${this.moduleId}:\s*\t*.+`,
            getLineMeta: (_prevLine, currentLine, nextLine) => ({
                shouldAppend: !nextLine || currentLine > newLineContent,
            }),
        });
    }
}

module.exports = DocumentationGenerator;
