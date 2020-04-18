const Router = require("express").Router();
const PostService = require("../Services/postService");
const { defaultPagingParams, checkProps } = require("../Utils");

Router.get("/list", defaultPagingParams, PostService.getPostList);

Router.get(
  "/list/byhashtag/:hashtag",
  defaultPagingParams,
  PostService.getPostListByHashtag
);

Router.get("/:pid", PostService.getPostDetail);

Router.post(
  "/",
  checkProps("title", "boardId", "content", "hashtags"),
  PostService.createPost
);

Router.patch("/", PostService.updatePost);

Router.delete("/", PostService.deletePost);

module.exports = Router;
