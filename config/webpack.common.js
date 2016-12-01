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
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              fallbackLoader: 'vue-style-loader',
              loader: 'css-loader?sourceMap'
            })
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'vue-style-loader',
          loader: 'css-loader?sourceMap&importLoaders=1!postcss-loader'
        })
      }
    ]
  },
  output: {
    path: path.resolve('./dist'),
    sourceMapFilename: '[file].map'
  }
};
