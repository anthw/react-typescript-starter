const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const compiler = webpack(webpackConfig())

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

if (app.get('env') === 'development') {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig().output.publicPath || '/',
      stats: { colors: true },
      writeToDisk: true,
    })
  )

  app.use(webpackHotMiddleware(compiler))
}

app.use(express.static(path.resolve(__dirname, 'dist')))
