const { user } = require("../Models/tables");
const { NotFoundError } = require("../Utils/Error");
const { generateRandomString, encryptString, checkProps } = require("../Utils");

const ENCRYPT_BUFF = 64;
const ENCODE_TYPE = "base64";

exports.getUser = async req => {
  const exUser = await user.findOne({
    where: { userName: req.params.userName },
    attributes: ["userName"]
  });
  if (!exUser) {
    throw new NotFoundError("해당 사용자를 찾을 수 없습니다.");
  }
  return exUser;
};

exports.signup = async (userName, email, reqPassword, confirmPassword) => {
  if (password !== confirmPassword) {
    const error = new Error("비밀번호 체크값이 같지 않음");
    error.status = 400;
    throw error;
  }

  const exUser = await user.findOne({ where: { email } });

  if (exUser) {
    const error = new Error("이미 가입된 이메일");
    error.status = 400;
    throw error;
  }

  const salt = await generateRandomString(ENCRYPT_BUFF, ENCODE_TYPE);
  const cryptoPass = await encryptString(reqPassword, salt);

  const result = await user.create({
    userName,
    email,
    cryptoPass,
    salt
  });

  if (!result) throw new Error("가입실패");

  return result;
};

exports.updateUser = async (id, userName, password, confirmPassword) => {
  const salt = await generateRandomString(ENCRYPT_BUFF, ENCODE_TYPE);
  const cryptoPass = await encryptString(password, salt);

  const result = user.update(
    {
      userName,
      cryptoPass,
      salt
    },
    { where: { id: reqId } }
  );
  return result;
};

exports.deleteUser = async req => {
  const { id } = checkProps(req.body, "id");

  const result = UserModel.destroy({
    where: { id }
  });

  if (!result) throw new Error("삭제실패");

  return result;
};
