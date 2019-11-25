

app.get('database.json', (req, res) => {
    res.sendFile(path.join(__dirname, "database.json"));
});

app.post("/postdata:index", (req, res) => {
    res.send(req.body.index); // at first, no comments / reactions will be visible! 

});

// get all posts, 

// fs.readFile("")