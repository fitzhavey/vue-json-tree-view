const webpackConfig = require('./webpack.test');

module.exports = function (config) {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['PhantomJS'],
    colors: true,
    coverageReporter: {
      dir: './reports/coverage',
      reporters: [
        {
          type: 'html',
          subdir: 'report-html'
        },
        {
          type: 'lcov',
          subdir: 'report-lcov'
        },
        {
          type: 'cobertura',
          subdir: '.',
          file: 'cobertura.txt'
        }
      ]
    },
    files: [{
      pattern: './test/unit/index.js',
      watched: false
    }],
    frameworks: [
      'mocha',
      'chai'
    ],
    logLevel: config.LOG_INFO,
    port: 9876,
    preprocessors: { 
      './test/unit/index.js': ['webpack']
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