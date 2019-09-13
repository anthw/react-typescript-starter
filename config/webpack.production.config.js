const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const parts = require('./webpack.parts')

const projectRoot = path.resolve(__dirname, '..')

const productionConfig = merge([
  {
    mode: 'production',
    entry: {
      app: ['./src/app/App.tsx'],
    },
    output: {
      filename: 'js/[name].[contenthash].bundle.js',
      chunkFilename: 'js/[name].[chunkhash].bundle.js',
    },
    devtool: 'hidden-source-map',
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(projectRoot, 'src', 'app', 'index.html')
      }),

      new CleanWebpackPlugin(),

      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
        chunkFilename: 'styles/[name].[contenthash].css',
      }),
    ]
  },
  parts.loadStyles({ extract: true }),
])

module.exports = { productionConfig }