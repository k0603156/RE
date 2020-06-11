// / 정의: name, super: message, 제외: stack
// eslint-disable-next-line max-classes-per-file
class BaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "TravelerBaseError";
    Error.captureStackTrace(this, this.constructor);
  }
}
// 유효성오류
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "TravelerValidationError";
    Error.captureStackTrace(this, this.constructor);
  }
}

// 인증오류
class AuthenticationError extends Error {
  constructor(error) {
    super(error.message);
    this.name = "TravelerAuthenticationError";
    Error.captureStackTrace(this, this.constructor);
  }
}
// 권한부여오류
class AuthorizationError extends Error {
  constructor(error) {
    super(error.message);
    this.name = "TravelerAuthorizationError";
    Error.captureStackTrace(this, this.constructor);
  }
}
// 리소스NotFound오류
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "TravelerNotFoundError";
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = {
  BaseError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
};
