

// JS file for write blog page

$(document).ready(() => {
    var maxLength = 140;
    $('textarea').keyup(function() {
      var length = $(this).val().length;
      var length = maxLength-length;
      $('#chars').text(length);
    });
    // on submit button click


    // let bodyText =  $('textarea').val();
    // let title = $title

});

