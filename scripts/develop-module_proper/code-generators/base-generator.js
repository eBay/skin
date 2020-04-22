/**
 * Code generation base class
 */
class BaseGenerator {
    /**
     * Base generator
     * @param {string} moduleName is the new module name that has to be code generated.
     * @param {string} moduleId is the new module id derived from module name.
     */
    constructor(moduleName, moduleId) {
        this.moduleName = moduleName;
        this.moduleId = moduleId;
    }
}

module.exports = BaseGenerator;
