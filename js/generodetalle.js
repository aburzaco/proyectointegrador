
let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let id= queryObject.get ('id');
console.log(id);
let media = "movie"


fetch(`https://api.themoviedb.org/3/discover/${media}?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
.then(function (respuestas){
    return respuestas.json()
})
.then(function(data){
    console.log(data);
    let peliculas = document.querySelector ('.ps-accion')
    let info = data.results
    console.log(info);

 
   
    for(let i=0; i<info.length; i++){
        
        peliculas.innerHTML += 
                                `<a href="detallep.html?id=${info[i].id}"><img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt=""></a>`
    }


})
.catch(error => console.log(error))

let mediaDos = "tv"

fetch(`https://api.themoviedb.org/3/discover/${mediaDos}?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
.then(function (respuestas){
    return respuestas.json()
})
.then(function(data){
    console.log(data);
    let peliculas = document.querySelector ('.ps-accion')
    let info = data.results
    console.log(info);
  
    for(let i=0; i<info.length; i++){
        
        peliculas.innerHTML += 
                                `<a href="detalles.html?id=${info[i].id}"><img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt=""></a>`
    }


})
.catch(error => console.log(error))

let generoMovie = document.querySelector('.nombre')


fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US')
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data.genres);
   	let genres = data.genres;
    
    for(let i=0; i<genres.length; i++){
        if (genres[i].id== id){
        generoMovie.innerText = `	${genres[i].name}`
        }
    }
        
})
.catch(error => console.log(error))
