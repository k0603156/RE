const merge = require("webpack-merge");
const paths = require("./paths");
const modules = require("./modules");

module.exports = function(env) {
  const common = require(`./webpack.${env}.js`);
  return merge(common, {
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    resolve: {
      extensions: paths.moduleFileExtensions,
      alias: {
        ...(modules.webpackAliases || {})
      }
    }
  });
};
