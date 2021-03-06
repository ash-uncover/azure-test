/* eslint-disable */

const webpack = require('webpack')
const path = require('path')

const dir_build = path.resolve(__dirname, 'dist')
const dir_src = path.resolve(__dirname, 'src')
const node_modules = path.resolve(__dirname, 'node_modules')
const pathToReact = path.resolve(node_modules, 'react/dist/react.min.js')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Azure Test From Webpack',
    }),
    new webpack.EnvironmentPlugin({
      MY_ENV_VARIABLE: 'from webpack file'
    }),
  ],

  output: {
    path: dir_build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /.(jsx|js)$/,
        include: dir_src,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.(scss|css)$/i,
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
