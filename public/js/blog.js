// JS file for write blog page

$(document).ready(() => {
  var maxLength = 140;
  $('textarea').keyup(function () {
    var length = $(this).val().length;
    var length = maxLength - length;
    $('#chars').text(length);
  });


  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=Fn7q3cMgPZmqk")
    .then(
      (response) => {
        const url1 = response.data.data[0].images.downsized.url;
        $('#minion_gif').attr("src", url1)
        $('#minion').val(url1)
        console.log(response.data.data[0].images.downsized.url)
      }
    )

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=OPU6wzx8JrHna")
    .then((response) => {
      const url2 = response.data.data[0].images.downsized.url;
      $('#patrick_gif').attr("src", url2)
      $('#patrick').val(url2)
      console.log(response.data.data[0].images.downsized.url)
    })

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=UlqLDtI8Qc0j6")
    .then(
      (response) => {
        const url3 = response.data.data[0].images.downsized.url;
        $('#popcorn_gif').attr("src", url3)
        $('#popcorn').val(url3)
        console.log(response.data.data[0].images.downsized.url)
      })

});