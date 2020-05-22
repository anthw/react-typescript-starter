const webpack = require('webpack')
const merge = require('webpack-merge')

const parts = require('./webpack.parts')

const developmentConfig = merge([
  {
    mode: 'development',
    entry: {
      app: ['./src/app/App.tsx', 'webpack-hot-middleware/client'],
    },
    output: {
      filename: 'js/[name].bundle.js',
      chunkFilename: 'js/[name].bundle.js',
    },
    devtool: 'eval-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()],
  },
  parts.loadStyles(),
])

module.exports = { developmentConfig }
