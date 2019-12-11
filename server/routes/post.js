const router = require("express").Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resourcssess");
});

module.exports = router;
