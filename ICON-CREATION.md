# Icon Creation

Skin uses the SVG tag to deliver all iconography. This guide will help you properly add or modify SVG files for the Skin library.

## Step 1: Set up the icon

First you should use a graphics editor, like Illustrator or Sketch, to export the SVG markup. For our examples we will use Sketch.

-   Open the necessary icon Sketch file
-   Copy the icon layer (right-click > copy ... or [Command ⌘] + [c] on Mac when the layer is highlighted). This should be the 24x24 layer only. It should contain the glyph altogether, with the 24x24 bounding box and the paths.
    > ![copy layer](https://user-images.githubusercontent.com/105656/39767546-43b5c59c-52a4-11e8-8fcd-f8ede4764ef9.png)
-   Open a new file ([Command ⌘] + [n] on a Mac)
-   Paste the icon layer in the new file ([Command ⌘] + v ... or right-click > paste)
-   Reset the icon (X,Y) to (0,0)
    > ![reset coordinates](https://user-images.githubusercontent.com/105656/39767589-5b3ad2ac-52a4-11e8-8bd7-39560f653af4.png)

## Step 2: Process the SVG source code

-   Right click the icon's symbol layer and `Detach from symbol`

> ![detach from symbol](https://user-images.githubusercontent.com/105656/39767616-68c9b820-52a4-11e8-98d5-95239b9f78f7.png)

-   Open the icon folder and `Copy SVG code` from the icon layer (**DO NOT** copy the SVG from the folder)

> ![copy svg code](https://user-images.githubusercontent.com/105656/39767789-cea1f25c-52a4-11e8-87ce-287c8d78e749.png) >![copy svg code](https://user-images.githubusercontent.com/105656/39767854-f372b08a-52a4-11e8-93d5-698c242bc2ef.png)

-   Go to [SVGOMG](https://jakearchibald.github.io/svgomg/) and paste the SVG into the tool to clean up the SVG code.
    -   From the left menu click `Paste markup`
    -   Right click and `Paste` or use [Command ⌘] + [v] (on a Mac)

> **Note:** _Ensure the settings are set correctly ([SVG OMG settings table below](#svg-omg-settings))_

> ![paste SVG code into SVGOMG](https://user-images.githubusercontent.com/105656/39767876-fec509ce-52a4-11e8-928e-2d74528b648b.png)

## Step 3: Create the symbol in the SVG definition

-   Copy the `<path>` from SVGOMG (see examples below)

![svgomg ouput](https://user-images.githubusercontent.com/105656/39767912-10d1a442-52a5-11e8-9735-8f095773f3c0.png)

```xml
<path id="a" d="M3.253 21.504a1.73 1.73 0 0 1-.23.103c-.296.107-.586.129-.901-.06-.35-.211-.454-.495-.491-.853a2.105 2.105 0 0 1-.006-.34c.002-.03.005-1.085.01-3.162l1.657.005-.01 2.46 17.19-7.66L3.293 4.28l-.008 4.892h3.563c.349.02.814.126 1.293.396.834.471 1.354 1.293 1.354 2.432 0 1.14-.52 1.96-1.354 2.432-.479.27-.944.376-1.34.397H2.457V13.17l4.296.002c.118-.007.352-.06.572-.185.332-.187.511-.47.511-.988 0-.517-.179-.801-.51-.988a1.547 1.547 0 0 0-.526-.183H1.625l.003-2.316c.005-3.784.005-3.784.01-4.976a1.45 1.45 0 0 1 .03-.423c.052-.222.156-.426.358-.59a.995.995 0 0 1 .595-.223 1.187 1.187 0 0 1 .553.11l19.204 8.626a1.2 1.2 0 0 1 .272.17c.228.186.391.44.391.793a.99.99 0 0 1-.386.79c-.098.08-.19.134-.276.173l-18.984 8.46a2.21 2.21 0 0 1-.142.082zM3.291 3.43zm-.836 11.42c-.528 0-.955-.38-.955-.85s.427-.85.955-.85v1.7zm.82 2.35H1.653c0-.497.363-.9.811-.9.448 0 .811.403.811.9z"/>
```

-   Open `/src/svg/ds6/icons.svg` and add the generated SVG code from SVGOMG
    -   Ensure the `fill` is set to the correct color (this is set to black as an example, but could be different based on design)
    -   If there is a `<use>` tag, move necessary attributes to the `<path>` and remove this tag
        -   Specific attributes to look for: `fill` (if it needs to be different), `fill-rule`, etc.
    -   In all cases, remove the `id` from the `<path>`, as it is unnecessary
-   Add the `viewbox` to the `<symbol>` using the information provided in Sketch (top right corner of the window)

```xml
<symbol id="icon-send" viewBox="1.5 2.3 21.54 19.39">
    <path d="M3.253 21.504a1.73 1.73 0 0 1-.23.103c-.296.107-.586.129-.901-.06-.35-.211-.454-.495-.491-.853a2.105 2.105 0 0 1-.006-.34c.002-.03.005-1.085.01-3.162l1.657.005-.01 2.46 17.19-7.66L3.293 4.28l-.008 4.892h3.563c.349.02.814.126 1.293.396.834.471 1.354 1.293 1.354 2.432 0 1.14-.52 1.96-1.354 2.432-.479.27-.944.376-1.34.397H2.457V13.17l4.296.002c.118-.007.352-.06.572-.185.332-.187.511-.47.511-.988 0-.517-.179-.801-.51-.988a1.547 1.547 0 0 0-.526-.183H1.625l.003-2.316c.005-3.784.005-3.784.01-4.976a1.45 1.45 0 0 1 .03-.423c.052-.222.156-.426.358-.59a.995.995 0 0 1 .595-.223 1.187 1.187 0 0 1 .553.11l19.204 8.626a1.2 1.2 0 0 1 .272.17c.228.186.391.44.391.793a.99.99 0 0 1-.386.79c-.098.08-.19.134-.276.173l-18.984 8.46a2.21 2.21 0 0 1-.142.082zM3.291 3.43zm-.836 11.42c-.528 0-.955-.38-.955-.85s.427-.85.955-.85v1.7zm.82 2.35H1.653c0-.497.363-.9.811-.9.448 0 .811.403.811.9z"/>
</symbol>
```

> ![symbol definition file](https://user-images.githubusercontent.com/105656/39767933-214833a4-52a5-11e8-97e2-8e5742f7de99.png)

## Step 4: Create the SVG in Base64

NOTE: This step is no longer required. Support for background SVG, using base64, was dropped in Skin v10.0.0.

-   Use the following template to add your path definition:

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  width="21.54" height="19.39" viewBox="1.5 2.3 21.54 19.39"><path d="[ ... icon path info ...]"/></svg>
```

-   Ensure you have the `viewBox`, `width`, and `height` on the `<svg>` tag
    -   > _Note:_ Use width and height values **rounded to the hundredth place**
-   Navigate to the [encoder site](https://www.base64encode.org/) and paste in the SVG code
    -   Remove all new lines and extra white space
-   Click `> ENCODE <`
-   Copy the encoded string

## Step 5: Create the SVG in CSS

-   Create two new variables in `/src/less/less/ds6/variables.less` for the width and height of your icon
    -   Use the width and height values from the SVG width and height, **rounded to the nearest tens decimal place**

```less
@ds6-icon-following-width: 21.5px;
@ds6-icon-following-height: 19.4px;
```

-   Add a mixin for your icon in `/src/less/less/ds6/mixins.less`
-   Add the CSS class and reference the new mixin in `/src/less/icon/ds6/icon.less`

```less
.icon--following {
    .icon-mixin("icon-following", { .icon-following() });
}
```

## Step 6: Update documentation

-   Update `/docs/ds6/index.html` using the same symbol defintion as in `/src/svg/ds6/icons.svg`
-   Add an example of the icon in the appropriate place in `/docs/_includes/ds6/icon.html`

## Appendix

### SVG OMG Settings

| Setting name                   | toggle on / off [OR] value |
| ------------------------------ | -------------------------- |
| Show original                  | off                        |
| Compare gzipped                | on                         |
| Prettify code                  | off                        |
| Multipass                      | on                         |
| Precision                      | 3                          |
| Remove doctype                 | on                         |
| Remove XML instrutions         | on                         |
| Remove `<metadata>`            | on                         |
| Remove xmlns                   | off                        |
| Remove editor data             | on                         |
| Cleanup attribute whitespace   | on                         |
| Inline styles                  | on                         |
| Minify styles                  | on                         |
| Style to attributes            | on                         |
| Clean IDs                      | on                         |
| Remove raster images           | on                         |
| Remove unused defs             | on                         |
| Round/rewrite numbers          | on                         |
| Round/rewrite number lists     | on                         |
| Minify colours                 | on                         |
| Remove uknowns & defaults      | on                         |
| Remove unneeded group attrs    | on                         |
| Remove useless stroke & fill   | on                         |
| Remove viewBox                 | off                        |
| Remove/tidy enable-background  | on                         |
| Remove hidden elements         | on                         |
| Remove empty text              | on                         |
| Shapes to (smaller) paths      | on                         |
| Move attrs to parent group     | on                         |
| Collapse useless groups        | on                         |
| Round/rewrite paths            | on                         |
| Round/rewrite transforms       | on                         |
| Remove empty attrs             | on                         |
| Remove empty containers        | on                         |
| Merge paths                    | on                         |
| Remove unused namepsaces       | on                         |
| Sort attrs                     | on                         |
| Remove `<title>`               | on                         |
| Remove `<desc>`                | on                         |
| Prefer viewBox to width/height | on                         |
| Remove style elements          | on                         |
| Remove script elements         | on                         |
