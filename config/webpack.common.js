const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    extensions: [
      '.vue',
      '.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'vue-style-loader',
          loader: 'css?sourceMap'
        })
      }
    ]
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    sourceMapFilename: '[file].map'
  }
};