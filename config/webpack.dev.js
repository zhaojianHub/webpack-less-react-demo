const path = require('path')
const base = require('./webpack.base.js')
const { merge } = require('webpack-merge')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist')
    },
    compress: true,
    hot: true,
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
})