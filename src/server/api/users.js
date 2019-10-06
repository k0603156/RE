// api/users.js

const express = require('express');
const {
  getUsers
} = require('../controller');
const router = express.Router();
const {
  generateToken
} = require('../utils');
// Index
router.get('/',
  function (req, res, next) {
    // console.log(req.headers)
    getUsers().then(user => res.send(req + user));
  }
);
router.get('/generateToken',
  function (req, res, next) {
    // console.log(req.headers)
    getUsers().then(user => res.send(
      generateToken(req.headers.id)));
  }
);
// Show
router.get('/:id',
  function (req, res, next) {}
);

// Create
router.post('/',
  function (req, res, next) {},
  function (req, res, next) {}
);

// Update
router.put('/:id',
  function (req, res, next) {}
);

// Destroy
router.delete('/:id',
  function (req, res, next) {}
);

module.exports = router;