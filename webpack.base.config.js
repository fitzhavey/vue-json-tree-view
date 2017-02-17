/**
 * @file webpack base config file
 */

module.exports = {
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js'
      }
    }
};
