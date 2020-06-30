const fs = require('fs');
const path = require('path');

const CUSTOM_STYLES_FILE = path.join(__dirname, '..', '..', 'docs', 'storybook', 'custom-styles.html');
const STORYBOOK_HEADER_FILE = path.join(__dirname, '..', '..', '.storybook', 'preview-head.html');

const customStylesContent = fs.readFileSync(CUSTOM_STYLES_FILE, 'utf8');

fs.appendFileSync(STORYBOOK_HEADER_FILE, customStylesContent, 'utf8');
