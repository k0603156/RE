"use strict";
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const { database, username, password } = require("../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(database, username, password, config);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require("./user")(sequelize, Sequelize);
db.Post = require("./Post")(sequelize, Sequelize);

module.exports = db;
