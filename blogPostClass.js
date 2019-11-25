// JS file for blog functionality

class BlogPost{
    constructor(textBody, title, ID){
        this.ID = ID;
        this.textBody = textBody;
        this.title = title;
        this.reactions = {'laugh': 0};
        this.comments = [];
    }

    reactToPost(reaction){
        let reactionCount = this.reactions[reaction];
        reactionCount += 1;
        this.reactions[reaction] += 1;
    }

    addComment(commentText){
        this.comments.push(commentText);
    }
}

//on click, creates a new blogpost. The text box content is added to textBody in the object, and title = title etc.

//Then, axios.post to the /postdata route defined below.


let testPost = new BlogPost('Testtitle', 'testtext', 1);


console.log(testPost);

testPost.reactToPost("laugh")
testPost.reactToPost("laugh")
testPost.reactToPost("laugh")

testPost.addComment("first comment here")
testPost.addComment("second comment here")


console.log(testPost);