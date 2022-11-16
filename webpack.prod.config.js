/**
 * @file webpack prod config file
 */
const config = require('./webpack.base.config');

config.entry = './src/index.js';
config.output = {
	filename: './vue-json-tree-view.min.js',
	library: 'TreeView',
	libraryTarget: 'umd'
};

config.mode = 'production';

config.plugins.push(
	{
		apply: compiler => {
			compiler.hooks.done.tap('DonePlugin', () => {
				// eslint-disable-next-line no-console
				console.log('Compile is done !');
				setTimeout(() => {
					process.exit(0);
				});
			});
		}
	}
);

module.exports = config;
