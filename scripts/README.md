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

Configuration for this script is located at `scripts/image-config.json`

| Config    | Description                                                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `aliases` | The module name for each icon folder. This will generate icons under that module name and also remap the icon prefix for the less file. |
| `skip`    | List of icons to skip and not generate a less file for                                                                                  |
