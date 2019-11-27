const fs = require('fs')


let sampleBlogObject = {
    textBody: "This is a hard coded sample blog",
    titl: "Blog title SAMPLE",
    reactions: {
        laugh: 0,
        dislike: 0,
        like: 0
    },
    comments: [
    ],
    gif: "https://media3.giphy.com/media/YVPwi7L2izTJS/giphy-downsized.gif?cid=b7d3a9e02d4a8d59b0c9ec8bf61e7d733879ea54875988e6&rid=giphy-downsized.gif",
    url: "/posts/hhhhhhhhhhh"
}


function getArrayFromJson(filePath) {
    var dataFromJson = fs.readFileSync(filePath);
    var json = JSON.parse(dataFromJson);
    return json;
}

function getBlogPostByIndex(blogPostIndex, filePath){
    return getArrayFromJson(filePath)[blogPostIndex];
}

function savePostToJson(blogObject, filePath){ //adds completed object to json file.
    let currentJsonInfo = getArrayFromJson(filePath);
    currentJsonInfo.push(blogObject);
    fs.writeFile(filePath, JSON.stringify(currentJsonInfo, null, 4), (err) => (err) ? console.error(err) : console.log("File has been created"))
}

function reactToBlogPost(blogPostIndex, filePath, reqBodyInfo){ //pass req.body in to check for existence of likes, dislikes, laughs
    let currentJsonInfo = getArrayFromJson(filePath);
    if(reqBodyInfo.dislike){
        currentJsonInfo[blogPostIndex].reactions.dislike++;
    }
    if(reqBodyInfo.like){
        currentJsonInfo[blogPostIndex].reactions.like++;
    }
    if(reqBodyInfo.laugh){
        currentJsonInfo[blogPostIndex].reactions.laugh++;
    }
    fs.writeFile(filePath, JSON.stringify(currentJsonInfo, null, 4), (err) => (err) ? console.error(err) : console.log("File has been created"))
}

function addCommentToBlogPost(blogPostIndex, filePath, comment){
    let currentJsonInfo = getArrayFromJson(filePath);
    currentJsonInfo[blogPostIndex].comments.push(comment);
    fs.writeFile(filePath, JSON.stringify(currentJsonInfo, null, 4), (err) => (err) ? console.error(err) : console.log("File has been created"))

}


// console.log(getArrayFromJson('./database.json'));

// console.log("now testing calling an individual file");

// console.log(getBlogPostByIndex(0, './database.json'));



// savePostToJson(sampleBlogObject, './database.json');

// console.log(getBlogPostByIndex(2, './database.json'));

// reactToBlogPost(2, './database.json', 'laugh');

console.log(getBlogPostByIndex(2, './database.json'));

addCommentToBlogPost(2, './database.json', "this post is lit!")
