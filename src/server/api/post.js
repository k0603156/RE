// api/posts.js
const router = require('express').Router();
const {
  isAuthenticated
} = require('../middlewares');
const model = require('../models');
// Create
router.post('/create',
  function (req, res, next) {
    const {
      id
    } = req.user;
    const {
      country,
      fromDate,
      toDate,
      title: postTitle,
      mainImage,
      content: [{
        title: contentTitle,
        note,
        images
      }]
    } = req.body;
    console.log(req.body)
    console.log(contentTitle)
    model.Post.create({
        userId: id,
        country,
        fromDate,
        toDate,
        title: postTitle,
        mainImage,
        contentOfpost: [{
          title: contentTitle,
          note,
          images
        }]
      }, {
        include: [{
          model: model.Content,
          as: 'contentOfpost'
        }]
      }).then(result =>
        console.log(result.dataValues, result.dataValues.contentOfpost.map(v => v.dataValues))
      )
      .catch(err => console.error(err))
  });

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