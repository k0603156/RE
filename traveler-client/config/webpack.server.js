const nodeExternals = require("webpack-node-externals");
const path = require("path");
const paths = require("./paths");

module.exports = {
  target: "node",

  node: false, // it enables '__dirname' in files. If is not, '__dirname' always return '/'.

  entry: {
    server: paths.TravelerSSRIndexTs
  },

  output: {
    path: paths.TravelerBuild,
    filename: "[name].js",
    chunkFilename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"]
      }
    ]
  },

  externals: [nodeExternals()]
};
