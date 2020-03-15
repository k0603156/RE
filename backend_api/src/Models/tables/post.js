"use strict";
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "post",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      content: {
        allowNull: false,
        type: DataTypes.JSON
      }
      // createdDate: {
      //   allowNull: false,
      //   type: DataTypes.DATE,
      //   defaultValue: sequelize.fn("NOW")
      // }
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      timestamps: true,
      paranoid: true
    }
  );
  post.associate = function(models) {
    post.belongsTo(models.user);
    // post.belongsTo(models.board);
    // post.hasMany(models.story);
    // post.belongsToMany(models.hashtag, { through: "PlanHashtag" });
  };
  return post;
};
