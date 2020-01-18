const webpack = require("webpack");
const path = require("path");
const paths = require("./config/paths");

const hotMiddlewareScript = `webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true`;

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  entry: [hotMiddlewareScript, paths.TravelerClientIndexTs],

  output: {
    path: paths.TravelerBuild,
    filename: "[name].js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"]
      }
    ]
  },

  resolve: {
    extensions: [...paths.moduleFileExtensions]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
};
