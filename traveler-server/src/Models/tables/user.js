"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(40)
      },
      userName: {
        allowNull: false,
        type: DataTypes.STRING(15)
      },
      cryptoPass: {
        allowNull: false,
        type: DataTypes.STRING(200)
      },
      salt: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      provider: {
        allowNull: false,
        type: DataTypes.STRING(10),
        defaultValue: "local"
      },
      snsId: {
        allowNull: true,
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
  user.associate = function(models) {
    user.hasMany(models.post);
  };
  return user;
};
