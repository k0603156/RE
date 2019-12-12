const router = require("express").Router();

/* /api/v1/post */
router.get("/", function(req, res, next) {
  res.send("get postlist");
});
router.post("/", function(req, res, next) {
  res.send("create post");
});
router.put("/", function(req, res, next) {
  res.send("update post");
});
router.delete("/", function(req, res, next) {
  res.send("delete post");
});
module.exports = router;
