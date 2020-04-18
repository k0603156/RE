const Router = require("express").Router();
const UserService = require("../Services/userService");

const { checkBodyParams, isAuthenticated } = require("../Utils");

//회원정보
Router.get("/:userName", UserService.getUser);

//회원가입
Router.post(
  "/",
  checkBodyParams("userName", "email", "password", "confirmPassword"),
  UserService.signup
);

//회원정보 수정
Router.patch(
  "/",
  isAuthenticated,
  checkBodyParams("userName", "password", "confirmPassword"),
  UserService.updateUser
);

//탈퇴
Router.delete("/", isAuthenticated, UserService.deleteUser);

module.exports = Router;
