// JS file for homepage

$(document).ready(function () {
    axios.get("/posts").then(response => { // using axios get this route, then with the response
        let blogPostArray = response.data; // let quote = the data value of the response object
        // $(".quote").html(quote);
        for(let i=0; i< blogPostArray; i++){
            $('#blogPostContainer').append(blogPostArray[i].text);
        }
    });
})