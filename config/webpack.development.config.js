const webpack = require('webpack')
const merge = require('webpack-merge')

const parts = require('./webpack.parts')

const developmentConfig = merge([
  {
    entry: {
      app: ['./src/app/App.tsx', 'webpack-hot-middleware/client'],
    },
    devtool: 'eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  },
  parts.loadStyles(),
])

module.exports = { developmentConfig }
