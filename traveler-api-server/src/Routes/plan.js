const Router = require("express").Router();
const Models = require("../Models/tables");

Router.get("/", (req, res, next) => {
  res.send("GET PLAN");
});
Router.post("/", async (req, res, next) => {
  try {
    const result = await Models.plan.create(
      {
        ...req.body.plan.header,
        userId: req.user.id,
        stories: [...req.body.plan.storyArr]
      },
      { include: [Models.story] }
    );

    result && res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
});

Router.put("/", (req, res, next) => {});

Router.delete("/", (req, res, next) => {});

module.exports = Router;
