/* eslint-disable */

'use strict';

var CleanCSS = require('clean-css');

module.exports = function () {
    function CleanCSSProcessor(options) {
        this.options = options || {};
    }

    CleanCSSProcessor.prototype = {
        process: function (css, extra) {
            var options = this.options,
                sourceMap = extra.sourceMap,
                sources,
                sourcesContent;

            if (sourceMap) {
                options.sourceMap = sourceMap.getExternalSourceMap();
                if (options.sourceMap) {
                    options.sourceMap = options.sourceMap.toString();
                    var sourceMapObj = JSON.parse(options.sourceMap);
                    if (sourceMapObj.sourcesContent) {
                        sourcesContent = sourceMapObj.sourcesContent;
                        sources = sourceMapObj.sources;
                    }
                }
            }

            if (typeof options.keepSpecialComments === 'undefined') {
                options.keepSpecialComments = '*';
            }
            options.processImport = false;

            if (typeof options.rebase === 'undefined') {
                options.rebase = false;
            }

            if (typeof options.advanced === 'undefined') {
                options.advanced = false;
            }

            var output = new CleanCSS(options).minify(css);

            if (sourceMap) {
                if (sourcesContent) {
                    for (var source = 0; source < sources.length; source++) {
                        output.sourceMap.setSourceContent(sources[source], sourcesContent[source]);
                    }
                }
                sourceMap.setExternalSourceMap(JSON.stringify(output.sourceMap));
            }

            var css = output.styles;
            if (sourceMap) {
                var sourceMapURL = sourceMap.getSourceMapURL();
                css += sourceMap.getCSSAppendage();
            }

            return css;
        },
    };

    return CleanCSSProcessor;
};
