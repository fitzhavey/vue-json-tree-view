const webpackConfig = require('./webpack.test');

module.exports = function (config) {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['PhantomJS'],
    colors: true,
    coverageReporter: {
      dir: './coverage',
      reporters: [
        {
          type: 'html',
          subdir: function (browser) {
            return browser + '/html';
          }
        },
        {
          type: 'lcovonly',
          file: 'lcovonly'
        }
      ]
    },
    files: [{
      pattern: './config/karma-shim.js',
      watched: false
    }],
    frameworks: [
      'mocha',
      'chai'
    ],
    logLevel: config.LOG_INFO,
    port: 9876,
    preprocessors: {
      './config/karma-shim.js': ['webpack']
    },
    reporters: [
      'mocha',
      'coverage'
    ],
    singleRun: true,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};
