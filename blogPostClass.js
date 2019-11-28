// JS file for blog functionality

const fs = require('fs')

class BlogPost{
    constructor(textBody, title, gif){
        this.id;
        this.textBody = textBody;
        this.title = title;
        this.reactions = {'laugh': 0, 'dislike': 0, 'like': 0};
        this.comments = [];
        this.gif = gif;
        this.url = `/${this.id}`
    }

    archivePost(){ //adds completed object to json file.
        var dataFromJson = fs.readFileSync('./database.json');
        console.log(dataFromJson)
        var json = JSON.parse(dataFromJson);
        console.log(json)
        console.log(typeof json)
        console.log(json.length)
        json.push(this);
        fs.writeFile("./database.json", JSON.stringify(json, null, 4), (err) => (err) ? console.error(err) : console.log("File has been created"))
    }
}

//on click, creates a new blogpost. The text box content is added to textBody in the object, and title = title etc.

//Then, axios.post to the /postdata route defined below.

//console.log(jsonData)

// let testPost = new BlogPost('body', 'title', 'giphy');
// console.log(testPost.archivePost());

module.exports = {BlogPost};