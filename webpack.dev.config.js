/**
 * @file webpack dev config file
 */
var config = require('./webpack.base.config');
var path = require('path');

config.entry = './index.js';
config.output = {
    path: path.resolve('build') + '/',
    publicPath: 'build',
    filename: 'build.js'
};

module.exports = config;
