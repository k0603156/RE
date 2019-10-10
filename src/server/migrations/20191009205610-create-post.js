module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fromDate: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      toDate: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mainImage: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Posts');
  }
};