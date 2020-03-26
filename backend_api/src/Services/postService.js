const Models = require("../Models/tables");
const { Op } = require("sequelize");
const { NotFoundError } = require("../Utils/Error");

module.exports.getPostListByHashtag = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit);
    const offset = limit * (req.query.page - 1);
    const result = await Models.post.findAndCountAll({
      include: [
        {
          model: Models.hashtag,
          as: "hashtags",
          separate: false,
          attributes: ["name"],
          duplicating: false
        },
        {
          model: Models.user,
          attributes: ["userName"]
        }
      ],
      attributes: ["id", "title", "updatedAt"],
      where: { "$hashtags.name$": req.params.hashtag },
      offset,
      limit
    });
    if (!result.count)
      throw new NotFoundError("해당 태그에 맞는 글이 없습니다.");
    res.status(200).json({ success: true, response: result });
  } catch (error) {
    next(error);
  }
};

module.exports.getPostListByUser = async userId => {
  const result = await Models.post.findAll({
    where: { userId },
    attributes: ["id", "title"]
  });
  return result;
};

module.exports.getPostDetail = async (req, res, next) => {
  try {
    const result = await Models.post.findOne({
      include: [
        {
          model: Models.user,
          attributes: ["userName"]
        },
        {
          model: Models.hashtag,
          as: "hashtags",
          attributes: ["name"]
        }
      ],
      where: { id: req.params.pid },
      attributes: ["id", "title", "content", "updatedAt"]
    });

    if (!result) throw new NotFoundError("해당글이 없습니다.");
    res.status(200).json({ success: true, response: result });
  } catch (error) {
    next(error);
  }
};

module.exports.getPostList = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit);
    const offset = limit * (req.query.page - 1);
    const result = await Models.post.findAndCountAll({
      include: [
        {
          model: Models.user,
          attributes: ["userName"]
        },
        {
          model: Models.hashtag,
          attributes: ["name"]
        }
      ],
      offset,
      limit,
      attributes: ["id", "title", "updatedAt"]
    });
    if (!result.count) throw new NotFoundError("가져올 글이 없습니다.");
    res.status(200).json({ success: true, response: result });
  } catch (error) {
    next(error);
  }
};

module.exports.createPost = async (req, res, next) => {
  try {
    const result = await Models.sequelize.transaction(async transaction => {
      const existTags = await Models.hashtag.findAll({
        where: {
          name: { [Op.in]: [...req.body.hashtags.map(_ => _.name)] }
        },
        attributes: ["id", "name"],
        transaction
      });

      const existTagsArr = attr => existTags.map(_ => _.dataValues[attr]);

      const createdPost = await Models.post.create(
        {
          userId: req.user.id,
          title: req.body.title,
          content: [...req.body.content],
          hashtags: existTagsArr("name").length
            ? req.body.hashtags.filter(
                _ => !existTagsArr("name").includes(_.name)
              )
            : req.body.hashtags
        },
        {
          include: [
            {
              model: Models.hashtag
            }
          ],
          transaction
        }
      );

      if (existTags.length) {
        await createdPost.addHashtag(existTagsArr("id"), { transaction });
      }
      return createdPost;
    });

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
};

module.exports.updatePost = async (req, res, next) => {
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
};

module.exports.deletePost = async (req, res, next) => {
  try {
    const toDeletePost = {
      where: { id: req.body.pid }
    };
    const result = await Models.post.destroy(toDeletePost);
    if (!result) throw new NotFoundError("해당하는 글이 없습니다.");
    res.status(200).json({
      success: true
    });
  } catch (error) {
    next(error);
  }
};
