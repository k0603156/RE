"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      passkey: {
        allowNull: false,
        type: DataTypes.STRING
      },
      salt: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  );
  User.associate = function(models) {
    User.hasMany(models.Post, {
      foreignKey: "userId",
      sourceKey: "id",
      as: "userOfpost"
    });
  };
  return User;
};
