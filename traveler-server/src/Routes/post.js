const Router = require("express").Router();

Router.get("/", (req, res, next) => {
  res.send("ww");
});

Router.post("/", (req, res, next) => {
  res.status(201).send("ww");
});

Router.put("/", (req, res, next) => {});

Router.delete("/", (req, res, next) => {});

module.exports = Router;
