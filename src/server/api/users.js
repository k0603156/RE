// api/users.js

var express = require('express');
var router = express.Router();

// Index
router.get('/',
  function (req, res, next) {}
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