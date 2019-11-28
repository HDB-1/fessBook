const fs = require('fs')

const createPost = (textBody, title, gifUrl) => {
    const dataFromJson = fs.readFileSync('database.json');
    const json = JSON.parse(dataFromJson);
    let id = json.length;
    let obj = {
        "id":id,
        "textBody": textBody,
        "title": title,
        "reactions": {
            "laugh": 0,
            "dislike": 0,
            "like": 0
        },
        "comments": [],
        "gif": gifUrl,
        "url": `/${id}`
    }
    return obj;
    // json.push(obj);
    //     fs.writeFile("./database.json", JSON.stringify(json, null, 4), (err) => (err) ? console.error(err) : console.log(`Post ${id} has been created`))
     
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

function randomNumber(filePath) {
    let json = getArrayFromJson(filePath);
    var count = Object.keys(json).length;
    let numberr = Math.floor(Math.random() * count);
    return numberr;
}


// exports.createPost = createPost;
// exports.getArrayFromJson = getArrayFromJson;
// exports.getBlogPostByIndex = getBlogPostByIndex;


module.exports = {getArrayFromJson, getBlogPostByIndex, createPost, savePostToJson, reactToBlogPost, addCommentToBlogPost, randomNumber};