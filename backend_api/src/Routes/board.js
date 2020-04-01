const Router = require("express").Router();
const { checkProps, isAuthenticated } = require("../Utils");
const Models = require("../Models/tables");

Router.get("/boardlist", async (req, res, next) => {
  const result = await Models.board.findAll({
    attributes: ["id", "name"]
  });
  res.status(200).json({ success: true, response: result });
});

module.exports = Router;
