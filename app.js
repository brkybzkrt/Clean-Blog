const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/Blog')
const ejs = require('ejs')

const app = express();


mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  usenewUrlParser: true,
  useUnifiedTopology: true,
});




app.set('view engine',"ejs");

//middlewares
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.get('/', async(req, res) => {
  const blogs= await Blog.find({}).sort({created_date:-1})
  res.render('index',{blogs});
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('addPost');
});

app.post('/addBlog', async (req, res) => {
  await Blog.create(req.body)
  res.redirect('/');
});

app.get('/blog/:id', async (req,res)=>{
  const id = req.params.id
  const blog = await Blog.findById(id)

  res.render('post',{blog})
})

const port = 3000;

app.listen(port, () => {
  console.log('Server Started...');
});
