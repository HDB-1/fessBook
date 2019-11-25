// JS file for homepage

$(document).ready(function () {
    axios.get("/posts").then(response => { // using axios get this route, then with the response
        let text = response.data; // let quote = the data value of the response object
        console.log(text[0].textBody);
        // $(".quote").html(quote);
    });
})