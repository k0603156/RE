const webpack = require("webpack");
const path = require("path");
const paths = require("./paths");

const hotMiddlewareScript = `webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true`;

module.exports = {
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
