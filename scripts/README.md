# Ebay Skin Scripts

-   [Ebay Skin Scripts](#ebay-skin-scripts)
    -   [cdn-bundle.js](#cdn-bundlejs)
    -   [generate-bundle.js](#generate-bundlejs)
        -   [Examples](#examples)
    -   [generate-images.js](#generate-imagesjs)
        -   [Configuration](#configuration)

## cdn-bundle.js

This script automatically updates the CDN version inside of the HTML based on the version specified in `package.json`.

## generate-bundle.js

This script allows users to create their own custom Skin bundle.
In order to view all the avaialbe options and subcommands you can run `scripts/generate-bundle.js --help`. Also eash subcommand has it's own help.

### Examples

| Command                                                            | Description                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `scripts/generate-bundle.js list`                                  | Lists the available modules for use with the `--modules` option                |
| `scripts/generate-bundle.js bundle ebay --modules global carousel` | Creates a bundle called ebay which consists of the global and carousel modules |
| `scripts/generate-bundle.js bundle ebay --scope-class ebay-wrap`   | Creates a bundle called ebay which has all styles wrapped by `.ebay-wrap`      |

## generate-images.js

Generates less files with width/height styles for all icons located in `src/svg` directory. See the `configuration` section for more info on how to configure.

### Configuration

Configuration for this script is located at `docs/_data/icons.yaml`
This contains a list of icon modules to generate. Each key will look up an icon file, if that exists then it will generate css for those.

| Global Config | Description |
| `skip` | The id of icons to not generate config for |

| Icon specific config | Description                                                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `prefix`             | The prefixed name, this will be used as the beginning part of the icon name as well as the default output directory if `output` is not defined |
| `output`             | The file directory to output the generated css file to                                                                                         |
