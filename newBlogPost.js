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
        "url": `/blog/${id}`
    }
    json.push(obj);
        fs.writeFile("./database.json", JSON.stringify(json, null, 4), (err) => (err) ? console.error(err) : console.log(`Post ${id} has been created`))
     
}


exports.createPost = createPost;