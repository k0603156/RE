const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { randomBytes, scrypt } = require("crypto");
const { ValidationError, AuthenticationError } = require("./Error");

module.exports.generateRandomString = (buffSize = 64, encodeType = "base64") =>
  promisify(randomBytes)(buffSize)
    .then(
      (buff) =>
        new Promise((resolve) => {
          const salt = buff.toString(encodeType);
          resolve(salt);
        }),
    )
    .catch((error) => {
      throw new Error(error, 500, "fail generateString");
    });

module.exports.encryptString = (
  password,
  salt,
  keyLen = 64,
  encodeType = "base64",
) =>
  promisify(scrypt)(password, salt, keyLen)
    .then(
      (buff) =>
        new Promise((resolve) => {
          const key = buff.toString(encodeType);
          resolve(key);
        }),
    )
    .catch((error) => {
      throw new Error(error, 500, "fail encryptString");
    });

module.exports.generateToken = (email) =>
  jwt.sign(
    {
      email,
    },
    process.env.JWT_SECRET,
  );

module.exports.isAuthenticated = (req, res, next) => {
  if (!req.user) {
    throw new AuthenticationError("로그인이 필요한 요청입니다.");
  } else {
    next();
  }
};

module.exports.setDefQueryParams = (defParams) => (req, res, next) => {
  Object.keys(defParams).map((key) => {
    req.query[key] ? null : (req.query[key] = defParams[key]);
  });
  next();
};

module.exports.hasBodyParams = (...checkList) => (req, res, next) => {
  const data = req.body;
  checkList.reduce((obj, key) => {
    if (
      !data.hasOwnProperty(key) ||
      data[key] === null ||
      data[key] === undefined ||
      data[key] === ""
    ) {
      throw new ValidationError(`요청 된 값에 ${key}가 없습니다.`);
    } else {
      obj[key] = data[key];
      return obj;
    }
  }, {});
  next();
};
