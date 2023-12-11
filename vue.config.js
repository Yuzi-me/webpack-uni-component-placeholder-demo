const WebpackUniComponentPlaceholder = require('webpack-uni-component-placeholder');

module.exports = {
  configureWebpack: {
    plugins: [
      new WebpackUniComponentPlaceholder()
    ]
  }
}