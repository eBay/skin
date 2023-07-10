const path = require("path");
console.log(`STORYBOOK_DS: ${process.env.STORYBOOK_DS}`);
module.exports = {
  stories: ["../src/less/**/*.stories.js", "../src/less/**/stories/**/*.stories.js"],
  webpackFinal: async (config, {
    configType
  }) => {
    config.module.rules.push({
      test: /\.less/,
      use: ["style-loader", "css-loader", {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [["autoprefixer", {
              // Options
            }]]
          }
        }
      }, {
        loader: "less-loader",
        options: {
          lessOptions: {
            globalVars: {
              ds: `ds${process.env.STORYBOOK_DS}`
            }
          }
        }
      }]
    });
    return config;
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};