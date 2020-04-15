const inputParser = require('./input/parse-input');
const titleCase = require('./util/title-case');
const StyleGenerator = require('./code-generators/style-generator');
const DocumentationGenerator = require('./code-generators/doc-generator');
const TestGenerator = require('./code-generators/test-generator');

class DevelopModule {
    constructor() {
        this.moduleName = titleCase(inputParser.parse().value);
        this.moduleId = this.moduleName.replace(/\s/g, '-').toLowerCase();
    }

    run() {
        new StyleGenerator(this.moduleName, this.moduleId).generate();
        new DocumentationGenerator(this.moduleName, this.moduleId).generate();
        new TestGenerator(this.moduleName, this.moduleId).generate();
    }
}

module.exports = () => new DevelopModule().run();
