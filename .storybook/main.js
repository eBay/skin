const path = require('path');

console.log(`STORYBOOK_DS: ${process.env.STORYBOOK_DS}`);

module.exports = {
	core: {
		builder: "webpack5",
	},
	stories: [`../src/less/index.stories.ds${process.env.STORYBOOK_DS}.js`, '../src/less/**/*.stories.js', '../src/less/**/stories/**/*.stories.js'],
	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.less/,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'postcss-loader',
					options: {
					  postcssOptions: {
						plugins: [
						  [
							'autoprefixer',
							{
							  // Options
							},
						  ],
						],
					  },
					}
				},
				'less-loader'
			]
		});

		return config;
	}
};
