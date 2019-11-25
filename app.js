// get all posts, 
// fs.readFile("")
const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');
const cors = require('cors')
const bodyParser = require('body-parser');
const ejs = require('ejs');


app.use(express.static("public"));
app.use(express.static("views"));

// app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

app.set('views', `${__dirname}/views`)
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => { 
    res.render("blog.ejs") 
    })

// app.get('/', (req, res) => res.status(200).render('blog.ejs'));
// app.get('/blogpost', (req, res) => res.status(200).render('blog'));

app.post('/newpost', urlencodedParser, (req, res) => { 
    // console.log(res.body)
    // console.log(res.body.textBody)
    // res.send(res.body.textBody)
    res.render("index.ejs", {data: req.body})
});
// app.get('/posts', (req, res) => {
//     res.sendFile(path.join(__dirname, "database.json"));
// });

// app.post("/postdata:index", (req, res) => {
//     res.send(req.body.index); // at first, no comments / reactions will be visible! 

// });


// Listening to the server on port 6000
app.listen(port, () => console.log(`Example listening on port #${port}!`));

