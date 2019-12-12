const router = require("express").Router();

/* GET user listing. */
router.get("/", function(req, res, next) {
  res.send("user");
});

module.exports = router;
