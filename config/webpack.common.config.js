const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const parts = require('./webpack.parts')

const projectRoot = path.resolve(__dirname, '..')

const commonConfig = merge([
  {
    mode: 'development',
    entry: {
      react: ['react', 'react-dom']
    },
    output: {
      path: path.resolve(projectRoot, 'dist'),
      filename: 'js/[name].bundle.js',
      chunkFilename: 'js/[name].bundle.js',
    },
    devtool: 'source-map',
    optimization: {
      runtimeChunk: {
        name: 'runtime',
      }
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(projectRoot, 'src', 'app', 'index.html') }),
    ]
  },
  parts.loadTs(),
  parts.loadJs(),
])

module.exports = { commonConfig }
