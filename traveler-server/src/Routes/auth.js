const Router = require("express").Router();
const { user: UserModel } = require("../Models/tables");
const {
  checkProps,
  encryptString,
  generateToken,
  isAuthenticated
} = require("../Utils");

//로그인 토큰발행
Router.post("/authenticate", async (req, res, next) => {
  try {
    const { email: reqEmail, password: reqPassword } = checkProps(
      req.body,
      "email",
      "password"
    );
    const resUser = await UserModel.findOne({
      where: {
        email: reqEmail
      }
    });
    if (resUser && resUser.dataValues) {
      const { email, userName, salt, cryptoPass } = resUser.dataValues;

      const loginPassword = await encryptString(reqPassword, salt);

      if (loginPassword === cryptoPass) {
        res.status(200).json({ email, userName, token: generateToken(email) });
      } else {
        const error = new Error("로그인실패");
        error.status = 400;
        throw error;
      }
    } else {
      const error = new Error("로그인실패");
      error.status = 400;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});

Router.post("/authorize", isAuthenticated, (req, res, next) => {
  try {
    res.status(200).json({ success: "ok" });
  } catch (error) {
    next(error);
  }
});

Router.post("/reauthorize", (req, res, next) => {
  try {
    res.status(200).json({ success: "ok" });
  } catch (error) {
    next(error);
  }
});

Router.post("/deauthorize", (req, res, next) => {
  try {
    // const { email: resEmail } = checkProps(req.body, "email");
    res.status(200).json({ success: "ok" });
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
