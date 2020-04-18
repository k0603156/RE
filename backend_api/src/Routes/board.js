const Router = require("express").Router();
const { defaultPagingParams } = require("../Utils");
const PostService = require("../Services/postService");
const Models = require("../Models/tables");

Router.get("/boardlist", async (req, res, next) => {
  const result = await Models.board.findAll({
    attributes: ["id", "name"],
  });
  res.status(200).json({ success: true, response: result });
});

Router.get(
  "/:boardId/posts",
  defaultPagingParams,
  PostService.getPostListByBoardnViews
);

module.exports = Router;
