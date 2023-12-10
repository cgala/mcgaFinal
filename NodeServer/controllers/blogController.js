const Blog = require('../models/blog');

const blog_get = (req,res) =>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
       res.send(result) 
    })
    .catch((err)=>{
        console.log(err)
    })
}

const blog_getOne = (req,res)  => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.status(404).render('404',{title:'Blog not found' })
    })
}

const blog_post = (req,res) =>{
    console.log(req.body)
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
}

const blog_delete = (req,res) =>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
}

const blog_update = (req,res) =>{
    const id = req.params.id;
    console.log(req.body)
    Blog.findByIdAndUpdate(id,req.body,{
        new : true
    })
    .then((result) => {
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = {
    blog_get,
    blog_getOne,
    blog_post,
    blog_delete,
    blog_update
}