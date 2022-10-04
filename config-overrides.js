module.exports = function override(config, env) {
	return {
		...config,
		module: {
			...config.module,
			rules: [
				...config.module.rules,
				{
					test: /\.scss$/i,
					use: [
						{
							loader: 'sass-loader',
							options: {
								additionalData:
									'@import "src/assets/scss/packages/index.scss";',
							},
						},
					],
				},
			],
		},
	};
};
