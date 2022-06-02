const { listBundles, runCSSBuild } = require('./generate-bundle');
const { runGenerate } = require('./generate-images');
const { runImport } = require('./import-svgs');
const { generateTopLevel, cleanTopLevel } = require('./generate-imports');

require('yargs') // eslint-disable-line
    .usage('Usage: $0 <command> [options]')
    .command(
        'genSVG',
        'generates less files with styles from svg icons',
        () => {},
        () => {
            try {
                runGenerate();
            } catch (e) {
                console.log(e);
            }
        }
    )
    .command(
        'importSVG <svg> <name> <file>',
        'imports given svg into an icon pack or updates if it exists',
        (yargs) => {
            yargs.positional('svg', {
                describe: 'SVG file',
                demand: true,
                default: '',
            });
            yargs.positional('name', {
                describe: 'The ID of the SVG',
                demand: true,
                default: '',
            });
            yargs.positional('file', {
                describe: 'The file in skin to append the SVG to',
                demand: true,
                default: '',
            });
        },
        async (argv) => {
            try {
                await runImport(argv.svg, argv.name, argv.file, argv);
            } catch (e) {
                console.log(e);
            }
        }
    )
    .command(
        'list',
        'List all available modules',
        (yargs) => {},
        async (argv) => {
            await listBundles(argv);
        }
    )
    .command(
        'bundle <name>',
        'generates a CDN bundle with the given name',
        (yargs) => {
            yargs
                .positional('name', {
                    describe: 'name to generate bundle',
                    demand: true,
                    default: 'skin',
                })
                .option('scope-class', {
                    describe: 'Scoped class to prefix bundle with',
                    default: '',
                })
                .option('no-minify', {
                    describe:
                        'Skips minify stage. Should set this when another bundler like lasso will be used.',
                    type: 'boolean',
                })
                .option('scope-specificity', {
                    describe: 'How many times to repeat scope',
                    default: '1',
                })
                .option('modules', {
                    alias: 'm',
                    type: 'array',
                    describe:
                        'Space separated list of modules to include. If empty, will include all',
                    default: [],
                });
        },
        (argv) => {
            runCSSBuild(argv.name, argv);
        }
    )
    .command(
        'gen',
        'Generates all imports',
        () => {},
        async () => {
            await generateTopLevel();
        }
    )
    .command(
        'clean',
        'Cleans all imports',
        () => {},
        async () => {
            await cleanTopLevel();
        }
    )

    .option('verbose', {
        alias: 'v',
        type: 'boolean',
    })
    .demandCommand(1)
    .help().argv;