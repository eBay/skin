# Icon Creation

Skin uses inline and background SVGs to deliver the iconography for any site using it. This guide will help you properly add or modify SVG files for the Skin library.

## Step 1: Set up the icon

First you should use a graphics editor, like Illustrator or Sketch, to export the SVG markup. For our examples we will use Sketch.

- Gather the necessary icon Sketch file.
- Copy the icon layer. This should be the 24x24 layer only. It should contain the glyph altogether, with the 24x24 bounding box and the paths.
- Open a new file (Command + n on a Mac)
- Paste the icon layer in the new file
- Reset the icon (X,Y) to (0,0)

## Step 2: Process the SVG source code

- "Detach from symbol"
- "Copy SVG code" from the icon layer (DO NOT copy the SVG from the folder)
- Go to [SVGOMG](https://jakearchibald.github.io/svgomg/) and paste the SVG into the tool to clean up the SVG code. *Note: Ensure the settings are set correctly (SVG OMG settings table below)*

## Step 3: Create the symbol in the SVG definition

- Open `/src/svg/ds6/icons.svg` and add the generated SVG code from SVGOMG

**For icons with a `<use>` with a fill color (e.g. those which were created with a mask)**

- Copy everything from SVGOMG within the `<svg>` tag. Example:

```xml
<symbol id="icon-checkbox-unchecked" viewBox="4.12 4.1 15.77 15.8">
    <defs>
        <path id="icon-checkbox-unchecked-path" d="M18.56 5.25H5.44a.19.19 0 0 0-.19.187v13.126a.19.19 0 0 0 .19.187h13.12a.19.19 0 0 0 .19-.187V5.437a.19.19 0 0 0-.19-.187zM4.116 19.9h15.768V4.1H4.116v15.8z"/>
    </defs>
    <use fill="#000" fill-rule="evenodd" xlink:href="#icon-checkbox-unchecked-path" />
</symbol>
```

- Ensure the `fill` is set to the correct color (this is set to black as an example, but could be different based on design)
- Be sure to remove any `transform="translate(x, x)"` which may be in the `<use>` tag
- Edit the `id` of the `<path>` and the `xlink:href` in the `<use>` to match, as this is a unique ID with which they will be tied within the document. Use the convention `icon-name-path`

**For icons *without* a fill color provided in a `<use>` tag**

- Copy the `<path>` from SVGOMG

```xml
<symbol id="icon-send" viewBox="1.5 2.3 21.54 19.39">
    <path d="M3.253 21.504a1.73 1.73 0 0 1-.23.103c-.296.107-.586.129-.901-.06-.35-.211-.454-.495-.491-.853a2.105 2.105 0 0 1-.006-.34c.002-.03.005-1.085.01-3.162l1.657.005-.01 2.46 17.19-7.66L3.293 4.28l-.008 4.892h3.563c.349.02.814.126 1.293.396.834.471 1.354 1.293 1.354 2.432 0 1.14-.52 1.96-1.354 2.432-.479.27-.944.376-1.34.397H2.457V13.17l4.296.002c.118-.007.352-.06.572-.185.332-.187.511-.47.511-.988 0-.517-.179-.801-.51-.988a1.547 1.547 0 0 0-.526-.183H1.625l.003-2.316c.005-3.784.005-3.784.01-4.976a1.45 1.45 0 0 1 .03-.423c.052-.222.156-.426.358-.59a.995.995 0 0 1 .595-.223 1.187 1.187 0 0 1 .553.11l19.204 8.626a1.2 1.2 0 0 1 .272.17c.228.186.391.44.391.793a.99.99 0 0 1-.386.79c-.098.08-.19.134-.276.173l-18.984 8.46a2.21 2.21 0 0 1-.142.082zM3.291 3.43zm-.836 11.42c-.528 0-.955-.38-.955-.85s.427-.85.955-.85v1.7zm.82 2.35H1.653c0-.497.363-.9.811-.9.448 0 .811.403.811.9z"/>
</symbol>
```

- Remove the `id` from the path, as it is unnecessary

**For all types of icons**

- Add the `viewbox` to the `<symbol>` using the information provided in Sketch (top right corner of the window)

## Step 4: Create the SVG in Base64

- Use the following template to add your path definition:

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="17.57" viewBox="0.5 0.23 21 17.57"><defs><path id="a" d="[ ... your path info here ... ]"/></defs><use fill="#000" fill-rule="evenodd" transform="translate(-1 -3)" xlink:href="#a" /></svg>
```

- Ensure you have the `viewBox`, `width`, and `height` on the `<svg>` tag
- Navigate to the [encoder site](https://www.base64encode.org/) and paste in the SVG code
  - Remove all new lines and extra white space
  - Make sure the fill is set correctly (if it has a `<use>` tag)
- Copy the encoded string

## Step 5: Create the SVG in CSS

- Create two new variables in `/src/less/less/ds6/variables.less` for the width and height of your icon

```less
@ds6-icon-following-width: 15px;
@ds6-icon-following-height: 19.7px;
```

- Add a mixin for your icon in `/src/less/less/ds6/mixins.less`

```less
.icon-following(@width: @ds6-icon-following-width; @height: @ds6-icon-following-height) {
    .background-icon-image(@width; @height; 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAuNSAwLjI1IDE1IDE5LjUiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMTcuMzU3IDE4LjVMMTIgMTYuMTM4IDYuNjQzIDE4LjVWNC40MTdoMTAuNzE0VjE4LjV6bTAtMTYuMjVINi42NDNjLTEuMTc5IDAtMi4xMzIuOTc1LTIuMTMyIDIuMTY3TDQuNSAyMS43NSAxMiAxOC41bDcuNSAzLjI1VjQuNDE3YzAtMS4xOTItLjk2NC0yLjE2Ny0yLjE0My0yLjE2N3oiLz48L2RlZnM+PHVzZSBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00IC0yKSIgeGxpbms6aHJlZj0iI2EiLz48L3N2Zz4=');
}
```

- Add the CSS class and reference the new mixin in `/src/less/icon/ds6/icon.less`

```less
.icon--following {
    .icon-mixin('icon-following', { .icon-following() });
}
```

## Step 6: Update documentation

- Update `/docs/ds6/index.html` using the same symbol defintion as in `/src/svg/ds6/icons.svg`
- Add an example of the icon in the appropriate place in `/docs/_includes/ds6/icon.html`
