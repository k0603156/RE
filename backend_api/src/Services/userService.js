const { user } = require("../Models/tables");
const { NotFoundError } = require("../Utils/Error");
const { generateRandomString, encryptString } = require("../Utils");
const ENCRYPT_BUFF = 64;
const ENCODE_TYPE = "base64";

const PostService = require("../Services/postService");

module.exports.getUser = async (req, res, next) => {
  try {
    const existUser = await user.findOne({
      where: { userName: req.params.userName },
      attributes: ["id", "userName"]
    });

    if (!existUser) {
      throw new NotFoundError("해당 사용자를 찾을 수 없습니다.");
    }

    const resultPost = await PostService.getPostListByUser(
      existUser.dataValues.id
    );
    res.status(200).json({
      success: true,
      response: {
        id: existUser.dataValues.id,
        userName: existUser.dataValues.userName,
        posts: resultPost
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports.signup = async (req, res, next) => {
  try {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password !== confirmPassword) {
      const error = new Error("비밀번호 체크값이 같지 않음");
      error.status = 400;
      throw error;
    }

    const existUser = await user.findOne({ where: { email } });

    if (existUser) {
      throw new Error("이미 가입된 이메일").status(400);
    }

    const salt = await generateRandomString(ENCRYPT_BUFF, ENCODE_TYPE);
    const cryptoPass = await encryptString(password, salt);

    const result = await user.create({
      userName,
      email,
      cryptoPass,
      salt
    });

    if (!result) throw new Error("가입실패");

    res.status(201).json({
      success: true
    });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const id = req.user.id;
    const userName = req.body.userName;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const salt = await generateRandomString(ENCRYPT_BUFF, ENCODE_TYPE);
    const cryptoPass = await encryptString(password, salt);

    const response = user.update(
      {
        userName,
        cryptoPass,
        salt
      },
      { where: { id } }
    );
    response &&
      res.status(200).json({
        success: true
      });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.user.id;

    const result = user.destroy({
      where: { id }
    });

    if (!result) throw new Error("삭제실패");

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
