/* eslint-disable strict */

"use strict";

module.exports = (sequelize, DataTypes) => {
  const board = sequelize.define(
    "board",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      timestamps: true,
      paranoid: true,
    },
  );

  board.associate = (models) => {
    board.hasMany(models.post);
  };

  return board;
};
