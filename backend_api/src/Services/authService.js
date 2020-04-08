const Models = require("../Models/tables");
const { AuthenticationError } = require("../Utils/Error");
const { encryptString, generateToken } = require("../Utils");

module.exports.authenticate = async (req, res, next) => {
  try {
    const reqEmail = req.body.email;
    const reqPassword = req.body.password;
    const resUser = await Models.user.findOne({
      where: {
        email: reqEmail,
      },
    });
    if (resUser && resUser.dataValues) {
      const { email, userName, salt, cryptoPass } = resUser.dataValues;
      const loginPassword = await encryptString(reqPassword, salt);
      if (loginPassword === cryptoPass) {
        res.status(200).json({
          success: true,
          response: { email, userName, token: generateToken(email) },
        });
      } else {
        throw new AuthenticationError("로그인실패");
      }
    } else {
      throw new AuthenticationError("로그인실패");
    }
  } catch (error) {
    next(error);
  }
};

module.exports.authorize = async (req, res, next) => {
  try {
    res.status(200).json({ success: "ok" });
  } catch (error) {
    next(error);
  }
};

module.exports.reauthorize = async (req, res, next) => {
  try {
    res.status(200).json({ success: "ok" });
  } catch (error) {
    next(error);
  }
};

module.exports.deauthorize = async (req, res, next) => {
  try {
    // const { email: resEmail } = checkProps(req.body, "email");
    res.status(200).json({ success: "ok" });
  } catch (error) {
    next(error);
  }
};
