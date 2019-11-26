// JS file for homepage

$(document).ready(function () {
    axios.get("/posts").then(response => { // using axios get this route, then with the response
        let postArray = response.data; // let quote = the data value of the response object4
        console.log(postArray);
        for (let i = postArray.length - 1; i >= 0; i--) {
            let textBody = postArray[i].textBody;
            let title = postArray[i].title;
            let gif = postArray[i].gif;
            $("#blogPostContainer").append(`<div class="post" id="blog${[i]}">  ${title}  <br> ${textBody} <br> <img src="${gif}">`)
            // $("#blogPosts").append(`<div class="post" id="blog${[i]}">  ${title}  <br> ${textBody} <br> <button class="likeButton" id="likeButton_${i}>Like</button><button class="dislikeButton" id="dislikeButton_${i}>Dislike</button> <button class="laughterButton" id="laughterButton_${i}>Laugh</button> </div>`)
        }

// create button with same i value that can be used to I.D which blog post the user is reacting to. 
//when clicked, increments the counter for that emotion on the object (see blog post class)
        

        // $(".quote").html(quote);
    });
})