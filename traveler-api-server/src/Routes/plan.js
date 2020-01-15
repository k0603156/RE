const Router = require("express").Router();
const Models = require("../Models/tables");

Router.get("/", (req, res, next) => {
  res.send("ww");
});

Router.post("/", async (req, res, next) => {
  try {
    const { header, storyArr } = req.body.plan;
    const result = await Models.plan.create(
      { ...header, stories: [...storyArr] },
      { include: [Models.story] }
    );

    result && res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

Router.put("/", (req, res, next) => {});

Router.delete("/", (req, res, next) => {});

module.exports = Router;
