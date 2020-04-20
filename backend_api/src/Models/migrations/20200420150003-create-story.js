"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "stories",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING(100),
          defaultValue: "",
        },
        date: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn("NOW"),
        },
        content: {
          allowNull: false,
          type: Sequelize.STRING(100),
          defaultValue: "",
        },
        image: {
          allowNull: true,
          type: Sequelize.STRING(200),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        timestamps: true,
        paranoid: true,
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("stories");
  },
};
