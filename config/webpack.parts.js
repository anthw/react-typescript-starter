const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.loadTs = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include,
        exclude,
        loader: 'ts-loader'
      },
    ]
  },
})

exports.loadJs = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include,
        exclude,
        loader: 'source-map-loader'
      },
    ]
  },
})

exports.loadStyles = ({ include, exclude, extract } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: [
          extract ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ],
      }
    ]
  },
})