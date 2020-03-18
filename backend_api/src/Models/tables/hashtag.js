"use strict";
module.exports = (sequelize, DataTypes) => {
  const hashtag = sequelize.define(
    "hashtag",
    {
      name: DataTypes.STRING(30)
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false
    }
  );
  hashtag.associate = function(models) {
    hashtag.belongsToMany(models.post, {
      through: "PostHashtag",
      timestamps: false
    });
  };
  return hashtag;
};
