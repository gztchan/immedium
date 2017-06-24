const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');

module.exports = merge({}, base, {
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../assets'),
    publicPath: `/assets/`,
  }
});
