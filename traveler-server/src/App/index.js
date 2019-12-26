const Application = require("./application");
const model = require("./model");

module.exports = new Application(model, ({ app, port, routes, middleware }) => {
  app.set("port", port);
  middleware.map(mw => app.use(mw));
  routes(app);
});
