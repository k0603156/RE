const webpack = require("webpack");
const path = require("path");
const paths = require("./paths");

const hotMiddlewareScript = `webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true`;
const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || "10000"
);

module.exports = {
  entry: [hotMiddlewareScript, paths.TravelerClientIndexTs],

  output: {
    path: paths.TravelerBuild,
    filename: "[name].js",
    publicPath: "/"
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader", "ts-loader"]
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
              limit: imageInlineSizeLimit,
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
};
