const { VueLoaderPlugin } = require('vue-loader');

/**
 * @file webpack base config file
 */

module.exports = {
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.s[ac]ss$/i,
			use: [
			// Creates `style` nodes from JS strings
				'style-loader',
				// Translates CSS into CommonJS
				'css-loader',
				// Compiles Sass to CSS
				'sass-loader'
			]
		},
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader']
		}
		]
	},
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.common.js'
		}
	},
	plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin()
	]
};
