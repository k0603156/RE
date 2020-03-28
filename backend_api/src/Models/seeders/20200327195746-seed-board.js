"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "boards",
      [
        {
          name: "IT",
          createdAt: new Date()
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, ""),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, "")
        },
        {
          name: "디자인",
          createdAt: new Date()
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, ""),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, "")
        },
        {
          name: "일상",
          createdAt: new Date()
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, ""),
          updatedAt: new Date()
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, "")
        },
        {
          name: "여행",
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
