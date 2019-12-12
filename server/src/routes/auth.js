const router = require("express").Router();

/* /api/v1/auth */
router.post("/authenticate", function(req, res, next) {
  res.send("로그인");
});
router.post("/authorize", function(req, res, next) {
  res.send("otp인증");
});
router.post("/reauthorize", function(req, res, next) {
  res.send("JWT토큰갱신");
});
router.post("/deauthorize", function(req, res, next) {
  res.send("refresh_token 제거");
});
module.exports = router;
