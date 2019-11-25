// example json writing

const fs = require("fs");

let data = {};
data = { posts: [
    {title: 'title1' ,
     textBody: 'body' ,
    comments: ['comment1','comment2'],
    gifs: 'gif',
    reactions: [
        {like: 0},
        {laugh: 0},
        {sad: 0}]
    }, {number: 0}
], }

console.log(data.posts.length === 2);