// JS file for blog functionality

const fs = require('fs')

class BlogPost{
    constructor(textBody, title, gif){

        this.textBody = textBody;
        this.title = title;
        this.reactions = {'laugh': 0, 'smile': 0, 'cry': 0};
        this.comments = [];
        this.gif = gif;
        this.url = `/posts/${this.title}`
        
    }

    get postRoute(){
        return this.url;
    }

    reactToPost(reaction){
        let reactionCount = this.reactions[reaction];
        reactionCount += 1;
        this.reactions[reaction] += 1;
    }

    addComment(commentText){
        this.comments.push(commentText);
    }


    archivePost(){ //adds completed object to json file.
        var dataFromJson = fs.readFileSync('./database.json');
        var json = JSON.parse(dataFromJson);
        json.push(this);
        fs.writeFile("./database.json", JSON.stringify(json, null, 4), (err) => (err) ? console.error(err) : console.log("File has been created"))
    }
}

//on click, creates a new blogpost. The text box content is added to textBody in the object, and title = title etc.

//Then, axios.post to the /postdata route defined below.


// let testPost = new BlogPost('testingConstructor', 'blahblah');
// console.log(testPost);

// testPost.reactToPost("laugh")

// testPost.addComment("first comment here")
// testPost.addComment("second comment here")

// console.log(testPost);

module.exports = {BlogPost};