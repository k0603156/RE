"use strict";
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define(
    "content",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      date: {
        allowNull: false,
        type: DataTypes.DATEONLY
      },
      body: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      image: {
        type: DataTypes.STRING(200)
      }
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
      paranoid: true
    }
  );
  content.associate = models => {
    content.belongsTo(models.post);
  };
  return content;
};
