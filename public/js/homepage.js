// JS file for homepage
function appendButtonHtmlGenerator(buttonType, buttonIndex){
    return `<button class="reactionButton" id=${buttonType}Button-${buttonIndex}>${buttonType}</button>`
}
$(document).ready(function () {
    axios.get("/posts").then(response => { // using axios get this route, then with the response
        let postArray = response.data; // let quote = the data value of the response object4
        console.log(postArray);
        for (let i = postArray.length - 1; i >= 0; i--) {
            let textBody = postArray[i].textBody;
            let title = postArray[i].title;
            
            $("#blogPostContainer").append(`<a href="views/${i}"><div class="post" id="blog${[i]}">  ${title}  <br> ${textBody} </div></a>`)
        }
    
        

    });
})