const router = require("express").Router();
const { user } = require("../Models/tables");
const {
  generateRandomString,
  encryptString,
  createErr,
  checkReqContain
} = require("../Utils");
const ENCRYPT_BUFF = 64;
const ENCODE_TYPE = "base64";

//Todo:수정필요

router.get("/", (req, res, next) => {
  res.json(req.params.id);
});

router.get("/:id", async (req, res, next) => {
  try {
    const exUser = await user.findOne({
      where: { id: req.params.id, deleteAt: null },
      attributes: ["id", "userName"]
    });
    res.status(200).json(exUser);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { userName, email, password, confirmPassword } = checkReqContain(
      req.body,
      "userName",
      "email",
      "password",
      "confirmPassword"
    );
    const exUser = await user.findOne({ where: { email } });
    if (exUser) next(createErr(400, "이미 가입된 이메일"));
    const salt = await generateRandomString(ENCRYPT_BUFF, ENCODE_TYPE);
    const cryptoPass = await encryptString(password, salt);
    const result = await user.create({
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

router.put("/", async (req, res, next) => {
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
    const sucess = user.update(
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

router.delete("/", (req, res, next) => {
  try {
    const { id } = checkReqContain(req.body, "id");
    const sucess = user.destroy({
      where: { id }
    });
    res.status(204).json(sucess);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
