"use strict";
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "post",
    {
      country: {
        allowNull: false,
        type: DataTypes.STRING(30)
      },
      fromDate: {
        allowNull: false,
        type: DataTypes.DATEONLY
      },
      toDate: {
        allowNull: false,
        type: DataTypes.DATEONLY
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      mainImage: {
        type: DataTypes.STRING(200)
      }
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
      paranoid: true
    }
  );
  post.associate = function(models) {
    post.belongsTo(models.user);
    post.hasMany(models.content);
    post.belongsToMany(models.hashtag, { through: "PostHashtag" });
    // Post.hasMany(models.Content, {
    //   foreignKey: "postId",
    //   sourceKey: "id",
    //   as: "contentOfpost"
    // });
  };
  return post;
};
