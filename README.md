# Skin

Skin is a CSS framework developed by eBay.

Please visit the [Skin website](https://ebay.github.io/skin) for all end-user documentation.

## License

Skin is [MIT](LICENSE) licensed.

## Install

Skin is available as the `@ebay/skin` package on [NPM](https://www.npmjs.com/). Skin is also available on a [CDN](https://ebay.github.io/skin#cdn).

**IMPORTANT! PLEASE READ:** Users of eBay's *internal* NPM repository must add the following exception to their `.npmrc` file or `.yarnrc` file, respectively, in order to support the scoped package name:

For NPM: `@ebay:registry=https://registry.npmjs.org`

For Yarn: `"@ebay:registry" "https://registry.npmjs.org/"`

If you are using the public NPM repository, then you can safely ignore this requirement.

## Versioning

As of v3, Skin follows [Semantic Versioning](http://semver.org).

Prior to v3, Skin does **not** follow strict semantic versioning, and uses the following convention instead:

1. **PATCH** version when we make backwards-compatible bug fixes AND when we add functionality in a backwards-compatible manner.
1. **MINOR** version when we make incompatible API changes.
1. **MAJOR** version when we make radical architectural changes (i.e this will be the next version of Skin, Skin3).

## Releases &amp; Milestones

From v3 onwards, please refer to our publicly visible [releases](https://github.com/eBay/skin/releases) and [milestones](https://github.com/eBay/skin/milestones) pages.

Prior to v3, all releases and milestones can only be viewed on the old, internal repository.

## Issues

Please use our publicly visible [issues page](https://github.com/eBay/skin/issues) to ask questions, report issues or submit feature requests.

**If you are not sure whether your issue should be publicly visible, please use our internal GitHub.**

The Skin admins will categorize your issue or feature request, using labels, into one of four possible states:

* resolved (e.g. duplicate or invalid)
* blocked (e.g. requires further discussion or more info)
* backlog (e.g. approved but not urgent)
* milestone (e.g. approved and placed in a [milestone](https://github.com/eBay/skin/milestones) according to priority)

See the next section below for more info on how we use labels.

### Labels

To help track your issue, the Skin admins will likely assign it with a coloured label belonging to one or more of the following categories:

* Red: Blocker Type (e.g. discussion, design, spec)
* Yellow: Release Type (e.g. patch, minor, major)
* Black: Issue Type (e.g. bug, enhancement, feature)
* White: Resolution Type (e.g. wontfix, invalid, duplicate)
* Blue: Fix Type (e.g. accessibility, IE, redlines)
* Pink: DS Type (DS4 or DS6)

Additionally, any of the following specific labels might be assigned:

* orange: backlog (awaiting milestone allocation)
* purple: question (a question only - anyone can assign this)

## Developing &amp; Contributing

Interested in contributing? Head over to our [contributing guide](CONTRIBUTING.md) for information on how to get started.

Contributions don't have to be code! They can be ideas, inspiration, discussion or filing bugs!
