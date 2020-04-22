const yargs = require('yargs');
const ModuleName = require('./module-name');

const argv = yargs.usage('scripts/develop-module <option> [option value]')
    .option('m', {
        alias: 'moduleName',
        demandOption: true,
        description: 'The new module name that you want to develop',
        type: 'string'
    })
    .argv;

module.exports = {
    /**
     * Used to parse the command line input parameters.
     * @returns {ModuleName} the user input.
     */
    parse: () => new ModuleName(argv.moduleName)
};
