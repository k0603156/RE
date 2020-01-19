const nodeExternals = require("webpack-node-externals");
const path = require("path");
const paths = require("./paths");
const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || "10000"
);
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
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
              emitFile: false,
              limit: imageInlineSizeLimit,
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },

  externals: [nodeExternals()]
};
