"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(40)
      },
      userName: {
        allowNull: false,
        type: DataTypes.STRING(15)
      },
      criptoPass: {
        allowNull: false,
        type: DataTypes.STRING(200)
      },
      salt: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      provider: {
        allowNull: false,
        type: DataTypes.STRING(10),
        defaultValue: "local"
      },
      snsId: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
