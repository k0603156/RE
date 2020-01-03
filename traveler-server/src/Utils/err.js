module.exports.createErr = (
  status = 500,
  message = "Internal Err",
  stack = null
) => new Err(status, message, stack);

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
