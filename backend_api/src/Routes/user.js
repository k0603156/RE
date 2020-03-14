const Router = require("express").Router();
const UserService = require("../Services/userService");
const { checkProps } = require("../Utils");

Router.get("/", async (req, res, next) => {
  res.status(200).json({ data: "user" });
});

Router.get("/:userName", async (req, res, next) => {
  try {
    const result = await UserService.getUser(req);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

//회원가입
Router.post("/", async (req, res, next) => {
  try {
    const { userName, email, password, confirmPassword } = checkProps(
      req.body,
      "userName",
      "email",
      "password",
      "confirmPassword"
    );
    const result = await UserService.signup(
      userName,
      email,
      password,
      confirmPassword
    );

    result &&
      res.status(201).json({
        success: true
      });
  } catch (error) {
    next(error);
  }
});

//회원정보 수정
Router.put("/", async (req, res, next) => {
  try {
    const { id, userName, password, confirmPassword } = checkProps(
      req.body,
      "id",
      "userName",
      "password",
      "confirmPassword"
    );
    const result = await UserService.updateUser(
      id,
      userName,
      password,
      confirmPassword
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

//탈퇴
Router.delete("/", async (req, res, next) => {
  try {
    const result = await UserService.deleteUser(req);
    res.status(204).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
