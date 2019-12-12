const userRouter = require("./user");
const postRouter = require("./post");
const authRouter = require("./auth");
const API_URL = "/api/v1"; //임시 versioning
const apiPath = path => API_URL + path;

module.exports = [
  {
    path: apiPath("/auth"),
    router: authRouter
  },
  {
    path: apiPath("/user"),
    router: userRouter
  },
  {
    path: apiPath("/post"),
    router: postRouter
  }
];
