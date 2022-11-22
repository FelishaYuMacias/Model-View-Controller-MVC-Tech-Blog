const express = require('express');
const router = express.Router();
const { Blog, Comment, User } = require('../models');

// GET homepage
router.get('/', async (req, res) => {
  Blog.findAll({include:[User,Comment]}).then(blogs=>{
    const blogsHbsData = blogs.map(blog=>blog.get({plain:true}))
    console.log(blogs);
    console.log("==============")
    console.log(blogsHbsData) 

    res.render('homepage', {
      blogs:blogsHbsData,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id
  })
  })
})

//login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect('/dashboard')
  }
  res.render('login', {
    loggedIn: false,
    user_id: null
  })
})

//dashboard page
router.get("/dashboard", (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect("/login")
  }
  
  User.findByPk(req.session.user_id, {
    include: [Blog]
  })
  .then(userData => {
      const hbsData = userData.toJSON()
      console.log(hbsData)
      hbsData.loggedIn = true
      hbsData.user_id = req.session.user_id
      res.render("dashboard", hbsData)
    })
})

module.exports = router