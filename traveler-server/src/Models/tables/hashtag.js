"use strict";
module.exports = (sequelize, DataTypes) => {
  const hashtag = sequelize.define(
    "hashtag",
    {
      title: DataTypes.STRING(30)
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
      paranoid: true
    }
  );
  hashtag.associate = function(models) {
    hashtag.belongsToMany(models.plan, { through: "PlanHashtag" });
  };
  return hashtag;
};
