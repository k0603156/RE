const Router = require("express").Router();
const PostService = require("../Services/postService");
const { setDefQueryParams, hasBodyParams } = require("../Utils");

Router.get(
  "/list",
  setDefQueryParams({
    limit: 5,
    page: 1,
  }),
  PostService.getPostList
);

Router.get(
  "/list/byhashtag/:hashtag",
  setDefQueryParams({
    limit: 5,
    page: 1,
  }),
  PostService.getPostListByHashtag
);

Router.get("/:pid", PostService.getPostDetail);

Router.post(
  "/",
  hasBodyParams("title", "boardId", "content", "hashtags"),
  PostService.createPost
);

Router.patch("/", PostService.updatePost);

Router.delete("/", PostService.deletePost);

module.exports = Router;
