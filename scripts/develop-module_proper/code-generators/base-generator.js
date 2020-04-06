const path = require('path');

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

    /**
     * Returns full path for base directory with relative paths.
     * @param {array} baseDir base directory paths as an array of strings.
     * @param  {...string} relativePaths set of relative paths.
     */
    getPath(baseDir, ...relativePaths) {
        let relativePathsProper = relativePaths;
        if (!Array.isArray(relativePathsProper)) {
            relativePathsProper = [];
        }

        return path.join(...baseDir.concat(relativePathsProper));
    }
}

module.exports = BaseGenerator;
