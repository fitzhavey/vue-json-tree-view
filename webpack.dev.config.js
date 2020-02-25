/**
 * @file webpack dev config file
 */
const path = require('path');
const config = require('./webpack.base.config');

config.entry = './index.js';
config.output = {
	path: `${path.resolve('build')}/`,
	publicPath: 'build',
	filename: 'build.js'
};

module.exports = config;
