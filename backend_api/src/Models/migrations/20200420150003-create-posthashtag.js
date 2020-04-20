"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "posthashtag",
      {
        hashtagId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        postId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      },
      {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        timestamps: false,
        paranoid: false,
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("posthashtag");
  },
};
