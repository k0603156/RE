"use strict";
module.exports = (sequelize, DataTypes) => {
  const postread = sequelize.define(
    "postread",
    {
      ipHash: {
        type: DataTypes.STRING(100),
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      timestamps: true,
      paranoid: true,
    }
  );
  postread.associate = function (models) {
    postread.belongsTo(models.post, {
      onDelete: "CASCADE",
      onUpdate: "restrict",
    });
  };
  return postread;
};
