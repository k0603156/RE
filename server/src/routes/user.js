const router = require("express").Router();

/* /api/v1/user */
router.get("/", function(req, res, next) {
  res.send("회원정보");
});
router.post("/", function(req, res, next) {
  res.send("회원가입");
});
router.put("/", function(req, res, next) {
  res.send("정보변경");
});
router.delete("/", function(req, res, next) {
  res.send("회원탈퇴");
});
module.exports = router;
