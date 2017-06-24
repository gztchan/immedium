const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.base.config');

const devServerConfig = {
  host: 'localhost',
  port: '8080',
};

const dev = merge({}, base, {
  devtool: 'cheap-module-dev-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../assets'),
    publicPath: `http://${devServerConfig.host}:${devServerConfig.port}/assets/`,
  },
});

dev.plugins = dev.plugins.concat([
  new HtmlWebpackPlugin({
    filename: path.resolve(__dirname, '../html/app.dev.html'),
    template: path.resolve(__dirname, '../html/template.html'),
  }),
  new webpack.HotModuleReplacementPlugin(),
  new WriteFilePlugin({
    test: /\.html$/,
    log: false,
  }),
])

Object.keys(dev.entry).forEach((v) => {
  if (v !== 'vendor') {
    dev.entry[v] = [
      'react-hot-loader/patch',
      dev.entry[v],
      `webpack-dev-server/client?http://${devServerConfig.host}:${devServerConfig.port}`,
      'webpack/hot/dev-server',
    ];
  }
});

module.exports = {
  dev,
  devServerConfig,
};
