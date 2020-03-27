const Router = require("express").Router();
const { checkProps, isAuthenticated } = require("../Utils");
const Models = require("../Models/tables");

Router.get("/", async (req, res, next) => {
  const result = await Models.board.findAll({
    attributes: ["name"]
  });
  res.status(200).json({ success: true, response: result });
});

module.exports = Router;
