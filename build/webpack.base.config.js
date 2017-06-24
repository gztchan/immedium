const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../app/index.js'),
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'axios',
    ],
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(eot|ttc|ttf|woff|woff2)(\?\S*)?$/,
      //   use: ['file-loader'],
      // },
      // {
      //   test: /\.(png|jpe?g|gif)(\?\S*)?$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]?[hash]',
      //   },
      // },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
    }),
  ],
};
