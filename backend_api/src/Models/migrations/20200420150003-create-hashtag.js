"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "hashtags",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          unique: true,
          allowNull: false,
          type: Sequelize.STRING(30),
        },
      },
      {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        timestamps: false,
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("hashtags");
  },
};
