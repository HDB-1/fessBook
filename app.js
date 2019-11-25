// get all posts, 
// fs.readFile("")
const express = require('express');
const app = express();
const port = 8000;
const axios = require('axios');
// const bodyParser = require('body-parser');
const ejs = require('ejs');

app.use(express.static("public"));
app.use(express.static("views"));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.set('views', `${__dirname}/views`)
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.status(200).render('view'));

app.get('database.json', (req, res) => {
    res.sendFile(path.join(__dirname, "database.json"));
});

app.post("/postdata:index", (req, res) => {
    res.send(req.body.index); // at first, no comments / reactions will be visible! 

});


// Listening to the server on port 8000
app.listen(port, () => console.log(`Example listening on port #${port}!`));

