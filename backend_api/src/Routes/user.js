const Router = require("express").Router();
const UserService = require("../Services/userService");
const PostService = require("../Services/postService");
const { checkProps, isAuthenticated } = require("../Utils");

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
Router.post(
  "/",
  checkProps("userName", "email", "password", "confirmPassword"),
  UserService.signup
);

//회원정보 수정
Router.patch(
  "/",
  isAuthenticated,
  checkProps("userName", "password", "confirmPassword"),
  UserService.updateUser
);

//탈퇴
Router.delete("/", checkProps("id"), UserService.deleteUser);

module.exports = Router;
