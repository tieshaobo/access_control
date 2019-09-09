
const path = require('path')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  lintOnSave: true,
  publicPath: '/',
  devServer: {
      open:true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/style/global.scss')
      ]
    }
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              // warnings: false,
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']
            }
          }
        })
      ]
    }
  }
}
