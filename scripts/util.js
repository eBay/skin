const { parse } = require('parse5');
const { serializeToString } = require('xmlserializer');
const prettier = require('prettier');

/**
 * Convert a standard HTML5 string to XHTML-compliant string
 *
 * @param {string} htmlString : html string to convert to xhtml
 */
function html2xhtml(html) {
    const bodyHtml = html.window.document.documentElement.outerHTML;
    const dom = parse(bodyHtml);
    const xmlHeader = `<?xml version="1.0" encoding="utf-8"?>\n`;
    const parsedString = `${xmlHeader}${serializeToString(
        dom.childNodes[0].childNodes[1].childNodes[0]
    )}\n`;
    return prettier.format(parsedString, { parser: 'html' });
}

module.exports = {
    html2xhtml,
};
