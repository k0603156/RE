module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    note: {
      allowNull: false,
      type: DataTypes.STRING
    },
    images: {
      type: DataTypes.STRING
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'
  });
  Content.associate = function (models) {
    Content.belongsTo(models.Post, {
      foreignKey: 'postId',
      targetKey: 'id'
    });
    // Content.belongsTo(models.Post, {
    //   onDelete: "cascade",
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });

  };
  return Content;
};