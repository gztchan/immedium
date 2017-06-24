const webpack = require('webpack');
const { dev, devServerConfig } = require('./webpack.dev.config');

const WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(dev), {
  stats: {
    colors: true,
  },
  publicPath: dev.output.publicPath,
  hot: true, // 添加 hot 不需要 refresh 浏览器
  historyApiFallback: true,
}).listen(devServerConfig.port, 'localhost', (err, result) => {
  if (err) {
    return console.error(err);
  }
  console.info(`Listening at http://${devServerConfig.host}:${devServerConfig.port}/`);
});
