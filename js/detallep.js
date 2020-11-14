let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let id = queryObject.get ('id');
console.log(id);


let apiKey = "764e5562e5fed92cb370d453ac0ed8a3"
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
fetch(`id`)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data)
    let poster = document.querySelector('.foto')
   poster.src = `https://image.tmdb.org/t/p/w500${backdrop_path}`
    
})
.catch(error => console.log(error))