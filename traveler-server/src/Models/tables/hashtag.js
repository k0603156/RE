"use strict";
module.exports = (sequelize, DataTypes) => {
  const hashtag = sequelize.define(
    "hashtag",
    {
      title: DataTypes.STRING
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
      paranoid: true
    }
  );
  hashtag.associate = function(models) {
    hashtag.belongsToMany(models.Post, { through: "PostHashtag" });

    // associations can be defined here
  };
  return hashtag;
};
