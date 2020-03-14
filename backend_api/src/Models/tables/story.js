"use strict";
module.exports = (sequelize, DataTypes) => {
  const story = sequelize.define(
    "story",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING(100),
        defaultValue: ""
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.fn("NOW")
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING(100),
        defaultValue: ""
      },
      image: {
        type: DataTypes.STRING(200)
      }
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      timestamps: true,
      paranoid: true
    }
  );
  story.associate = models => {
    story.belongsTo(models.plan);
  };
  return story;
};
