// api/posts.js
const router = require('express').Router();

// Index
router.get('/',
  function (req, res, next) {
    console.log('getPost');
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