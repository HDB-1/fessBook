// JS file for random post page


function appendButtonHtmlGenerator(buttonType, buttonIndex) {
    return `<button class="reactionButton" id=${buttonType}Button-${buttonIndex}>${buttonType}</button>`
}

$(document).ready(function () {

    axios.get("/posts").then(response => { // using axios get this route, then with the response

        let postArray = response.data; // let quote = the data value of the response object4
        let numberr = Math.floor(Math.random() * postArray.length);
        let num = numberr;
        let textBody = postArray[num].textBody;
        let title = postArray[num].title;
        let comments = postArray[num].comments;

        let gif = postArray[num].gif;

        let gifHtml;
        if (gif.length > 2) {
            gifHtml = `<img src="${gif}" />`;
        } else {
            gifHtml = "";
        }

        $("#blogPostContainer").append(`<div class="post">  ${title}  <br> ${textBody} <br> ${gifHtml} </div>`)
        comments.forEach(comment => {
            $("#comment_thread").prepend(`${comment}<br>`);
        });
        $("#blogPostContainer").append(appendButtonHtmlGenerator("like", num));
        $("#blogPostContainer").append(appendButtonHtmlGenerator("dislike", num));
        $("#blogPostContainer").append(appendButtonHtmlGenerator("laugh", num));
        $("#comment_form").attr("action", `comment/${num}`);
    })
});