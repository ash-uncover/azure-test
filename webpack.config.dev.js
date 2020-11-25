/* eslint-disable */

const path = require('path')
const dist = path.resolve(__dirname, 'dist')
const node_modules = path.resolve(__dirname, 'node_modules')
const pathToReact = path.resolve(node_modules, 'react/dist/react.min.js')

module.exports = {

  entry: path.resolve(__dirname, './src/index.js'),

  devtool: 'source-map',

  output: {
    path: dist,
    filename: '[name].bundle.js'
  },

  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    port: 8080,
    disableHostCheck: true
  },

  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx']
  },

  plugins: [],

  module: {
    rules: [
      {
        test: /.(jsx|js)$/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      // https://webpack.js.org/guides/asset-management/#loading-images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]'
        }
      }
    ],
    noParse: [pathToReact]
  },
}
