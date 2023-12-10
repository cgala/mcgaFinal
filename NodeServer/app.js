const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const BlogRoutes = require('./routes/blogRoutes')

//express app
const app = express();

//conect to mongo db
const dbURI = 'mongodb+srv://ArielMon:Usuario123@cluster0.k3fgvjm.mongodb.net/note-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI,{ useNewUrlParser:true, useUnifiedTopology: true})
.then((result)=>app.listen(3000))
.catch((error)=>console.log(error))

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'))
// Add headers before the routes are defined ACORDARSE DE TRADUCIR ESTO
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//routes
//app.get('/', (req,res) => {
//    res.redirect('/blogs');
//});

//blog routes
app.use(express.json())
app.use('/blogs', BlogRoutes);

//404 page
app.use((req,res)=>{
    res.status(404)
});