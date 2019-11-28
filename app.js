// get all posts, 
// fs.readFile("")
const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');
const fs = require('fs')
// const cors = require('cors')
const bodyParser = require('body-parser');
const scripts = require('./scripts_main')
const pug = require('pug');

const blogClass = require('./blogPostClass');
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
// app.use(express.static("views"));

// app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

app.set('views', `${__dirname}/views`)
app.engine('pug', require('pug').renderFile);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    let allPostsInfo = getArrayFromJson(database);
    res.render("homepage.pug", {
        allPostsInfo: allPostsInfo
    })
})

app.get('/blog', (req, res) => {
    res.render("blog.pug")
})

app.post('/newpost/:token', urlencodedParser, (req, res) => {
    let blogPost = createPost(req.body.textBody, req.body.blog_title, req.body.gif);
    savePostToJson(blogPost, database);
    res.redirect("/?submittedpost=true")
});

app.get('/posts/:index', (req, res) => {
    let blogPostInfo = getBlogPostByIndex(req.params.index, database);
    // let route = `/comment/${index}`
    res.render('view', blogPostInfo)
});

app.get('/random', (req, res) => {
    let randomIndex = randomNumber(database);
    let blogPostInfo = getBlogPostByIndex(randomIndex, database);
    res.render('view', blogPostInfo);

    // let url = "https://images.unsplash.com/photo-1562886877-0be0db6aba84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80";
    // const blogPost = {
    //     title: "This is a title",
    //     textBody: "Blog dsbcbd",
    //     gifUrl: url
    // }
    // res.render('random', blogPost);
});

/*
app.get('/posts', urlencodedParser, (req, res) => {
    res.sendFile(path.join(__dirname, "database.json"))
    //console.log(res);
}); // Do not touch - archives all posts for requesting.
*/

// EDIT ---------------------
// app.get("/posts/:index", urlencodedParser, (req, res) => {
//     fs.readFile("./database.json", (err, data) => {
//         if (err) {
//             console.error(err)
//         } else {
//             console.log("File has been read")
//             let jsonArray = JSON.parse(data);
//             let index = req.params.index;
//             try {
//                 res.json(jsonArray[index]);
//             } catch {
//                 res.json({
//                     error: `post ${index} does not exists`
//                 });
//             }
//         }
//     })
// });

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
    res.redirect('/');
});

app.get('*', function (req, res) {
    res.status(404).send("Oops you can't do that!");
});

// Listening to the server on port 8000
app.listen(port, () => console.log(`fessBook listening on port #${port}! \n http://localhost:${port}`));