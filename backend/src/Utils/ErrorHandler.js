const {
  ValidationError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
  BaseError,
} = require("./Error");

const isProduction = process.env.NODE_ENV === "production";

// Todo:에러처리를 어떤식으로 해야할까
/**
 * @ValidationError
 * @유효성오류
 * @요청값체크
 */
function handleValidateError(error, req, res, next) {
  if (error instanceof ValidationError) {
    res.status(400).json({
      type: "ValidationError",
      message: error.message,
    });
  } else {
    next(error);
  }
}
/**
 * @AuthenticationError
 * @검증오류
 * @로그인
 */
function handleAuthenticateError(error, req, res, next) {
  if (error instanceof AuthenticationError) {
    res.status(401).json({
      type: "AuthenticationError",
      message: error.message,
    });
  } else {
    next(error);
  }
}

/**
 * @AuthorizationError
 * @권한오류
 */
function handleAuthorizationError(error, req, res, next) {
  if (error instanceof AuthorizationError) {
    res.status(403).json({
      type: "AuthorizationError",
      message: error.message,
    });
  } else {
    next(error);
  }
}

/**
 * @NotFoundError
 * @resourceNotFound
 */
function handleNotFoundError(error, req, res, next) {
  if (error instanceof NotFoundError) {
    res.status(404).json({
      type: "NotFoundError",
      message: error.message,
    });
  } else {
    next(error);
  }
}

/**
 * @BaseError
 */
function handleBaseError(error, req, res, next) {
  if (error instanceof BaseError) {
    res.status(400).json({
      success: false,
      response: {
        type: "BaseError",
        message: error.message,
      },
    });
  } else {
    next(error);
  }
}
/**
 * @DefalultError
 */
//* 임시 에러 핸들링*//
function handleDefalultError(error, req, res) {
  const requestError = isProduction ? {} : error;
  requestError.status = error.status || 500;
  if (requestError.status < 500) {
    res.status(requestError.status).json({ message: requestError.message });
  } else {
    // TODO:로그남기기
  }
}
module.exports = [
  handleValidateError,
  handleAuthenticateError,
  handleAuthorizationError,
  handleNotFoundError,
  handleBaseError,
  handleDefalultError,
];
