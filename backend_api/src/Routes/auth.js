const Router = require("express").Router();
const AuthService = require("../Services/authService");
const { hasBodyParams, isAuthenticated } = require("../Utils");

Router.post(
  "/authenticate",
  hasBodyParams("email", "password"),
  AuthService.authenticate,
);

Router.post("/authorize", isAuthenticated, AuthService.authorize);

Router.post("/reauthorize", AuthService.reauthorize);

Router.post("/deauthorize", AuthService.deauthorize);

module.exports = Router;
