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
    // res.render("homepage.pug")
    let allPostsInfo = getArrayFromJson(database);

    res.send(allPostsInfo);
})

app.get('/blog', (req, res) => {
    res.render("blog.pug")
})

app.post('/newpost/:token', urlencodedParser, (req, res) => {
    let blogPost = createPost(req.body.textBody, req.body.blog_title, req.body.gif);
    savePostToJson(blogPost, database);
    res.redirect("/?submittedpost=true")
});

app.get('/:index', (req, res) => {
    let blogPostInfo = getBlogPostByIndex(req.params.index, database);
    res.send(blogPostInfo);
    // res.render('view')
});

app.get('/random/post', (req, res) => {
    // let blogPostInfoArrayLength = getArrayFromJson(database).length;
    // let randomIndex = Math.floor(Math.random() * blogPostInfoArrayLength);
    let randomIndex = randomNumber(database);
    let blogPostInfo = getBlogPostByIndex(randomIndex, database);
    res.send(blogPostInfo);
    console.log(randomIndex);

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

// console.log("File has been read")
// console.log(req.body.comment);
// let jsonArray = JSON.parse(data);
let index = req.params.index;
// let comment = req.body.comment;
let comment = "test comment thursday";
addCommentToBlogPost(index, database, comment);
// console.log(jsonArray[index]);
// let post_comment = jsonArray[index].comments
// post_comment.push(comment);
// console.log(jsonArray[index]);
// fs.writeFile("./database.json", JSON.stringify(jsonArray, null, 4), (err) => (err) ? console.error(err) : console.log("File has been created"))
// try {
    // res.json(jsonArray[index]);
    res.redirect(`/${index}`);
    // console.log(typeof post_comment);
// } catch {
//     res.json({
//         error: `post ${index} does not exists`
//     });
// }
// }
// })
});

app.post("/views/reaction/:index", urlencodedParser, (req, res) => {
    debugger
    fs.readFile("./database.json", (err, data) => {
        if (err) {
            console.error(err)
        } else {
            console.log("File has been read")
            console.log("req body ------START-------")
            console.log(req.body.dislike)
            console.log(req.body.like)
            console.log(req.body.laugh)
            console.log("req body -------END-------")
            //console.log(req.body.comment);
            let jsonArray = JSON.parse(data);
            let index = req.params.index;
            if (req.body.dislike) {
                jsonArray[index].reactions.dislike++;
            };
            if (req.body.laugh) {
                jsonArray[index].reactions.laugh++;
            };
            if (req.body.like) {
                jsonArray[index].reactions.like++;
            };
            fs.writeFile("./database.json", JSON.stringify(jsonArray, null, 4), (err) => (err) ? console.error(err) : console.log("File has been created"))
            try {
                res.redirect(`/views/${index}`);
            } catch {
                res.json({
                    error: `post ${index} does not exists`
                });
            }
        }
    })
});

app.get('*', function (req, res) {
    res.status(404).send("Oops you can't do that!");
});

// Listening to the server on port 8000
app.listen(port, () => console.log(`fessBook listening on port #${port}! \n http://localhost:${port}`));