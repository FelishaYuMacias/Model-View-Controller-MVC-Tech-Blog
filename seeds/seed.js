const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./user.json');
const blogData = require('./blog.json')
const commentData = require('./comment.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Blog.bulkCreate(blogData);
  
  await Comment.bulkCreate(commentData)

  process.exit(0);
};

seedDatabase();