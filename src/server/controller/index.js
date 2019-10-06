const models = require("../models");

const getUsers = () => {
  return models.User.findAll().then(users => JSON.stringify(users, null, 2));
}
module.exports = {
  getUsers
}