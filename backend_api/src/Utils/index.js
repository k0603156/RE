const { ValidationError, AuthenticationError } = require("./Error");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { randomBytes, scrypt } = require("crypto");

module.exports.generateRandomString = (buffSize = 64, encodeType = "base64") =>
  promisify(randomBytes)(buffSize)
    .then((buff) => {
      return new Promise((resolve, reject) => {
        const salt = buff.toString(encodeType);
        resolve(salt);
      });
    })
    .catch((error) => {
      throw new Err(error, 500, "fail generateString");
    });

module.exports.encryptString = (
  password,
  salt,
  keyLen = 64,
  encodeType = "base64"
) =>
  promisify(scrypt)(password, salt, keyLen)
    .then((buff) => {
      return new Promise((resolve, reject) => {
        const key = buff.toString(encodeType);
        resolve(key);
      });
    })
    .catch((error) => {
      throw new Err(error, 500, "fail encryptString");
    });

module.exports.generateToken = (email) =>
  jwt.sign(
    {
      email,
    },
    process.env.JWT_SECRET
  );

module.exports.isAuthenticated = (req, res, next) => {
  if (!req.user) {
    throw new AuthenticationError("로그인이 필요한 요청입니다.");
  } else {
    next();
  }
  return;
};

module.exports.defaultPagingParams = (req, res, next) => {
  if (!req.query.limit) req.query.limit = 5;
  if (!req.query.page) req.query.page = 1;
  next();
};

module.exports.checkProps = (...checkList) => {
  return (req, res, next) => {
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
};
