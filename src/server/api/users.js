// api/users.js
const router = require('express').Router();
const {
  isAuthenticated
} = require('../middlewares');
const {
  generateToken
} = require('../utils');
const {
  User
} = require('../models');

// 회원가입
router.post('/create',
  function (req, res, next) {
    const {
      userName,
      email,
      password
    } = req.body;

    User.create({
        userName,
        email,
        password
      })
      .then(
        result => res.send(result))
      .catch(err => {
        console.log(err)
      })
  },
  function (req, res, next) {
    // res.redirect("/users/sign_up");
  }
);
//로그인
router.post('/confirm',
  async function (req, res, next) {
    const {
      email,
      password
    } = req.body;

    const result = await User.findOne({
      where: {
        email
      }
    });

    if (result.dataValues.password === password) {
      res.send("sucess" +
        generateToken(email));
    } else {
      res.send("fail");
    }
  }
);
//회원정보수정
router.put('/update', isAuthenticated,
  function (req, res, next) {
    const {
      userName,
      password,
      checkPassword
    } = req.body;
    const {
      email
    } = req.user;
  },
  function (req, res, next) {}
);
//회원탈퇴
router.delete('/delete', isAuthenticated,
  function (req, res, next) {
    console.log('delete')
    User.destroy({
      where: {
        email: req.user
      }
    }).then(res.send("sucess")).catch(err => console.log(err))
  }
);
module.exports = router;