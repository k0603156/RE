"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "boards",
      [
        {
          name: "test1",
          createdAt: new Date()
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, ""),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, "")
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("boards", null, {});
  }
};
