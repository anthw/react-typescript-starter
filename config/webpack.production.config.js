const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const parts = require('./webpack.parts')

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
      new CleanWebpackPlugin(),

      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
        chunkFilename: 'styles/[name].[contenthash].css',
      }),
    ],
  },
  parts.loadStyles({ extract: true }),
])

module.exports = { productionConfig }
