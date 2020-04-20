"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING(40),
        },
        userName: {
          allowNull: false,
          type: Sequelize.STRING(15),
        },
        cryptoPass: {
          allowNull: false,
          type: Sequelize.STRING(200),
        },
        salt: {
          allowNull: false,
          type: Sequelize.STRING(100),
        },
        provider: {
          allowNull: false,
          type: Sequelize.STRING(10),
          defaultValue: "local",
        },
        snsId: {
          allowNull: true,
          type: Sequelize.STRING(100),
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
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
    return queryInterface.dropTable("users");
  },
};
