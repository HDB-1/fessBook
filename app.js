// get all posts, 
// fs.readFile("")
const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');
// const cors = require('cors')
const bodyParser = require('body-parser');
const ejs = require('ejs');

const blogClass = require('./blogPostClass');
const path = require('path');

app.use(express.static("public"));
app.use(express.static("views"));

// app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

app.set('views', `${__dirname}/views`)
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => { 
    res.render("homepage.ejs") 
    })

app.get('/blog', (req, res) => { 
    res.render("blog.ejs") 
    })

app.post('/newpost/:id', urlencodedParser, (req, res) => { 
    let blogPost = new blogClass.BlogPost(req.body.textBody, req.body.blog_title, req.body.gif); //creates the object - consider moving to blog.js
    blogPost.archivePost();
    res.redirect("/")
});

app.get('/views/:index', (req, res) => 
    res.render('view')
    );

app.get('/random', (req, res) => {
    res.render('random');


});

app.get('/posts', (req, res) => {
    res.sendFile(path.join(__dirname, "database.json"));
}); // Do not touch - archives all posts for requesting.

app.post("/posts/:title", (req, res) => {
  res.render(); // need method of rendering posts title 

});


// Listening to the server on port 8000
app.listen(port, () => console.log(`Example listening on port #${port}! \n http://localhost:${port}`));

