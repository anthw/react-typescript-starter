const merge = require('webpack-merge')

const { commonConfig } = require('./config/webpack.common.config')
const { developmentConfig } = require('./config/webpack.development.config')
const { productionConfig } = require('./config/webpack.production.config')

/**
 * env gets set via the command line, e.g. webpack --env production
 * Used in package.json scripts
 */
module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig)
  }

  return merge(commonConfig, developmentConfig)
}
