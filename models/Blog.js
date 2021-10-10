const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: { type: String },
  detail: { type: String },
  created_date: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
