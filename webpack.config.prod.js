/* eslint-disable */

const path = require('path')
const node_modules = path.resolve(__dirname, 'node_modules')
const pathToReact = path.resolve(node_modules, 'react/dist/react.min.js')

module.exports = {

  entry: path.resolve(__dirname, './src/index.js'),

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
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
        use: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader?name=images/[name].[ext]',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      }
    ],
    noParse: [pathToReact]
  },
}
