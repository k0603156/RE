const merge = require("webpack-merge");

module.exports = function(env) {
  const common = require(`./webpack.${env}.js`);
  return merge(common, {
    mode: process.env.NODE_ENV === "production" ? "production" : "development"
  });
};
