module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userId: 1,
      country: '한국',
      fromDate: '2019-10-09',
      toDate: '2019-10-11',
      title: '통영, 진주, 전주 1박 2일 여유롭고 알찬 여행',
      mainImage: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};