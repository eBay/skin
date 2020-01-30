const fs = require('fs');
const path = require('path');
const { rawSvgToHtml } = require('../generate-helper');

const STORYBOOK_DS = process.env.STORYBOOK_DS || 4;
const SVG_ICONS_FILE = path.join(__dirname, '..', '..', 'src', 'svg', `ds${STORYBOOK_DS}`, 'icons.svg');
const STORYBOOK_HEADER_FILE = path.join(__dirname, '..', '..', '.storybook', 'preview-head.html');

const svgIconsContent = fs.readFileSync(SVG_ICONS_FILE, 'utf8');
const storyBookSvgIconsContent = `
<!-- This is auto-generated content from npm script -->
${rawSvgToHtml(svgIconsContent)}
`;

fs.writeFileSync(STORYBOOK_HEADER_FILE, storyBookSvgIconsContent, 'utf8');
