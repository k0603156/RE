"use strict";
module.exports = (sequelize, DataTypes) => {
  const plan = sequelize.define(
    "plan",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING(30)
      },
      fromDate: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.fn("NOW")
      },
      toDate: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.fn("NOW")
      },
      mainBody: {
        allowNull: false,
        type: DataTypes.STRING(100)
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
  plan.associate = function(models) {
    plan.belongsTo(models.user);
    plan.belongsTo(models.board);
    plan.hasMany(models.story);
    plan.belongsToMany(models.hashtag, { through: "PlanHashtag" });
  };
  return plan;
};
