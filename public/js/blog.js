// JS file for write blog page
const rand = () => {
  return Math.random().toString(36).substr(2); // remove `0.`
};

const token = () => {
  return rand() + rand(); // to make it longer
};

$(document).ready(() => {
  var maxLength = 140;
  $('textarea').keyup(function () {
    var length = $(this).val().length;
    var length = maxLength - length;
    $('#chars').text(length);
  });


  //token() "bnh5yzdirjinqaorq0ox1tf383nb3xr"

  $('form').attr("action", `/newpost/${token()}`)

//show gif menu
  $("#submitBtn").click(function () {
    submitButton.addEventListener("click", event => {})
    $('.gif_form').toggle();
});


  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=Fn7q3cMgPZmqk")
    .then(
      (response) => {
        const url1 = response.data.data[0].images.downsized.url;
        $('#minion_gif').attr("src", url1)
        $('#minion').val(url1)
        console.log(response.data.data[0].images.downsized.url)
      })

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

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=YVPwi7L2izTJS")
    .then(
      (response) => {
        const url4 = response.data.data[0].images.downsized.url;
        $('#confused_gif').attr("src", url4)
        $('#confused').val(url4)
        console.log(response.data.data[0].images.downsized.url)
      })

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=1BXa2alBjrCXC")
    .then(
      (response) => {
        const url5 = response.data.data[0].images.downsized.url;
        $('#sad_gif').attr("src", url5)
        $('#sad').val(url5)
        console.log(response.data.data[0].images.downsized.url)
      })

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=l1J9u3TZfpmeDLkD6")
    .then(
      (response) => {
        const url6 = response.data.data[0].images.downsized.url;
        $('#angry_gif').attr("src", url6)
        $('#angry').val(url6)
        console.log(response.data.data[0].images.downsized.url)
      })

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=1398cRUI5r3aww")
    .then(
      (response) => {
        const url7 = response.data.data[0].images.downsized.url;
        $('#dancing_gif').attr("src", url7)
        $('#dancing').val(url7)
        console.log(response.data.data[0].images.downsized.url)
      })

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=r1HGFou3mUwMw")
    .then(
      (response) => {
        const url8 = response.data.data[0].images.downsized.url;
        $('#damn_gif').attr("src", url8)
        $('#damn').val(url8)
        console.log(response.data.data[0].images.downsized.url)
      })

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=26FPpSuhgHvYo9Kyk")
    .then(
      (response) => {
        const url9 = response.data.data[0].images.downsized.url;
        $('#birthday_gif').attr("src", url9)
        $('#birthday').val(url9)
        console.log(response.data.data[0].images.downsized.url)
      })

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=g9582DNuQppxC")
    .then(
      (response) => {
        const url10 = response.data.data[0].images.downsized.url;
        $('#toast_gif').attr("src", url10)
        $('#toast').val(url10)
        console.log(response.data.data[0].images.downsized.url)
      })

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=iDNuU8ThJuaF74iEG9")
    .then(
      (response) => {
        const url11 = response.data.data[0].images.downsized.url;
        $('#scared_gif').attr("src", url11)
        $('#scared').val(url11)
        console.log(response.data.data[0].images.downsized.url)
      })

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=jUwpNzg9IcyrK")
    .then(
      (response) => {
        const url12 = response.data.data[0].images.downsized.url;
        $('#homer_gif').attr("src", url12)
        $('#homer').val(url12)
        console.log(response.data.data[0].images.downsized.url)
      })

  axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=BlVnrxJgTGsUw")
    .then(
      (response) => {
        const url13 = response.data.data[0].images.downsized.url;
        $('#excited_gif').attr("src", url13)
        $('#excited').val(url13)
        console.log(response.data.data[0].images.downsized.url)
      })


  // let minion_laugh = "Fn7q3cMgPZmqk";
  // let patrick_cry = "OPU6wzx8JrHna"
  // let popcorn_weird = "UlqLDtI8Qc0j6"
  // let confused_big_glasses = "YVPwi7L2izTJS"
  // let sad_wine_spill = "1BXa2alBjrCXC"
  // let angry_little_girl = "l1J9u3TZfpmeDLkD6"
  // let carlton = "1398cRUI5r3aww"
  // let damn = "r1HGFou3mUwMw"
  // let baby_birthday = "26FPpSuhgHvYo9Kyk"
  // let congrats_toast = "g9582DNuQppxC"
  // let terrified = "iDNuU8ThJuaF74iEG9"
  // let homer_in_bush = "jUwpNzg9IcyrK"
  // let happy_dancing = "BlVnrxJgTGsUw"


  // axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=Fn7q3cMgPZmqk,OPU6wzx8JrHna,UlqLDtI8Qc0j6,YVPwi7L2izTJS,1BXa2alBjrCXC,l1J9u3TZfpmeDLkD6,1398cRUI5r3aww,r1HGFou3mUwMw,26FPpSuhgHvYo9Kyk,g9582DNuQppxC,iDNuU8ThJuaF74iEG9,jUwpNzg9IcyrK,BlVnrxJgTGsUw")
  // .then(
  //   (response) => {
  //     let urlArray = response.data.data;
  //     const newURLArray = urlArray.map(item => item.images.downsized.url)
  //     console.log(newURLArray)
  //     // const urlx = response.data.data[0].images.downsized.url;

  //     console.log(response)
  //   }
  // )


});