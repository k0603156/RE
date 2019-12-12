const router = require("express").Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("user");
});

module.exports = router;
