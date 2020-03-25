const Models = require("../Models/tables");
const { Op } = require("sequelize");

module.exports.getPostListByHashtag = async req => {
  const limit = parseInt(req.query.limit) || 5;
  const offset = req.query.page ? limit * (req.query.page - 1) : 0;
  const result = await Models.post.findAll({
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

  return result;
};

module.exports.getPostListByUser = async userId => {
  const result = await Models.post.findAll({
    where: { userId },
    attributes: ["title"]
  });
  return result;
};

module.exports.getPostDetail = async req => {
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
  return result;
};

module.exports.getPostList = async req => {
  const limit = parseInt(req.query.limit) || 5;
  const offset = req.query.page ? limit * (req.query.page - 1) : 0;
  const result = await Models.post.findAll({
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
  return result;
};

module.exports.createPost = async req => {
  return await Models.sequelize.transaction(async transaction => {
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
};

module.exports.updatePost = async req => {
  const result = await Models.post.update(
    {
      title: req.body.title,
      content: [...req.body.content]
    },
    {
      where: { id: req.body.pid }
    }
  );
  return result;
};

module.exports.deletePost = async req => {
  const result = await Models.post.destroy({
    where: { id: req.body.pid }
  });
  return result;
};
