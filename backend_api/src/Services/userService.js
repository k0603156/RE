const Models = require("../Models/tables");
const { NotFoundError } = require("../Utils/Error");
const { generateRandomString, encryptString } = require("../Utils");

const ENCRYPT_BUFF = 64;
const ENCODE_TYPE = "base64";

module.exports.getUser = async (req, res, next) => {
  try {
    const existUser = await Models.user.findOne({
      include: [
        {
          model: Models.post,
          attributes: ["id", "title", "updatedAt"],
        },
      ],
      where: { userName: req.params.userName },
      attributes: ["id", "userName"],
    });

    if (!existUser) {
      throw new NotFoundError("해당 사용자를 찾을 수 없습니다.");
    }

    res.status(200).json({
      success: true,
      response: existUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.signup = async (req, res, next) => {
  try {
    const { userName } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { confirmPassword } = req.body;

    if (password !== confirmPassword) {
      const error = new Error("비밀번호 체크값이 같지 않음");
      error.status = 400;
      throw error;
    }

    const existUser = await Models.user.findOne({ where: { email } });

    if (existUser) {
      throw new Error("이미 가입된 이메일").status(400);
    }

    const salt = await generateRandomString(ENCRYPT_BUFF, ENCODE_TYPE);
    const cryptoPass = await encryptString(password, salt);

    const result = await Models.user.create({
      userName,
      email,
      cryptoPass,
      salt,
    });

    if (!result) throw new Error("가입실패");

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { userName } = req.body;
    const { password } = req.body;
    // const { confirmPassword } = req.body;
    const salt = await generateRandomString(ENCRYPT_BUFF, ENCODE_TYPE);
    const cryptoPass = await encryptString(password, salt);

    const response = Models.user.update(
      {
        userName,
        cryptoPass,
        salt,
      },
      { where: { id } },
    );
    if (response) {
      res.status(200).json({
        success: true,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.user;

    const result = Models.user.destroy({
      where: { id },
    });

    if (!result) throw new Error("삭제실패");

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
