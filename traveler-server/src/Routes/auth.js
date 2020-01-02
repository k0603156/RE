const Router = require("express").Router();
const { user: UserModel } = require("../Models/tables");
const {
  checkReqContain,
  encryptString,
  generateToken,
  isAuthenticated
} = require("../Utils");

//로그인 토큰발행
Router.post("/authenticate", async (req, res, next) => {
  try {
    const { email, password } = checkReqContain(req.body, "email", "password");
    const exUser = await UserModel.findOne({
      where: {
        email
      }
    });
    const { salt, cryptoPass } = await exUser.dataValues;
    const loginPassword = await encryptString(password, salt);
    if (loginPassword == cryptoPass) {
      res.send(generateToken(email));
    } else {
      res.send("Sorry, SignIn failed");
    }
  } catch (error) {
    next(error);
  }
});

Router.post("/authorize", isAuthenticated, (req, res, next) => {
  try {
    res.status(200).send("OTP인증");
  } catch (error) {
    next(error);
  }
});

Router.post("/reauthorize", (req, res, next) => {
  try {
    res.status(200).send("JWT토큰갱신");
  } catch (error) {
    next(error);
  }
});

Router.post("/deauthorize", (req, res, next) => {
  try {
    res.status(200).send("로그아웃");
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
