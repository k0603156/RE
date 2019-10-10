// api/posts.js
const router = require('express').Router();

// Create
router.post('/create',
  function (req, res, next) {
    const {
      id,
      username
    } = req.user;
  },
  function (req, res, next) {}
);

// Feed
router.get('/list',
  function (req, res, next) {

  }
);

// Post:id
router.get('/:id',
  function (req, res, next) {}
);


// Update
router.put('/update/:id',
  function (req, res, next) {}
);

// Destroy
router.delete('/delete/:id',
  function (req, res, next) {}
);

module.exports = router;