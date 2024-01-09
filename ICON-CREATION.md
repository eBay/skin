# Icon Creation

Skin uses the SVG tag to deliver all iconography. This guide will help you properly add or modify SVG files for the Skin library.

**Base Icons Only**

Only base icons should be used. No state-based icons, such as disabled icons or even possibly an icon relaying an error state (likely red), should be used. Those state modifications on icons should be handled downstream using `css` modifiers to allow for those variations.

## Step 1: Import the SVG

In order to import the SVG into Skin, all you need to do is drop the SVG into `src/svg/icon` directory. The icon name will be the way the icon will be imported into Skin. If the icon does not have `icon-` prefix, it will be renamed automatically to include the prefix.
The viewbox given will be translated to the `width` and `height` that the icons is going to use.

**Couple of Notes**

-   We should not apply fill on base icons. We use `fill: currentColor` to be able to change the color on icons
-   We should not apply base sizes. We will apply those using CSS
-   If there is a `<use>` tag, move necessary attributes to the `<path>` and remove this tag
    -   Specific attributes to look for: `fill` (if it needs to be different), `fill-rule`, etc.
-   In all cases, remove the `id` from the `<path>`, as it is unnecessary
-   If `id` is needed for certain `clip-path` or such, make sure it is unique

## Step 2: Run scripts

To properly setup the icon after it is placed in the `src/svg/icon` directory, run `node scripts genSVG` from the root of the skin project. This will properly setup the icon in docs, in the `icon.svg` bundle, and generate the CSS needed for the icon.
Afterward, you should run `npm run build` in order to also copy all those files to `dist`.

## Appendix

## Star-rating

Star rating icons are the only unique set of icons. These will not recieve an `icon-` prefix

## Skip skin docs

If you do not want an icon to show up in the skin docs, add the name of the icon in `docs/_data/icons.yaml` under `skipDocs` key. Then rerun `step 2` scripts.

## Skip CSS generation

In order to skip an icon to have it's CSS be generated add the name of the icon in `docs/_data/icons.yaml` under `skip` key. Then rerun `step 2` scripts.
This can be done for certain icons which might want to have different sizes than those specified in the `viewbox`

## Depcrating Icons

When an icon is removed or renamed, it will need to get deprecated. If you want to deprecate an icon, add the name of the icon in `docs/_data/icons.yaml` under `deprecated` key. Then rerun `step 2` scripts. This will show (if none existed yet) a `Deprecated` section in the docs and include the icon. This will also remove the icon from the `icon.svg` bundle and remove the CSS for the icon.

Deprecated icons are to remain until the next major version when they can be removed. After they are removed, the icon can be removed from the `deprecated` key and the `step 2` scripts can be rerun.

## Script changes

Any script changes needed should be done in `scripts/generate-images.js`.
