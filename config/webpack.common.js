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
        enforce: 'pre',
        test: /.js|.vue$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
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
    sourceMapFilename: '[file].map'
  }
};
