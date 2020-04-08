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
    }
  );
  hashtag.associate = function (models) {
    hashtag.belongsToMany(models.post, {
      through: "PostHashtag",
      timestamps: false,
    });
  };
  return hashtag;
};
