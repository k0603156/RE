"use strict";
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "post",
    {
      country: {
        allowNull: false,
        type: DataTypes.STRING
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
        type: DataTypes.STRING
      },
      mainImage: {
        type: DataTypes.STRING
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
    post.belongsTo(models.User);
    post.belongsToMany(models.Hashtag, { through: "PostHashtag" });
    // Post.hasMany(models.Content, {
    //   foreignKey: "postId",
    //   sourceKey: "id",
    //   as: "contentOfpost"
    // });
  };
  return post;
};
