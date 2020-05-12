const Router = require("express").Router();
const UserService = require("../Services/userService");
const { hasBodyParams, isAuthenticated } = require("../Utils");

// 회원정보
Router.get("/:userName", UserService.getUser);

// 회원가입
Router.post(
  "/",
  hasBodyParams("email", "userName", "password", "confirmPassword"),
  UserService.signup,
);

// 회원정보 수정
Router.patch(
  "/",
  isAuthenticated,
  hasBodyParams("userName", "password", "confirmPassword"),
  UserService.updateUser,
);

// 탈퇴
Router.delete("/", isAuthenticated, UserService.deleteUser);

module.exports = Router;
