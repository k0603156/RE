const Router = require("express").Router();
const Models = require("../Models/tables");

Router.get("/", (req, res, next) => {
  res.send("Get Post");
});

Router.post("/", async (req, res, next) => {
  try {
    const result = await Models.post.create(
      {
        userId: req.user.id,
        content: [...req.body.content]
      }
      // { include: [Models.story] }
    );

    result && res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
});

Router.put("/", (req, res, next) => {});

Router.delete("/", (req, res, next) => {});

module.exports = Router;
