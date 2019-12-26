class Application {
  app;
  constructor(model, callback) {
    this.app = model.app;
    callback.call(this, model);
  }
}
module.exports = Application;
