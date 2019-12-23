export default class Err extends Error {
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, new.target.prototype);
    // Object.setPrototypeOf(this, Err.prototype);
  }
  status: number;
}
