// JS file for homepage
function appendButtonHtmlGenerator(buttonType, buttonIndex) {
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
            console.log(typeof gif);
            console.log(gif);
            if (gif.length > 2) {
                gifHtml = `<img src="${gif}" />`;
                // console.log("has gif" + gif);
                // console.log("has gif html" + gifHtml);
            } else {
                gifHtml = "";
                // console.log("no gif" + gif);
                // console.log("no gif HTML" + gifHtml);
            }
            let postHtml = `<a href="views/${i}"><div class="post" id="blog${[i]}">  ${title}  <br /> <p>${textBody}</p> <br /> ${gifHtml} </div></a>`;
            $("#blogPostContainer").append(postHtml)

        }
        let submittedPost = window.location.search.substring(1).split("=")[1];
        console.log(submittedPost);
        if(submittedPost === "true"){
            $("#successfulPostAlert").toggle();
        }


    });
})