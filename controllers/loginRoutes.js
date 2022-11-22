const express = require('express');
const router = express.Router();
const { Wishlist, Item, User } = require('../models');

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      return res.redirect('/dashboard')
    }
    res.render('login', {
      loggedIn: false,
      user_id: null
    })
  })

module.exports = router