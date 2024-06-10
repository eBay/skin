const path = require("path");
module.exports = {
  stories: ["../src/sass/**/*.stories.js", "../src/sass/**/stories/**/*.stories.js"],
  webpackFinal: async (config, {
    configType
  }) => {
    config.module.rules.push({
      test: /\.scss/,
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
        loader: "sass-loader",
        options: {}
      }]
    });
    return config;
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },
  docs: {
    autodocs: false
  }
};