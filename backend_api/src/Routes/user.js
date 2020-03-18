const Router = require("express").Router();
const UserService = require("../Services/userService");
const PostService = require("../Services/postService");

Router.get("/:userName", async (req, res, next) => {
  try {
    const result = await UserService.findUser(req);
    const resultPost = await PostService.getPostListByUser(
      result.dataValues.id
    );
    res.status(200).json({
      success: true,
      response: {
        id: result.dataValues.id,
        userName: result.dataValues.userName,
        posts: resultPost
      }
    });
  } catch (error) {
    next(error);
  }
});

//회원가입
Router.post("/", async (req, res, next) => {
  try {
    const result = await UserService.signup(req);
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
    const result = await UserService.updateUser(req);
    res.status(200).json({
      success: true,
      response: result
    });
  } catch (error) {
    next(error);
  }
});

//탈퇴
Router.delete("/", async (req, res, next) => {
  try {
    const result = await UserService.deleteUser(req);
    res.status(204).json({
      success: true,
      response: result
    });
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
