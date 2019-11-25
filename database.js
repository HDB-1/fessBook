const fs = require("fs");
let data = {};
data = { posts: [
    {   id: 1,
        title: 'title1' ,
     textBody: 'body' ,
    comments: ['comment1','comment2'],
    gifs: 'gif',
    reactions: [
        {like: 0},
        {laugh: 0},
        {sad: 0}]
    }
    
]}

fs.writeFile("./database.json", JSON.stringify(data, null, 4), (err) => (err) ? console.error(err) : console.log("File has been created"))
