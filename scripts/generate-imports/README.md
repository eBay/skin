# Generate Imports INFO

## Commands

`scripts/generate-imports` has two commands, `gen` which generates all files for prepublish, and `clean` which cleans post publish

## Top level index files

This will also create and combine top level index and root files.

## config.json

This config holds all the variable configurations for generating/cleaning files.
By default, the script scans all files in the `dist` folder and for each folder creates a `[module].browser.json`, `[module].css`, `[module].js` file, plus all the various `[ds-x]` files for each. These should import `.css` files in `dist` folder.

| config key   | type   | description                                                                                                                                                                                                    |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modules      | object | The list of additional modules to generate. The value for each of these are arrays with a list of modules to import. These are used to create custom groups usually or to offer backwards support for renames. |
| skip         | array  | A list of modules in `dist` folder to skip and not create files for                                                                                                                                            |
| skipIndex    | array  | A list of modules that should not go into `index.css` and `index.js` by default                                                                                                                                |
| dsVersions   | array  | A list of supported DS versions. These should correspond with `dist/[module]/{dsVersion}`. Will create files based on this as well.                                                                            |
| defaultDS    | string | The default DS, will create the base files without `[ds-v]` for this value. Should match one of the values in dsVersions                                                                                       |
| dsSkip       | object | Each object key will be a value corresponding with dsVersions, each value will be an array. These are modules which should be skipped for that given DS Version.                                               |
| dsPathSkip   | array  | A list of modules which do not have a ds in their `dist` path. (IE `dist/[module]/[module].css` instead of `dist/[module]/ds6/[module].css`)                                                                   |
| overrideFile | object | Each key will be a module, with each value will be a custom filename. By default the lookup will be `[module].css` files in dist. This will override in case another filetype should be looked up.             |
| addModules   | object | Each key will be a module name, while each value will be an array. These will be additional requires that each module will need                                                                                |

## Example configs

### Modules

Config:

```
{
   "modules": {
       "core": [
           "root",
           "global",
           "utility"
       ]
   }
}
```

Output:
`core.js`

```
require('./root');
require('./global');
require('./utility');
```

`core.css`

```
@import './root';
@import './global';
@import './utility';
```

`core.browser.json`

```
{
    "dependencies": [
        "require: ./root",
        "require: ./global",
        "require: ./utility"
    ]
}
```

### addModules

Config:

```
{
   "addModules": {
        "infotip": [
            "icon-button"
        ]
   }
}
```

Output:
`infotip.js`

```
require('./icon-button');
require('./dist/infotip/ds6/infotip.css');
```

`infotip.css`

```
@import './icon-button';
@import './dist/infotip/ds6/infotip.css';
```

`infotip.browser.json`

```
{
    "dependencies": [
        "require: ./icon-button",
        "require: ./infotip"
    ]
}
```

### dsVersions

```
{
    "dsVersions": [
        "6",
        "4"
    ],
    "defaultDS": "6"
}
```

Output:
`radio.css`

```
@import './dist/radio/ds6/radio.css';
```

`cat radio[ds-4].css`

```
@import './dist/radio/ds4/radio.css';
```

`radio.js`

```
require('./dist/radio/ds6/radio.css');
```

`radio[ds-4].css`

```
@import './dist/radio/ds4/radio.css';
```

`radio.browser.json`

```
{
    "dependencies": [
        "require: ./radio"
    ]
}
```
