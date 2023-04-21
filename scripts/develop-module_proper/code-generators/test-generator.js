const fs = require("fs");
const path = require("path");
const log = require("../../log");
const BaseGenerator = require("./base-generator");

const getStorybookTestContent = (moduleName, moduleId) => `// Generated test
export default { title: '${moduleName}' };

export const generatedVariant = () => \`
    <div class="${moduleId}">Update This Code</div>
\`;
`;

/**
 * Code generation for tests
 */
class TestGenerator extends BaseGenerator {
    /**
     * Generate tests
     * @param {string} moduleName is the new module name that has to be code generated.
     * @param {string} moduleId is the new module id derived from module name.
     */
    constructor(moduleName, moduleId) {
        super(moduleName, moduleId);
    }

    generate() {
        this._addStoryBookTests();

        log.info(
            "Tests added! Make changes in %s file.",
            path.join(this.storybookTestFilePath)
        );
    }

    _addStoryBookTests() {
        const testFilePath = path.join(
            __dirname,
            "..",
            "..",
            "..",
            "src",
            "less",
            this.moduleId,
            `${this.moduleId}.stories.js`
        );
        if (fs.existsSync(testFilePath)) {
            log.warn("[TESTS][%s] Test file already exists!", testFilePath);
            return;
        }
        fs.writeFileSync(
            testFilePath,
            getStorybookTestContent(this.moduleName, this.moduleId)
        );
        this.storybookTestFilePath = testFilePath;
    }
}

module.exports = TestGenerator;
