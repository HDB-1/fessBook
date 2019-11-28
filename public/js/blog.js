'use strict'
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



  const gifs = {'minion_laugh':'Fn7q3cMgPZmqk',
      'patrick_cry' : 'OPU6wzx8JrHna',
      'popcorn_weird' : 'UlqLDtI8Qc0j6',
      'confused_big_glasses' : 'YVPwi7L2izTJS',
      'sad_wine_spill' : '1BXa2alBjrCXC',
      'angry_little_girl': 'l1J9u3TZfpmeDLkD6',
      'carlton' : '1398cRUI5r3aww',
      'damn' : 'r1HGFou3mUwMw',
      'baby_birthday' : '26FPpSuhgHvYo9Kyk',
  'congrats_toast' : 'g9582DNuQppxC',
  'terrified' : 'iDNuU8ThJuaF74iEG9',
   'homer_in_bush' : 'jUwpNzg9IcyrK',
    'happy_dancing' : 'BlVnrxJgTGsUw'}
  const imgIds = ['#minion_gif',  '#patrick_gif', '#popcorn_gif', '#confused_gif', '#sad_gif', '#angry_gif', '#dancing_gif', '#damn_gif', '#birthday_gif', '#toast_gif', '#scared_gif', '#homer_gif', '#excited_gif']
  const radioInputIds = ['#minion', '#patrick', '#popcorn', '#confused', '#sad', '#angry', '#dancing', '#damn', '#birthday', '#toast', '#scared', '#homer', '#excited' ]
  let ids="";
  let altTags = [];
  for (const [gif, id] of Object.entries(gifs)){
    ids+=`${id},`;
    altTags.push(gif);
  }

  axios.get(`https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=${ids}`)
  .then((response) => {
       let gifsDict = [];
       let index = 0;
       const dataArray = response.data.data;
       dataArray.forEach(item => { 
       let url = item.images.downsized.url;
       $(imgIds[index]).attr("src", url)
       $(imgIds[index]).attr("alt", altTags[index])
       $(radioInputIds[index]).val(url)
       $(radioInputIds[index]).val(url)
      
       index++;
});
     
       
   }
  ).catch((err) => console.log(err.message))


});