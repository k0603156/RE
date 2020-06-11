const store = require("./store");

module.exports = (request) => ({
  join: (payload) =>
    request
      .post("/api/v1/user")
      .set("Accept", "application/json")
      .send(payload),
  login: (payload) =>
    request
      .post("/api/v1/auth/authenticate")
      .set("Accept", "application/json")
      .send(payload),
  userUpdate: (payload) =>
    request
      .patch("/api/v1/user")
      .set("Accept", "application/json")
      .set("Authorization", `bearer ${store.getToken()}`)
      .send(payload),
});
