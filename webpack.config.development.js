const base = require('./webpack.config.base')

module.exports = {
  ...base, ...{
    mode: 'development',
    devtool: 'source-map',
  },
}
