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
        loader: 'vue',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              fallbackLoader: 'vue-style-loader',
              loader: 'css?sourceMap'
            })
          }
        }
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
          loader: 'css?sourceMap&importLoaders=1!postcss'
        })
      }
    ]
  },
  output: {
    path: path.resolve('./dist'),
    sourceMapFilename: '[file].map'
  }
};
