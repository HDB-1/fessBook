// JS file for homepage

$(document).ready(function () {
    let submittedPost = window.location.search.substring(1).split("=")[1];
    console.log(submittedPost);
    if (submittedPost === "true") {
        $("#successfulPostAlert").toggle();
    }
});