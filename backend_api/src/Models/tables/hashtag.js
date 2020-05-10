/* eslint-disable strict */

"use strict";

module.exports = (sequelize, DataTypes) => {
  const hashtag = sequelize.define(
    "hashtag",
    {
      name: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false,
    },
  );
  hashtag.associate = ({ post }) => {
    hashtag.belongsToMany(post, {
      through: "PostHashtag",
      timestamps: false,
    });
  };
  return hashtag;
};
