const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const parts = require('./webpack.parts')

const projectRoot = path.resolve(__dirname, '..')

const commonConfig = merge([
  {
    output: {
      path: path.resolve(projectRoot, 'dist'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: {
        name: 'runtime',
      },
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(projectRoot, 'src', 'app', 'index.html'),
      }),
    ],
  },
  parts.loadTs(),
  parts.loadJs(),
])

module.exports = { commonConfig }
