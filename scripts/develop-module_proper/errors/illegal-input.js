const BaseError = require('./base-error');

class IllegalInputError extends BaseError {
    constructor(message) {
        super(`Illegal user input!: ${message}`);
    }
}

module.exports = IllegalInputError;
