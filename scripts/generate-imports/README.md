# Generate Imports INFO

## Commands

`scripts` has two commands, `gen` which generates all files for prepublish, and `clean` which cleans post publish

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
require('./dist/infotip/infotip.css');
```

`infotip.css`

```
@import './icon-button';
@import './dist/infotip/infotip.css';
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

Output:
`radio.css`

```
@import './dist/radio/radio.css';
```

`radio.js`

`radio.browser.json`

```
{
    "dependencies": [
        "require: ./radio"
    ]
}
```
