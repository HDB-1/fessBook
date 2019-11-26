// JS file for homepage
function appendButtonHtmlGenerator(buttonType, buttonIndex){
    return `<button class="reactionButton" id=${buttonType}Button-${buttonIndex}>${buttonType}</button>`
}
$(document).ready(function () {
    axios.get("/posts").then(response => { // using axios get this route, then with the response
        let postArray = response.data; // let quote = the data value of the response object4
        console.log(postArray);
        for (let i = postArray.length - 1; i >= 0; i--) {
            let gif = postArray[i].gif;
            let textBody = postArray[i].textBody;
            let title = postArray[i].title;
            let gifHtml;
            if(gif){
                gifHtml = `<img src="${gif}" />`;
            }
            else{
                gifHtml ="";  
            }
            let postHtml = `<a href="views/${i}"><div class="post" id="blog${[i]}">  ${title}  <br /> <p>${textBody}</p> <br /> ${gifHtml} </div></a>`;
            $("#blogPostContainer").append(postHtml)
            
            // $("#blogPosts").append(`<div class="post" id="blog${[i]}">  ${title}  <br> ${textBody} <br> <button class="likeButton" id="likeButton_${i}>Like</button><button class="dislikeButton" id="dislikeButton_${i}>Dislike</button> <button class="laughterButton" id="laughterButton_${i}>Laugh</button> </div>`)

        }
    
        

    });
})