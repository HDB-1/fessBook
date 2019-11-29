// get all posts, 
// fs.readFile("")
const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');
const fs = require('fs')
// const cors = require('cors')
const bodyParser = require('body-parser');
const pug = require('pug');
const path = require('path');

const database = './database.json'; // for calling in our write-to-json scripts.

const {
    getArrayFromJson,
    getBlogPostByIndex,
    createPost,
    savePostToJson,
    reactToBlogPost,
    addCommentToBlogPost,
    randomNumber
} = require('./scripts_main.js');

app.use(express.static("public"));
app.use(express.static("views"));

var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

app.set('views', `${__dirname}/views`);
app.engine('pug', require('pug').renderFile);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render("landing.pug")
});

app.get('/posts', (req, res) => {
    let json = getArrayFromJson(database);
    var count = Object.keys(json).length;
    if (count == 0) {
        res.render("no_posts");
    } else {
        let allPostsInfo = getArrayFromJson(database);
        res.render("homepage.pug", {
            allPostsInfo: allPostsInfo
        })
    }
});

app.get('/posts/:index', (req, res) => {
    let json = getArrayFromJson(database);
    var count = Object.keys(json).length;
    let index = req.params.index;
    if (count == 0) {
        res.render("no_posts");
    } else if (index < 0 || index > count) {
        count > 1 ? res.send(`There are only ${count} posts`) : res.send(`There is only ${count} post`)
    } else {
        let blogPostInfo = getBlogPostByIndex(req.params.index, database);
        res.render('view', blogPostInfo)
    }
});

app.get('/random', (req, res) => {
    let json = getArrayFromJson(database);
    var count = Object.keys(json).length;
    if (count == 0) {
        res.render("no_posts");
    } else {
        let randomIndex = randomNumber(database);
        let blogPostInfo = getBlogPostByIndex(randomIndex, database);
        res.render('view', blogPostInfo);
    }
});

app.get('/blog', (req, res) => {
    res.render("blog.pug", {
        route: '/newpost'
    })
});


app.post('/newpost', urlencodedParser, (req, res) => {
    console.log(req)
    let blogPost = createPost(req.body.textBody, req.body.blog_title, req.body.gif);
    savePostToJson(blogPost, database);
    res.redirect("/posts/?submittedpost=true")
});

// EDIT --------------------------------------------
app.post("/comment/:index", urlencodedParser, (req, res) => {
    let index = req.params.index;
    let comment = req.body.comment;
    addCommentToBlogPost(index, database, comment);
    res.redirect(`/posts/${index}`);
});

app.post("/reaction/:index", urlencodedParser, (req, res) => {
    let index = req.params.index;
    reactToBlogPost(index, database, req.body);
    res.redirect(`/posts/${index}`);
});

app.post("/homepagereaction/:index", urlencodedParser, (req, res) => {
    let index = req.params.index;
    reactToBlogPost(index, database, req.body);
    res.redirect(`/posts/#blogPost${index}`);
});

app.get('*', function (req, res) {
    res.status(404).send("Oops you can't do that!");
});

// Listening to the server on port 8000
app.listen(port, () => console.log(`fessBook listening on port #${port}! \n http://localhost:${port}`));