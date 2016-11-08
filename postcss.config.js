module.exports = {
  plugins: [
    require('stylelint'),
    require('autoprefixer')({
      browsers: [
        'last 2 versions',
        'IE >= 11',
        'iOS >= 8'
      ]
    }),
    require('postcss-reporter')({
      clearMessages: true
    })
  ]
};
