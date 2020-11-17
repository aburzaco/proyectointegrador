let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let id = queryObject.get ('id');
console.log(id);

let apiKey = "764e5562e5fed92cb370d453ac0ed8a3"
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

let elementos = document.querySelector('.elementos')

fetch(url)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data)
    elementos.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`
   
    
})
.catch(error => console.log(error))



