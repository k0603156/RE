const Router = require("express").Router();
const AuthService = require("../Services/authService");
const { checkProps, isAuthenticated } = require("../Utils");

Router.post(
  "/authenticate",
  checkProps("email", "password"),
  AuthService.authenticate
);

Router.post("/authorize", isAuthenticated, AuthService.authorize);

Router.post("/reauthorize", AuthService.reauthorize);

Router.post("/deauthorize", AuthService.deauthorize);

module.exports = Router;
