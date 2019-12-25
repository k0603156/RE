class Err extends Error {
  status;
  message;
  constructor(status, message, stack) {
    super(stack);
    this.status = status;
    this.message = message;
    // Object.setPrototypeOf(this, new.target.prototype);
    // Object.setPrototypeOf(this, Err.prototype);
  }
}
module.exports = Err;
