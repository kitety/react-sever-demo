const path = require("path");
// node_modules的文件不会被引入
const nodeExternals = require("webpack-node-externals");
var merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
/**
 * 服务器端不需要将path打包到bundle.js  浏览器就需要
 */
const serverConfig= {
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [nodeExternals()]
};
/**
 * Critical dependency: the request of a dependency is an expression
 * target虽然是node，引用的时候，包不会引入进文件，但是引用node_modules的时候，会引进来
 */
module.exports = merge(baseConfig, serverConfig);
