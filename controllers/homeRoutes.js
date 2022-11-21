const express = require('express');
const router = express.Router();
const { Blog, Comment, User } = require('../models');

// GET homepage
router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
    user_id: req.session.user_id
  })
})


module.exports = router