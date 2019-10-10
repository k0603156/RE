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
const {
  getUsers
} = require('../controller/user');

// 회원가입
router.post('/create',
  function (req, res, next) {
    const {
      username,
      email,
      password
    } = req.body;

    User.create({
        username,
        email,
        passkey: password,
        salt: "testsalt"
      })
      .then(
        result => {
          console.log(result);
          res.send("Thank you for join with us!");

        })
      .catch(err => {
        console.log(err);
        res.send("Sorry, SignIn failed");
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

    if (result.dataValues.passkey === password) {
      res.send(generateToken(email));
    } else {
      res.send("Sorry, SignIn failed");
    }
  }
);
//회원정보수정
router.put('/update', isAuthenticated,
  function (req, res, next) {
    const {
      username,
      password
    } = req.body;
    const {
      id,
      username: name
    } = req.user;
    User.update({
      username,
      password
    }, {
      where: {
        id,
        username: name
      }
    }).then(result => {
      if (result) res.send(`${name}. Your Profile has been changed successfully!`);
    }).catch(err => console.log(err))
  },
  function (req, res, next) {}
);
//회원탈퇴
router.delete('/delete', isAuthenticated,
  function (req, res, next) {
    console.log('delete')
    const {
      id,
      email
    } = req.user
    User.destroy({
        where: {
          id,
          email
        }
      })
      .then(result => res.send("Thank you for being with us"))
      .catch(err => res.send("Sorry There was a problem. Please try again"))
  }
);
module.exports = router;