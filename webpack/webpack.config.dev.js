process.env.NODE_ENV = 'development';

const { resolve } = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '..', 'dist/js'),
    publicPath: '/js/',
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new WriteFilePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader',],
        exclude: /node_modules/
      }
    ],
  }
};