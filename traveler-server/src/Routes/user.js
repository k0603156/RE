const Router = require("express").Router();
const { user: UserModel } = require("../Models/tables");
const {
  generateRandomString,
  encryptString,
  createErr,
  checkReqContain
} = require("../Utils");
const ENCRYPT_BUFF = 64;
const ENCODE_TYPE = "base64";

//Todo:수정필요
Router.get("/", async (req, res, next) => {
  res.status(200).json({ data: "user" });
});

Router.get("/:id", async (req, res, next) => {
  try {
    const exUser = await UserModel.findOne({
      where: { id: req.params.id },
      attributes: ["id", "userName"]
    });
    res.status(200).json(exUser);
  } catch (error) {
    next(error);
  }
});

//회원가입
Router.post("/", async (req, res, next) => {
  try {
    const { userName, email, password, confirmPassword } = checkReqContain(
      req.body,
      "userName",
      "email",
      "password",
      "confirmPassword"
    );
    const exUser = await UserModel.findOne({ where: { email } });
    if (exUser) next(createErr(400, "이미 가입된 이메일"));
    const salt = await generateRandomString(ENCRYPT_BUFF, ENCODE_TYPE);
    const cryptoPass = await encryptString(password, salt);
    const result = await UserModel.create({
      email,
      userName,
      cryptoPass,
      salt
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

//회원정보 수정
Router.put("/", async (req, res, next) => {
  try {
    const { id, userName, password, confirmPassword } = checkReqContain(
      req.body,
      "id",
      "userName",
      "password",
      "confirmPassword"
    );
    const salt = await generateRandomString(ENCRYPT_BUFF, ENCODE_TYPE);
    const cryptoPass = await encryptString(password, salt);
    const sucess = UserModel.update(
      {
        userName,
        cryptoPass,
        salt
      },
      { where: { id } }
    );
    res.status(200).json(sucess);
  } catch (error) {
    next(error);
  }
});

//탈퇴
Router.delete("/", async (req, res, next) => {
  try {
    const { id } = checkReqContain(req.body, "id");
    const sucess = UserModel.destroy({
      where: { id }
    });
    res.status(204).json(sucess);
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
