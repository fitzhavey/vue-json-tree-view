const config = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(config, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"testing"'
      }
    })
  ]
});