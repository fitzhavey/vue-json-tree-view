const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const webpackConfig = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"testing"'
      }
    })
  ]
});

webpackConfig.module.rules.forEach(function (loader) {
  if (loader.loader === 'vue-loader') {
    loader.options = {
      loaders: {
        js: 'babel-loader?plugins[]=istanbul'
      }
    };
  }
});

webpackConfig.module.rules.push({
  enforce: 'post',
  test: /\.vue$/,
  loader: 'istanbul-instrumenter-loader'
});

module.exports = webpackConfig;
