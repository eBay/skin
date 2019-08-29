# Ebay Skin Scripts

1. [cdn-version.js](#cdn-version.js)
2. [generate-bundle.js](#generate-bundle.js)
2. [generate-images.js](#generate-images.js)

## cdn-bundle.js

This script automatically updates the CDN version inside of the HTML based on the version specified in `package.json`.

## generate-bundle.js
This script allows users to create their own custom Skin bundle.
In order to view all the avaialbe options and subcommands you can run `scripts/generate-bundle.js --help`. Also eash subcommand has it's own help.

### Examples
Command | Description
--- | ---
`scripts/generate-bundle.js list` | Lists the available modules for use with the `--modules` option
`scripts/generate-bundle.js bundle ebay --modules global carousel` | Creates a bundle called ebay which consists of the global and carousel modules
`scripts/generate-bundle.js bundle ebay --scope-class ebay-wrap` | Creates a bundle called ebay which has all styles wrapped by `.ebay-wrap`


## generate-images.js

This script cleans all SVG images and generates base64 variables for the images
For all base64 images, it scans inside the `src/svg` directory and takes each symbol and converts it to base64.

### Configuration
Configuration for this script is located at `scripts/image-config.json`

There are two main keys in the config.
Config| Description
---|---
 `svgoConfig`|The config used for optimizing svg's. All avaiable options are located at [svgo](https://github.com/svg/svgo)
`base64Config`|This config is used to parse all SVGs into base64 and provide variable names as well as colors. **Note**: Any `fill=` attributes already located within `<path>` in the `icons.svg` file will not be overriden by any colors in the config

### base64Config
```
{
    "ds6Color": "#123456", // The base color to apply to ds6 icons
    "ds4Color": "#123456", // The base color to apply to ds4 icons
    "color": "#123456", // The base color to apply to all icons (note ds4Color or ds6Color take prescedence)

    "overrides": {
        "icon-checkbox-checked": "#123456"
        // A map of all color overrides for each icon. The key is the icon id and the value is the color
    },

    "modules": [
        // A list of different variable to generate based on the colors provided and the icon list
        {
            "suffix": "a", // The text to apply to the end of the variable after -base64
            "prefix": "b" // The text to apply before the -base64 part of the variable
            "color": "#ffffff", // The color to apply for this
            "list": [
                // The list of all icons to apply this change to
                "icon-arrow-left",
                "icon-arrow-right"
            ]
        }
        // The above would generate the following base64 variables
        // @icon-arrow-left-a-base64-b: "base64 with arrow-left icon in white color
        // @icon-arrow-right-a-base64-b: "base64 with arrow-right icon in white color
    ]
}
```
