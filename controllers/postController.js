const Blog = require('../models/Blog');

exports.getAllPosts = async (req, res) => {
  const blogs = await Blog.find({}).sort({ created_date: -1 });
  res.render('index', { blogs });
};

exports.createPost = async (req, res) => {
  await Blog.create(req.body);
  res.redirect('/');
};

exports.getPost = async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);

  res.render('post', { blog });
};

exports.updatePost = async (req, res) => {
  const id = req.params.id;
  let {title,detail} = req.body;
 const blog= await Blog.findById(id)
  blog.title=title;
  blog.detail=detail;
  blog.save();
  res.redirect(`/blog/${id}`);

};

exports.deletePost = async (req, res) => {
  const id = req.params.id;

  await Blog.findByIdAndRemove(id);

  res.redirect('/');
};
