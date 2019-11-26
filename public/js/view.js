// JS file for view post page
function index_splitter() {
    let path = window.location.pathname;
    let pathSplit = path.split('/');
    return parseInt(pathSplit[pathSplit.length - 1]);
}

function appendButtonHtmlGenerator(buttonType, buttonIndex) {
    return `<button class="reactionButton" id=${buttonType}Button-${buttonIndex}>${buttonType}</button>`
}

$(document).ready(function () {

    axios.get("/posts").then(response => { // using axios get this route, then with the response
        let postArray = response.data; // let quote = the data value of the response object4
        let num = index_splitter();
        let textBody = postArray[num].textBody;
        let title = postArray[num].title;
        //adding stuff here ------------------------
        let gif = postArray[num].gif;

        let gifHtml;
        if (gif.length > 2) {
            gifHtml = `<img src="${gif}" />`;
        } else {
            gifHtml = "";
        }

        $("#blogPostContainer").append(`<div class="post">  ${title}  <br> ${textBody} <br> ${gifHtml} </div>`)
        $("#blogPostContainer").append(appendButtonHtmlGenerator("like", num));
        $("#blogPostContainer").append(appendButtonHtmlGenerator("dislike", num));
        $("#blogPostContainer").append(appendButtonHtmlGenerator("laugh", num));
    })
});