const Models = require("../Models/tables");
const { Op } = require("sequelize");

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
  return result;
};

module.exports.createPost = async req => {
  const result2 = await Models.hashtag.findAll({
    where: {
      name: { [Op.in]: [...req.body.hashtags.map(_ => _.name)] }
    },
    attributes: ["name"]
  });
  const existTags = result2.map(_ => _.dataValues);
  //! 수정
  console.log(
    [...req.body.hashtags].filter(_ => {
      return existTags.map(existTag => existTag.name != _.name) ? true : false;
    })
  );

  const result = await Models.post.create(
    {
      userId: req.user.id,
      title: req.body.title,
      content: [...req.body.content],
      hashtags: [...req.body.hashtags].filter(_ => _ != existTag.dataValues)
    },
    {
      include: [
        {
          model: Models.hashtag
        }
      ]
    }
  );

  // await result.addHashtag([...req.body.hashtags]);
  // const bi = [...req.body.hashtags].map(_ => result2_.name);
  // const result2 = await Models.hashtag.bulkInsert();
  // const tagIds = await Promise.all(uniqueTags.map(tag => Tag.getId(tag)));

  return result;
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
