const webpack = require("webpack");
// 引入这个插件，在最新版本中，它不在返回一个函数，而是返回一个对象，我们需要进行结构操作。
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-eval-module-source-map",
  devServer: {
    host: "localhost",
    port: "6060",
    open: true,
    hot: true,
    contentBase: "public",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
