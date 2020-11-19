let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let id = queryObject.get ('id');
console.log(id);

let peliculas = document.querySelector ('.peliculas')
let nombre= document.querySelector('.nombre')

fetch(`
https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US`)
.then(function (respuestas){
    return respuestas.json()
})
.then(function(data){
    console.log(data)
    let cast = data.cast
    console.log(cast);
    
    for(let i=0; i<cast.length; i++){
        if(cast[i].media_type == "tv"){
            peliculas.innerHTML += 
                                ` <a href="detalles.html?id=${cast[i].id}"><img src="https://image.tmdb.org/t/p/w500${cast[i].poster_path}"></a>`
        }else if (cast[i].media_type == "movie"){
         peliculas.innerHTML += 
                                ` <a href="detallep.html?id=${cast[i].id}"><img src="https://image.tmdb.org/t/p/w500${cast[i].poster_path}" alt=""></a>`

        }
    }

})
.catch(error => console.log(error))

let bio = document.querySelector ('.info')
let foto = document.querySelector ('.actriz')

fetch(`https://api.themoviedb.org/3/person/${id}?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US`)
.then(function (respuestas){
    return respuestas.json()
})
.then(function(data){
    console.log(data)
    nombre.innerText = `${data.name}`
    bio.innerText = `${data.biography}`
    foto.innerHTML += 
                    `<img src="https://image.tmdb.org/t/p/w500${data.profile_path}" >`
})
.catch(error => console.log(error))