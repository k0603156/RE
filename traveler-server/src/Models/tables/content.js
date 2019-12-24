"use strict";
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define(
    "content",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      body: {
        allowNull: false,
        type: DataTypes.STRING(100)
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
