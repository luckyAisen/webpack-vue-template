const path = require("path");
const { merge } = require("webpack-merge");
const commmon = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");
module.exports = merge(commmon, {
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin(), new copyPlugin(["public"])],
});
