"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
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
      collate: "utf8_general_ci"
    }
  );
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: "userId",
      targetKey: "id"
    });
    Post.hasMany(models.Content, {
      foreignKey: "postId",
      sourceKey: "id",
      as: "contentOfpost"
    });
  };
  return Post;
};
