const express = require('express');
const router = express.Router();
const { Blog, Comment, User } = require('../models');

// GET homepage
router.get('/', async (req, res) => {
  Blog.findAll().then(blogs=>{
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


module.exports = router