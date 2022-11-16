/**
 * @file webpack dev config file
 */
const config = require('./webpack.base.config');

config.entry = './index.js';
config.output = {
	filename: 'build/build.js'
};

config.devServer = {
	static: {
		directory: __dirname
	}
};

config.mode = 'development';

module.exports = config;
