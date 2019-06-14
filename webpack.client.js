const path = require("path");
var merge = require("webpack-merge");
const baseConfig =require('./webpack.base.js')
const clientConfig= {
  mode :'development',
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public")
  }
}
/**
 * 服务器端不需要将path打包到bundle.js  浏览器就需要
 */
module.exports = merge(baseConfig, clientConfig);
