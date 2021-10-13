const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs')
const methodOverride = require('method-override')

const postController = require('./controllers/postController')
const pageController=require('./controllers/pageController')
const app = express();


mongoose.connect('mongodb+srv://brkybzkrt:EqopGj0GpfSMSXSZ@cluster0.w6n5r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  usenewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("Connected to DB")
}).catch((err)=>{
  console.log(err);
})




app.set('view engine',"ejs");

//middlewares
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(methodOverride("_method",{methods:["GET","POST"]}));


app.get('/',postController.getAllPosts);

app.get('/about',pageController.getAboutPage);

app.get('/add', pageController.getAddPostPage);

app.post('/addBlog', postController.createPost);

app.get('/blog/:id',postController.getPost)


app.get('/blog/update/:id',pageController.getUpdatePostPage);

app.put('/updatePost/:id',postController.updatePost);

app.delete('/deletePost/:id',postController.deletePost);

const port = process.env.PORT|| 5000;

app.listen(port, () => {
  console.log('Server Started...');
});
