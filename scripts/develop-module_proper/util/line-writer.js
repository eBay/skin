const fs = require('fs');
const path = require('path');
const log = require('../../log');

/**
 * Write a line to an existing file.
 * @param {object} options Options available for appending line to a file.
 * @param {string} options.filePathFromRoot path to the file where the appending has to happen.
 * @param {string} options.newLineContent the new line to be appended to file.
 * @param {string} options.duplicateCheckText checks for duplicate line with this text instead of newLineContent.
 * @param {function} options.sectionPredicate invokes options.getLineMeta if this section predicate returns true.
 * @param {function} options.getLineMeta should return the metadata based on previous line, current line and next line.
 */
function writeLine(options) {
    const {
        filePathFromRoot,
        newLineContent,
        duplicateCheckText,
        sectionPredicate,
        getLineMeta
    } = options;

    const filePath = path.join(__dirname, '..', '..', '..', filePathFromRoot);
    if (!fs.existsSync(filePath)) {
        log.warn('%s file does not exist to append to!', filePath);
    }

    let isSectionMatched = false;
    let lineAppended = false;
    const newFileContents = [];
    const currentFileContent = fs.readFileSync(filePath, 'utf8');
    const currentFileContents = currentFileContent.split('\n');
    for (let i = 0; i < currentFileContents.length; i++) {
        const line = currentFileContents[i];
        if (line.match(duplicateCheckText || newLineContent)) {
            log.warn('[%s] File already has line appended!', filePath);
            return;
        }
        if (!isSectionMatched && (typeof sectionPredicate !== 'function' || sectionPredicate(line))) {
            isSectionMatched = true;
        } else if (isSectionMatched && !lineAppended) {
            const prevLine = i > 0 ? currentFileContents[i - 1] : null;
            const nextLine = i < currentFileContents.length ? currentFileContents[i + 1] : null;
            const { prevLineSuffix, newLineSuffix = '', shouldAppend = false } = getLineMeta(prevLine, line, nextLine);
            if (shouldAppend) {
                _processUpdates(newFileContents, newLineContent, prevLineSuffix, newLineSuffix);
                lineAppended = true;
            }
        }
        newFileContents.push(line);
    }

    fs.writeFileSync(filePath, newFileContents.join('\n'));
}

function _processUpdates(newFileContents, newLineContent, prevLineSuffix, newLineSuffix) {
    if (prevLineSuffix) {
        newFileContents.push(newFileContents.pop() + prevLineSuffix);
    }
    newFileContents.push(newLineContent + newLineSuffix);
}

module.exports = writeLine;
