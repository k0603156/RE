require("../env");
const jwt = require("jsonwebtoken");

module.exports.generateToken = email =>
  jwt.sign(
    {
      email
    },
    process.env.JWT_SECRET
  );
