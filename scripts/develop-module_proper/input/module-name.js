const IllegalInputError = require('../errors/illegal-input');

const VALUE = Symbol('value');

/**
 * This is a value object for module name.
 */
class ModuleName {
    /**
     * Construct an immutable user input object.
     * @param {string} moduleName the module name requested by the user.
     */
    constructor(moduleName) {
        this[VALUE] = moduleName;

        _validate(this[VALUE]);
    }

    /**
     * Returns the module name provided by the user.
     * @returns {string} the module name requested by the user.
     */
    get value() {
        return this[VALUE];
    }

    /**
     * Do not invoke this as the user inputs are immutable!
     */
    set value(newMoudleName) {
        throw new Error('Module name provided by user is immutable!');
    }
}

function _validate(moduleName) {
    if (!moduleName) {
        throw new IllegalInputError('Module name has to be provided!');
    }

    if (typeof moduleName !== 'string') {
        throw new IllegalInputError('Module name has to be string!');
    }

    if (moduleName.trim().length < 2) {
        throw new IllegalInputError('Module name has to be atleast 2 character long!');
    }
}

module.exports = ModuleName;
