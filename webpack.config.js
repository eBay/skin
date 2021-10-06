const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: './docs/_babel/main.js',
    },
    mode: 'production',
    optimization: {
        minimize: true,
    },
    output: {
        filename: 'docs.min.js',
        path: path.resolve(__dirname, './docs/static/common'),
    },
};
