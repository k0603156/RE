const Router = require("express").Router();
const Models = require("../Models/tables");
const { NotFoundError } = require("../Utils/Error");

Router.get("/:pid", async (req, res, next) => {
  try {
    const result = await Models.post.findOne({
      include: [
        {
          model: Models.user,
          attributes: ["userName"]
        }
      ],
      where: { id: req.params.pid },
      attributes: ["id", "title", "content", "updatedAt"]
    });
    if (result) {
      res.status(200).json({ success: true, response: result });
    } else {
      throw new NotFoundError("해당글이 없습니다.");
    }
  } catch (error) {
    next(error);
  }
});

Router.get("/list/:page", async (req, res, next) => {
  try {
    const offset = 5 * (req.params.page - 1);
    const result = await Models.post.findAll({
      include: [
        {
          model: Models.user,
          attributes: ["userName"]
        }
      ],
      offset,
      limit: 5,
      attributes: ["id", "title", "content", "updatedAt"]
    });
    if (result) {
      res.status(200).json({ success: true, response: result });
    } else {
      throw new NotFoundError("가져올 글이 없습니다.");
    }
    // : res.status(404).json({ success: false });
  } catch (error) {
    next(error);
  }
});

Router.post("/", async (req, res, next) => {
  try {
    const result = await Models.post.create(
      {
        userId: req.user.id,
        title: req.body.title,
        content: [...req.body.content]
      }
      // { include: [Models.story] }
    );
    result &&
      res.status(201).json({
        success: true,
        response: {
          id: result.dataValues.id
        }
      });
  } catch (error) {
    next(error);
  }
});

Router.patch("/", async (req, res, next) => {
  try {
    const result = await Models.post.update(
      {
        title: req.body.title,
        content: [...req.body.content]
      },
      {
        where: { id: req.body.pid }
      }
    );
    result &&
      res.status(201).json({
        success: true
      });
  } catch (error) {
    next(error);
  }
});

Router.delete("/", async (req, res, next) => {
  try {
    const result = await Models.post.destroy({
      where: { id: req.body.pid }
    });
    if (result) {
      res.status(200).json({
        success: true
      });
    } else {
      res.status(404).json({
        success: false
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
