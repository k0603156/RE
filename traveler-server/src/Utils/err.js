class Err extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, new.target.prototype);
    // Object.setPrototypeOf(this, Err.prototype);
  }
  status;
}
module.exports = Err;
