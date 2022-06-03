const fs = require('fs');
const path = require('path');
const { rawSvgToHtml } = require('../util');

const SVG_ICONS_FILE = path.join(__dirname, '..', '..', 'src', 'svg', 'icons.svg');
const CUSTOM_STYLES_FILE = path.join(__dirname, '..', '..', 'docs', 'custom-styles.html');

const STORYBOOK_HEADER_FILE = path.join(__dirname, '..', '..', '.storybook', 'preview-head.html');

function copySVGIcons() {
    const svgIconsContent = fs.readFileSync(SVG_ICONS_FILE, 'utf8');
    const storyBookSvgIconsContent = `
    <!-- This is auto-generated content from npm script -->
    ${rawSvgToHtml(svgIconsContent)}
    `;

    fs.writeFileSync(STORYBOOK_HEADER_FILE, storyBookSvgIconsContent, 'utf8');
}

function copyCustomStyles() {
    const customStylesContent = fs.readFileSync(CUSTOM_STYLES_FILE, 'utf8');
    fs.appendFileSync(STORYBOOK_HEADER_FILE, customStylesContent, 'utf8');
}

module.exports = { copySVGIcons, copyCustomStyles };
