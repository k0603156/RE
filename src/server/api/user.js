// api/users.js
const router = require('express').Router();
const {
  randomBytes,
  pbkdf2
} = require('crypto');
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
const CRYPTO_COUNT = 8529;
const CRYPTO_ALG = 'sha512';
// Profile
router.get('/profile/:id',
  (req, res, next) => {
    const {
      id
    } = req.params;
    User.findOne({
      where: {
        id
      },
      attributes: [
        'id', 'username', 'email'
      ]
    }).then(result => {
      if (!result.isRejected && !result.isFulfilled) {
        req.user && req.user.id &&
          result.setDataValue('isMe', (req.user.id === result.dataValues.id));

        res.status(200).json(result.dataValues);
      }
    }).catch(error => console.error(error));
  }
);

// 회원가입
router.post('/create',
  function (req, res, next) {
    const {
      username,
      email,
      password
    } = req.body;
    randomBytes(64, (err, salt) => {
      if (err) res.send("Sorry, SignIn failed")
      pbkdf2(password, salt.toString('base64'), CRYPTO_COUNT, 64, CRYPTO_ALG, (err, key) => {
        if (err) res.send("Sorry, SignIn failed")
        User.create({
            username,
            email,
            passkey: key.toString('base64'),
            salt: salt.toString('base64')
          })
          .then(
            result => {
              console.log(result);
              res.status(201).send("Thank you for join with us!");
              // .redirect("/users/sign_up");
            })
          .catch(err => {
            throw err;
          });
      });
    });
  }
);
//로그인
router.post('/confirm',
  (req, res, next) => {
    const {
      email,
      password
    } = req.body;
    User.findOne({
      where: {
        email
      }
    }).then(({
      dataValues: {
        salt,
        passkey
      }
    }) => {
      pbkdf2(password, salt, CRYPTO_COUNT, 64, CRYPTO_ALG, (err, key) => {
        if (key.toString('base64') === passkey) {
          res.send(generateToken(email));
        } else {
          res.send("Sorry, SignIn failed");
        }
      });
    }).catch(error => console.error(error));

  }
);
//회원정보수정
router.put('/update', isAuthenticated,
  function (req, res, next) {
    const {
      username: newUserName,
      password
    } = req.body;
    const {
      id,
      username: existUserName,
      salt,
      passkey
    } = req.user;

    User.update({
      username: newUserName
    }, {
      where: {
        id,
        username: existUserName
      }
    }).then(result => {
      if (result[0]) res.send(`${newUserName}. Your Profile has been changed successfully!`);
    }).catch(err => console.error(err))


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
    } = req.user;
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