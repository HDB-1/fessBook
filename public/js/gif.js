$(document).ready(() => {


    axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=Fn7q3cMgPZmqk").then(
        (response) => console.log(response.data.data[0].images.downsized.url)
    )

    axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=OPU6wzx8JrHna").then(

        (response) => console.log(response.data.data[0].images.downsized.url))

    axios.get("https://api.giphy.com/v1/gifs?api_key=Vg9n7RBkEBnIpMlXbYQGvUjSXuOkOtdX&ids=UlqLDtI8Qc0j6").then(
        (response) => console.log(response.data.data[0].images.downsized.url))
});