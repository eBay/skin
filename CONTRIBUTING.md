# Contributing

This page contains instructions and guidelines for anybody contributing code to the eBay Skin project.

## Table of Contents

-   [Contributing](#contributing)
    -   [Table of Contents](#table-of-contents)
    -   [System Requirements](#system-requirements)
    -   [Contribution Steps](#contribution-steps)
    -   [Development Modes](#development-modes)
    -   [Versioning](#versioning)
        -   [API Change](#api-change)
        -   [New Functionality](#new-functionality)
            -   [New Module](#new-module)
        -   [Bug Fix](#bug-fix)
    -   [Branching](#branching)
    -   [Package Dependencies](#package-dependencies)
    -   [Commit Message Format](#commit-message-format)
    -   [Pull Requests](#pull-requests)
    -   [Style Guide](#style-guide)
    -   [Variables](#variables)
        -   [Global Variables](#global-variables)
        -   [Product Variables](#product-variables)
        -   [Component Variables](#component-variables)
    -   [Custom Properties](#custom-properties)
    -   [Dark Mode](#dark-mode)
    -   [Storybook](#storybook)
    -   [Percy](#percy)
    -   [Website](#website)
    -   [Scripts](#scripts)
    -   [Icon Creation](#icon-creation)
    -   [Releases](#releases)
        -   [Pre-Release](#pre-release)
        -   [Final Release](#final-release)
        -   [GitHub Release](#github-release)
        -   [Hotfix Release](#hotfix-release)

## System Requirements

-   [Node.js](https://nodejs.org/en/)
-   [Ruby](https://www.ruby-lang.org/en/)<sup>\*</sup>
-   [Bundler](http://bundler.io)
-   [Jekyll](https://jekyllrb.com) ([install via Bundler](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/#step-2-install-jekyll-using-bundler))

<sup>\*</sup> macOS users may encounter issues with their pre-installed system version of Ruby; in which case we recommend [rbenv](https://github.com/rbenv/rbenv) as a way to manage your Ruby environment.

## Contribution Steps

Before writing any code, please submit a new issue to [GitHub](https://github.com/eBay/skin/issues). Or, if you want to work on an _existing_ issue, please request to do so on the relevant ticket.

We **strongly** advise you to only begin working on issues that are assigned specifically to you and that are part of the upcoming milestone, otherwise your work may end up being in vain.

Here is a rough overview of steps required when contributing code to skin:

-   GitHub team members must create a new branch in the Skin repo. Non-team members should create their own fork.
-   Please ensure you branch off from the correct milestone branch! See branching strategy section below.
-   Skin adopts the [BEM](https://css-tricks.com/bem-101/) methodology (a popular naming convention for classes in HTML and CSS). Please familiarize yourself with our style guide in the section below.
-   After making changes to `.less` files, ensure that no new CSS lint warnings or errors are introduced
-   Add or update the corresponding website documentation. More information in the [documentation](#documentation) section below.
-   Push commit(s) to the upstream branch. Ensure new dist files (i.e. the compiled CSS files) are included!
-   Send pull request. See Pull Requests section below.

## Development Modes

Skin can usually considered to be in one of two modes of development:

1. Feature development mode (default)
1. Refactoring/cleanup mode

The vast majority of this guide is relevant to both modes.

### New Module Creation

Executing the following script will generate all files and references for a new module:

```
./scripts/develop-module -m "Your Module Name"
```

_Example_

```
./scripts/develop-module -m toast-dialog
```

## Versioning

Skin follows [Semantic Versioning](http://semver.org):

1. MAJOR version when we make incompatible API changes,
1. MINOR version when we add functionality in a backwards-compatible manner
1. PATCH version when we make backwards-compatible bug fixes.

To help guide your contribution into the right bucket, we provide more detailed insight into each type of change in the sections below.

### API Change

Here are some types of change that we consider as an incompatible API change:

-   Removal of a CSS class
-   Removal of a public variable or mixin
-   Removal of a `browser.json` file
-   Removal of a folder from `dist`
-   Removal of an SVG icon
-   Change to CDN path structure
-   Change to HTML structure or attributes of module
-   Change to CSS property that radically alters appearance and/or layout

Typically we will try and add a deprecation note for a period of time before introducing any breaking API change. The creation of aliases can often help ease the transition from one API to another.

### New Functionality

Here are some of the changes we consider as new functionality:

-   Addition of a new module
-   Addition of a module subtype or variant
-   Addition of a new variable or mixin
-   Addition of an alias for a class or icon
-   Update of a module to its latest playbook version
-   Update of a colour value that remains within the same hue
-   Update of a CSS property that does not affect the modules layout in page

Minor version updates are a signal that there is something new (no matter how small) that an app might be interested in using!

### Bug Fix

Rather than creating a list, bug fixes can perhaps best be summed up as: "fixing something that does not work as expected or documented".

**NOTE:** Updating a module to its latest visual specification is NOT a candidate for a bug fix. No matter how small or trivial the visual update may be, we always consider it as new functionality.

## Branching

Do not attempt to commit feature work directly to the `master` branch. Pushes to the `master` branch are restricted to admins and should only be used for important corrections to the documentation or website.

All other branches are "milestone" branches or "issue" branches.

Work for every "issue" must go in its own branch. The branch name will reflect the issue number and issue type. For example, for an issue number 202, related to the pagination module, a branch named `202-pagination` would be created.

Issue branches must be created from the relevant milestone branch. For example, if issue 202 will go out in the v2.6.7 milestone, then the 202 issue branch must be created from the 2.6.7 milestone branch.

Every milestone branch must be created from the `master` branch. For example, when beginning work on the 2.9.0 release, the `2.9.0` branch would be created from the `master` branch.

When all milestone issues are complete, and merged into the milestone branch, a Skin admin will merge the milestone branch into the `master` branch in preparation for the release.

A milestone branch will be deleted after it has been merged into `master`. There is no need to keep these milestone branches lying around, as we can go back to any point in time using tags. See the hotfix section below for more details.

## Package Dependencies

Every time we cut a new milestone branch, the package dependencies require updating.

1. Ensure you are on the milestone branch and that the branch is up to date with latest from `master`
1. Run `npm install` to ensure your local node_modules are in sync with your `package-lock.json`
1. Run `npm outdated`
1. Go into `package.json` and update version numbers to the latest based on outdated. Pay attention to any major version updates as they may contain breaking changes!
1. Run `npm install` again. This will update `package-lock.json`.
1. Run `npm run build`, `npm start` and `npm run storybook` and make sure those commands execute correctly
1. Check in `package.json` and `package-lock.json` as `chore: updated dev deps`.

## Commit Message Format

We use [commitlint conventional configuration](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) to lint all commit messages.

When determining the commitlint type, use the following guidance:

build
: package scripts or build scripts

ci
: GitHub Actions

chore
: project file/folder structure

docs
: website docs/examples

feat
: new Skin module

fix
: bug fix on a Skin module

refactor
: refactor of a Skin module

revert
: revert previous commit

style
: website or storybook styles

test
: storybook stories

## Pull Requests

Guidance for pull requests:

-   Always double-check which branch you are attempting to merge into. The target branch should always be a milestone branch!
-   Only Skin admins are permitted to merge into `master`
-   Non-atomic commits should be squashed (i.e. "work in progress" type commits).
-   Do not add any commit that leaves the code in a broken state.
-   Pull request for a _feature_ must only contain changes related to the issue (NOTE: refactoring/cleanup type PRs are often exempt from this rule)
-   **Do not** be tempted to go fixing or refactoring unrelated issues. Doing so can make the code reviewer's job more difficult and/or time consuming, as well as increasing risk of regression
-   If you spot some other unrelated bug or code smell, please create a GitHub issue for it.
-   After the pull request has been merged, your issue branch should be immediately deleted (by yourself or admin)

## Style Guide

When contributing to Skin, please bear the following guidelines in mind:

-   Ensure all markup adheres to our [accessibility patterns](https://ebay.gitbooks.io/mindpatterns/content/)
-   Ensure all markup is valid HTML
-   Leverage ARIA roles, states and properties for styling hooks wherever possible. This safeguards against non-accessible markup (NOTE: this will increase specificity, but we accept this as a worthwile tradeoff)
-   Use BEM syntax for modifiers (double-dash) and nested classes (double-underscore)
-   Use the `<svg>` tag for icons
-   Never use the `<i>` tag for icons
-   Harness CSS margin-collapse wherever possible.
-   Most block-level modules will require margin top and bottom as a sensible default
-   Do not use presentational classnames, e.g. `.btn--green` should be `.btn--secondary` for example
-   Do not combine classes into a single classname, e.g. `btn-sec` should be `btn btn--sec`, this allows cascades without advanced attribute selectors or pre-processors
-   Do not chain BEM modifiers (e.g. `.btn--large.btn--primary`). This is a code smell.
-   Do not use ambiguous or global classnames, e.g. `.large` should be `.btn--large`
-   Do not use class `.disabled` to disable buttons or form elements, use the HTML `disabled` property instead
-   Do not wrap inputs with labels, use explicit labels instead (e.g. use the `for` and `id` attributes)
-   Do not use `href="#"` or `href="javascript"` in examples, use `href="http://www.ebay.com"` or any other dummy url
-   Every `<img>` tag must have an `alt` attribute, with **no** exceptions. The value can be an empty string for presentational images.
-   Avoid naming conflicts with other grid systems (e.g. Bootstap Grids)
-   Keep LESS pre-processor usage restricted to variables, mixins and basic nesting (see below). 9 times out of 10 advanced features of pre-processors can be avoided by using CSS properly.
-   Avoid too much nesting/indenting of LESS selectors as it can reduce human scan-ability of code and can also result in sub-optimal compiled CSS. Try and restrict nesting to pseudo selectors only (e.g. `:focus`, `::after`).
-   Avoid over specificity (unless required for accessibility safeguarding). The fewer rules required to check for a given element, the faster style resolution will be. This is the key to dramatically increasing performance.
    [https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS)
-   Please do not commit commented out code to production.

## Variables

Skin variables are categorised into three levels:

-   global
-   product
-   component

These three levels form the basis of our token based system.

### Global Variables

Global variables are our primitives. They represent the colour palette and type ramp. For example:

-   color-b1
-   font-size-12

Naming of global variables starts with the style related property and ends with the primitive.

### Product Variables

Product variables are aliases of global variables. They represent an aspect of the product that is used across many pages and components. For example, confirmations and actions:

-   color-text-confirmation
-   color-action-primary

Naming of product variables starts with the style related property and ends with the product aspect.

### Component Variables

Component variables are aliases of global variables and product variables. They represent aspects of a specific component only, for example a textbox component:

-   textbox-background-color
-   textbox-border-color

Naming of component variables starts with the component name and ends with the style related property.

Component variables also need to take into account certain states, such as hover, focus and disabled. For example:

-   textbox-disabled-background-color
-   textbox-disabled-border-color

The naming convention is: component name - state - style property.

## Custom Properties

Skin currently leverages [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for the following styles only:

-   colors
-   border radiuses

In future we may add support for other styles, such as spacing and typography.

**NOTE**: The intention of custom properties in Skin is NOT for apps to override the built in design system with their own look and feel. The intention is to allow easier, runtime access to themes (e.g. seasonal themes) and colour modes (e.g. dark mode) which only custom properties can support.

All custom property declarations can be found under `./src/less/properties`. Custom properties are scoped to each module (i.e. not `:root`).

### Custom Property Mixins

A suite of mixins has been created to provide fallbacks for browsers that do not support Custom Properties. The mixins are located in `./src/less/mixins/utility`.

Each mixin takes one or more LESS variables as input. For example, calling the mixin `.customColorProperty(@color-b1)` will output the following CSS:

```CSS
color: #c5e5fb;
color: var(--combobox-foreground-color, #c5e5fb);
```

The second line will be ignored in browsers that do not support custom properties; they will instead fall back to the declaration in the first line.

## Dark Mode

Every Skin module has full support for [dark mode](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme). The styles for dark mode are included at the end of every source file, inside of a `prefers-color-scheme: dark` media query.

## Storybook

Every module requires a page in storybook. In addition to the main use cases, try and cover as many variants, scenarios and edge cases as possible. The following tests are required for every module:

-   RTL (right to left languages)
-   Font-Size increase (up to 200%)
-   Color inheritance (to a certain degree)

Each story must be isolated to a single test. This allows us to easily run visual regression testing.

## Visual Regression Testing

We use Percy to do visual regression and compare visual changes in feature branches with the UIs in production. As such, changes to any specific module will need to verified against unintended consequences of those changes. This is usually to be done by internal contributors.

### External Contributors

External contributors cannot run Percy visual regression tests. However, they should mark the modules that were changed in pull requests to allow the internal team to run visual regression tests.

### Internal Contributors

Internal contributors will need to set up to run Percy snapshots by adding the Percy token to their operating system's environment variables. On a Mac, it would be like so:

`export PERCY_TOKEN=[TOKEN_GOES_HERE]`

This will allow internal contributors to run Percy snapshot tests.

Snapshots will likely be ran by developers locally before pushing up changes. Once they are ran, Percy dashboard should be checked to ensure no unintended style changes have taken place. If there are intended style changes that have occurred, those should be reverted/fixed. Once the set of new local changes is final and in scope with the changes related to the issue, the snapshot run will need to be marked as the canonical version against which future updates are compared.

#### Build Modes

Running snapshots has two modes for all variations - build mode and dry mode.

Build mode creates snapshots for stories, uploads the snapshots to Percy and created a new Percy build for the purposes of making comparisons to previous visual builds.

Dry mode runs through snapshots (mainly for the purpose of verifying which stories will be captured) but does not upload the snapshots and does not create a Percy build.

#### Run All Snapshots

To run all storybook snapshots in build mode:
`npm run snapshots:all`

To run all storybook snapshots in dry mode:
`npm run snapshots:all:dry`

#### Run Specific Snapshot(s)

To run single specific storybook snapshot in build mode for single module:
`npm run snapshots 'Button'`

To run multiple specific storybook snapshots in build mode for single module:
`npm run snapshots 'Button,Icon'`

To run single storybook snapshots in build mode for single module:
`npm run snapshots:dry 'Button'`

To run multiple storybook snapshots in dry mode for single module:
`npm run snapshots:dry 'Button,Icon'`

#### Technical Notes

As internal contributors may see in `package.json`, there are two other scripts, `snapshots:execute`, `snapshots:execute:dry`. These are scripts that should not be run directly. They are fired from `gulpfils.js` after the Percy storybook regexes have been formatted.

## Website

First, be sure to Run `npm install` to install all dependencies from NPM.

We use [Jekyll](http://jekyllrb.com) to generate HTML from templates, [LESS](https://lesscss.org) to preprocess and compile CSS, and [Babel](https://babeljs.io/) with [Webpack](https://webpack.js.org/) to compile and bundle JS. The website can be run and hosted locally (see next section) during development.

We use [Bundler](http://bundler.io) to install, update and run Jekyll in our dev environment. This ensures the same Jekyll environment as GitHub Pages. GitHub have created a nice guide called [Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) which we recommend you follow.

Once Jekyll is setup successfully, running a build should create the following file structure under `./_site`:

-   `./_site/static/common/docs.min.js`
    -   this is the Babel & Webpack output of `./docs/src/js/main.js`
-   `./_site/static/dsx/docs.min.css`
    -   this is the LESS compiler output of `./docs/src/less/dsx.less`
-   `./_site/static/dsx/skin.min.css`
    -   the full, minified skin css bundle (only used in development environment)
-   `./_site/index.html`
    -   ds6 homepage
-   `./_site/ds4/index.html`
    -   ds4 homepage
-   `./_site/archive`
    -   archive of old versions of website

This is the exact same structure that will be generated by GitHub Pages.

Our GitHub Pages source is located in the `docs` folder.

In order to start developing the website simply run: `npm start` which will build, bundle and run a BrowserSync server at http://localhost:3000.

## Scripts

The following scripts are available via npm:

-   `npm start` - Runs a build and starts local BrowserSync server on port 3000
-   `npm test` - Runs a build and lints CSS and LESS files
-   `npm run build` - Runs a build only (no server)

## Icon Creation

To add new SVG icons, please follow the [icon creation guide](ICON-CREATION.md).

## Releases

The `@ebay/skin` module is published to the public NPM repository at https://registry.npmjs.org/.

Please ensure your NPM registry is set correctly and that you are on the package owners list, i.e. `npm owner ls @ebay/skin`.

### Pre-Release

A pre-release is always made from a milestone branch.

1. Run `npm version prepatch`, `npm version preminor`, or `npm version premajor`. If you need to increment an existing prerelease use `npm version prerelease`. This command will automatically:
    - update the version number in css build files
    - update the version number in `package.json`
    - commit all changes locally
    - create a Git tag
1. Push commit to origin.
1. Run `npm publish --tag beta` to publish the package to NPM.

### Final Release

A final release is always made from the master branch.

1. Create a GitHub PR to merge the milestone branch into master branch.
1. Merge the PR after approval (do not squash!)
1. Switch to your local master branch and pull the changes from origin.
1. Run `npm version patch`, `npm version minor`, or `npm version major`. This command will automatically:
    - update the version number in css build files
    - update the version number in `package.json`
    - update the version number in Jekyll docs
    - commit all changes locally
    - create a Git tag
1. Push commit to origin.
1. Push the git tag to origin, e.g. `git push origin v3.1.0`.
1. Run `npm publish` to publish the package to NPM.
1. Publish the `/_cdn/skin/{version}` folder to the CDN.

### GitHub Release

After the module has been successfully pushed to NPM you should go ahead and create a [Git release](https://github.com/eBay/skin/releases) using the new Git tag that was created.

The release notes should reference all issues inside the relevant milestone.

### Hotfix Release

If the `master` branch is currently at `v12.x`, but we need to go back and apply a critical bug fix to `v6.3.x`, what do we do?

Git tags to the rescue! Git tags allow us to go back to any moment in time that we have previously "tagged".

**Do not try and push an entire feature in a hot fix!! A hotfix is allowed for small one-liner type fixes only.**

1. Go to tags page: https://github.com/eBay/skin/tags
1. Select the tag you'd like to go back in time to, e.g. https://github.com/eBay/skin/tree/v6.3.5
1. Select the tag dropdown and create a new branch named accordingly, e.g `6.3.6`. This is the branch you will merge your PR to and do the release from.
1. Create _another_ branch for your local dev work, e.g. `1723-textbox-fix`.
1. Now follow the [release steps](#final-release) mentioned above, but substituting `master` branch for your release branch (e.g. `6.3.6`) and milestone branch for your dev branch (e.g. `1723-textbox-fix`). **IMPORTANT:** No changes should be pushed to master branch!
1. Don't forget to publish your new git tag (e.g. `v6.3.6`)
1. Use `npm publish --tag hotfix` when publishing to NPM to tag this as a hotfix.

### Website Archive

The website archive under `/docs/archive` should be updated each time a minor or major release is published.

1. In a local branch, checkout the tag of the previous version, e.g. `git checkout v10.7.5`
1. Run `yarn`
1. Run `yarn build`
1. Copy relevant generated files only from `/_site` to a subfolder of `/docs/archive`
1. Create a pull request
