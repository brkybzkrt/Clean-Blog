const Blog = require('../models/Blog');


exports.getAboutPage = (req, res) => {
    res.render('about');
  }


exports.getAddPostPage=(req, res) => {
    res.render('addPost');
}



exports.getUpdatePostPage=async (req,res)=>{

const id= req.params.id;

const blog=await Blog.findById(id);

res.render('updatePage',{blog});
}