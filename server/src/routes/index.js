const userRouter = require("./user");
const postRouter = require("./post");
const authRouter = require("./auth");
module.exports = [
  {
    path: "/api/user",
    router: userRouter
  },
  {
    path: "/api/post",
    router: postRouter
  },
  {
    path: "/api/auth",
    router: authRouter
  }
];
