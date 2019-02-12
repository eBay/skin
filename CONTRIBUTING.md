# Contributing

This page contains instructions and guidelines for anybody contributing code to the eBay Skin project.

## Table of Contents

* [System Requirements](#system-requirements)
* [Contribution Steps](#contribution-steps)
* [Branching Strategy](#branching-strategy)
* [Pull Requests](#pull-requests)
* [Style Guide](#style-guide)
* [Website Setup](#website-setup)
* [Scripts](#scripts)
* [Icon Creation](#icon-creation)
* [Releases](#releases)

## System Requirements

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)
* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](http://bundler.io)
* [Jekyll](https://jekyllrb.com) ([install via Bundler](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/#step-2-install-jekyll-using-bundler))

## Contribution Steps

Before writing any code, please submit a new issue to [GitHub](https://github.com/eBay/skin/issues). Or, if you want to work on an *existing* issue, please request to do so on the relevant ticket.

We **strongly** advise you to only begin working on issues that are assigned specifically to you and that are part of the upcoming milestone, otherwise your work may end up being in vain.

Here is a rough overview of steps required when contributing code to skin:

* GitHub team members must create a new branch in the Skin repo. Non-team members should create their own fork.
    * Please ensure you branch off from the correct milestone branch! See branching strategy section below.
* Skin adopts the [BEM](https://css-tricks.com/bem-101/) methodology (a popular naming convention for classes in HTML and CSS)
    * Please familiarize yourself with our style guide in the section below.
* After making changes to `.less` files, ensure that no new CSS lint warnings or errors are introduced
* Add or update the corresponding website documentation. More information in the [documentation](#documentation) section below.
* Push commit(s) to the upstream branch. Ensure new dist files (i.e. the compiled CSS files) are included!
* Send pull request. See Pull Requests section below.

## Branching Strategy

Do not attempt to commit feature work directly to the `master` branch. Pushes to the `master` branch are restricted to admins and should only be used for important corrections to the documentation or website.

All other branches are "milestone" branches or "issue" branches.

Work for every "issue" must go in its own branch. The branch name will reflect the issue number and issue type. For example, for an issue number 202, related to the pagination module, a branch named `202-pagination` would be created.

Issue branches must be created from the relevant milestone branch. For example, if issue 202 will go out in the v2.6.7 milestone, then the 202 issue branch must be created from the 2.6.7 milestone branch.

Every milestone branch must be created from the `master` branch. For example, when beginning work on the 2.9.0 release, the `2.9.0` branch would be created from the `master` branch.

<strike>When work on an issue branch is complete and committed to the branch, the Jenkins CI job must be run on that branch. This may result in a new commit being added to the issue branch by the CI machine. After this point, a PR should be sent.</strike>

When all milestone issues are complete, and merged into the milestone branch, a Skin admin will merge the milestone branch into the `master` branch in preparation for the release.

A milestone branch will be deleted after it has been merged into `master`. There is no need to keep these milestone branches lying around, as we can go back to any point in time using tags. See the hotfix section below for more details.

## Pull Requests

Guidance for pull requests:

* Always double-check which branch you are attempting to merge into. The target branch should always be a milestone branch!
    * Only Skin admins are permitted to merge into `master`
* Non-atomic commits should be squashed
    * i.e. please avoid "work in progress" commits (especially those in a broken state) in your PR
* Pull request must only contain changes related to the issue.
    * **Do not** be tempted to go fixing or refactoring unrelated issues - as it makes the code reviewers job a lot harder as well as increasing risk of regression
    * Think of yourself as a surgeon. Get in, fix the problem, and don't go tinkering with anything unrelated! If you do spot some other issue that bothers you, create an issue for it and it can be tackled separately.
* After the pull request has been merged, your issue branch should be immediately deleted (by yourself or admin)

## Style Guide

When contributing to Skin, please bear the following in mind:

* Ensure all markup adheres to our [accessibility patterns](https://ebay.gitbooks.io/mindpatterns/content/)
* Ensure all markup is valid HTML
* Leverage ARIA roles, states and properties for styling hooks wherever possible
* Use BEM syntax for modifiers (double-dash) and nested classes (double-underscore)
* Use SVG for icons and graphics (the icon-font is now frozen/deprecated)
* Harness CSS margin-collapse wherever possible
* Do not use the `<i>` tag for icons, use a `<span>` instead
* Do not use presentational classnames, e.g. `btn--green` should be `btn--secondary` for example
* Do not combine classes into a single classname, e.g. `btn-sec` should be `btn btn--sec`, this allows cascades without advanced attribute selectors or pre-processors
* Do not use ambiguous or global classnames, e.g. `large` should be `btn--large`
* Do not use class `disabled` to disable buttons or form elements, use the HTML `disabled` property instead
* Do not use class `active` on radio buttons or checkboxes, use `aria-selected` or `aria-checked` instead
* Do not wrap inputs with labels, use explicit labels instead (e.g. use the `for` and `id` attributes)
* Do not use `href="#"` or `href="javascript"` in examples, use `href="http://www.ebay.com"` or any other dummy url
* Every `<img>` tag must have an `alt` attribute, with **no** exceptions. The value can be an empty string for presentational images.
* Avoid naming conflicts with other grid systems (e.g. Bootstap Grids)
* Keep LESS pre-processor usage restricted to variables & mixins. 9 times out of 10 advanced features of pre-processors can be avoided by using CSS properly.
* Avoid too much nesting/indenting of LESS selectors as it can reduce human scan-ability of code and can also result in sub-optimal compiled CSS. The fewer rules required to check for a given element, the faster style resolution will be. This is the key to dramatically increasing performance.
[https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS)
* Please do not commit commented code. All commented code should be deleted.

## Website Setup

First, be sure to Run `yarn install` to install all dependencies from NPM.

We use [Jekyll](http://jekyllrb.com) to generate HTML from templates, and [Lasso](https://github.com/lasso-js/lasso) to bundle static files such as CSS & JS. The website can be run and hosted locally (see next section) during development.

We use [Bundler](http://bundler.io) to install, update and run Jekyll in our dev environment. This ensures the same Jekyll environment as GitHub Pages. GitHub have created a nice guide called [Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) which we recommend you follow.

Once Jekyll is setup successfully, running a build should create the following file structure under `./_site`:

* `./_site/static/dsx/docs.min.css`
    * this is the Lasso output of `./docs/src/less/dsx`, as generated by Lasso
* `./_site/static/dsx/docs.min.js`
    * this is the Lasso output of `./docs/src/js/dsx`
* `./_site/static/dsx/skin.min.css`
    * the full, minified skin css bundle copied directly from /dist
* `./_site/index.html`
    * ds4 homepage
* `./_site/ds6/index.html`
    * ds6 homepage
* `./_site/archive`
    * archive of old versions of website
* `./_site/test`
    * test pages, copied directly from `./docs/test`

This is the exact same structure that will be generated by GitHub Pages.

Our GitHub Pages source is located in the `docs` folder.

In order to start developing the website simply run: `npm start` which will build, bundle and run a BrowserSync server at http://localhost:3000.

DS4 test pages are available at http://localhost:3000/test. Web archive is available at http://localhost:3000/archive.

## Scripts

The following scripts are available via npm or yarn:

* `yarn start` - Runs a build and starts local BrowserSync server on port 3000
* `yarn test` - Runs a build and lints CSS and LESS files
* `yarn build` - Runs a build only (no server)

## Icon Creation

To add new SVG icons, please follow the [icon creation guide](ICON-CREATION.md).

## Releases

The `@ebay/skin` module is published to the public NPM repository at https://registry.npmjs.org/.

Please ensure your NPM registry is set correctly and that you are on the package owners list, i.e. `npm owner ls @ebay/skin`.

### Pre-Release

A pre-release is always made from a milestone branch.

1. Run `npm version prepatch`, `npm version preminor`, or `npm version premajor`. This command will automatically:
    * update the version number in css build files
    * update the version number in `package.json`
    * commit all changes locally
    * create a Git tag
1. Push commit to origin.
1. Run `npm publish --tag beta` to publish the package to NPM.

### Final Release

A final release is always made from the master branch.

1. Manually update all CDN url paths in documentation and push the change
1. Create a GitHub PR to merge the milestone branch into master branch.
1. Merge the PR after approval (do not squash!)
1. Switch to your local master branch and pull the changes from origin.
1. Run `npm version patch`, `npm version minor`, or `npm version major`. This command will automatically:
    * update the version number in css build files
    * update the version number in `package.json`
    * commit all changes locally
    * create a Git tag
1. Push commit to origin.
1. Push the git tag to origin, e.g. `git push origin v3.1.0`.
1. Run `npm publish` to publish the package to NPM.

### GitHub Release

After the module has been successfully pushed to NPM you should go ahead and create a [Git release](https://github.com/eBay/skin/releases) using the new Git tag that was created.

The release notes should reference all issues inside the relevant milestone.

### Hotfix Release

If the `master` branch is currently at `v7.0.x`, but we need to go back and apply a critical bug fix to `v6.3.x`, what do we do?

Git tags to the rescue! Git tags allow us to go back to any moment in time on our `master` branch that we have previously "tagged".

**Do not try and push an entire feature in a hot fix!! A hotfix is allowed for small one-liner type fixes only.**

1. Backup the current `master` branch on GitHub. You will need this backup if things go "pear shaped".
1. Go to tags page: https://github.com/eBay/skin/tags
1. Select the tag you'd like to go back in time to, e.g. https://github.com/eBay/skin/tree/v6.3.5
1. Select the tag dropdown and create a new branch, e.g `hotfix-6.3.6`
1. Git pull & checkout the new branch in your local machine, e.g. `git checkout hotfix-6.3.6`
1. For your sanity, run `git log` to ensure branch only has commit history up to the selected tag
1. Make your changes in the branch as usual then commit and push your branch
1. Do your your NPM & CDN release from this hotfix branch
