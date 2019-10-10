const models = require("../models");

module.exports.getUsers = () => {
  return models.User.findAll().then(users => JSON.stringify(users, null, 2));
}