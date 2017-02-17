const config = require('./webpack.common.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(config, {
  bail: true,
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'vue-json-tree-view.js',
    pathinfo: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   },
    //   sourceMap: true
    // }),
    // new webpack.LoaderOptionsPlugin({
    //   debug: false,
    //   minimize: true
    // }),
    new ExtractTextPlugin('vue-json-tree-view.css')
  ]
});
