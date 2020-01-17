const path = require('path');

console.log(`STORYBOOK_DS: ${process.env.STORYBOOK_DS}`);

module.exports = {
    stories: [`../src/less/index.stories.ds${process.env.STORYBOOK_DS}.js`, '../src/less/**/*.stories.js'],
    webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
        test: /\.less/,
        use: [
            'style-loader',
            'css-loader',
            'less-loader'
        ]
    });

    return config;
  }
};
