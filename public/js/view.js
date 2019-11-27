// JS file for view post page
const index_splitter = () => {
    let path = window.location.pathname;
    let pathSplit = path.split('/');
    return parseInt(pathSplit[pathSplit.length - 1]);
}

$(document).ready(function () {

    axios.get("/posts").then(response => { // using axios get this route, then with the response
        let postArray = response.data; // let quote = the data value of the response object4
        let num = index_splitter();
        let textBody = postArray[num].textBody;
        let title = postArray[num].title;
        let gif = postArray[num].gif;
        let comments = postArray[num].comments;
        let likes = postArray[num].reactions.like;
        let laughs = postArray[num].reactions.laugh;
        let dislikes = postArray[num].reactions.dislike;
        let gifHtml;
        if (gif.length > 2) {
            gifHtml = `<img src="${gif}" />`;
        } else {
            gifHtml = "";
        }

        $("#blogPostContainer").append(`<div class="post"> <strong> ${title} </strong> <br> ${textBody} <br> <div class="giphy">${gifHtml}</div></div>`)
        //this should work...
        comments.forEach(comment => {
            $("#comment_thread").prepend(`${comment}<br>`);
        });

        $("#laugh-counter").text(`${laughs}`)
        $("#like-counter").text(`${likes}`)
        $("#dislike-counter").text(`${dislikes}`)
        $("#comment_form").attr("action", `comment/${num}`);
        $("#reaction_form").attr("action", `reaction/${num}`);
    

    })
});