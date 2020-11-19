let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let search = queryObject.get ('search');
console.log(search);


let apiKey = "764e5562e5fed92cb370d453ac0ed8a3"
let url = `https://api.themoviedb.org/3/search/multi?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US&query=${search}&page=1&include_adult=false`

let resultados = document.querySelector('.resultados')
let nombre = document.querySelector ('')

fetch(url)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data);
    let info = data.results;

    for (let i=0; i<info.length; i++){
        if(info[i].media_type == "tv"){
            /* resultados.innerHTML += `<li>Serie: ${info[i].original_name}</li>` */
            resultados.innerHTML += `<li>
                                        <a href="detalles.html?id=${info[i].id}">
                                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                         </a>
                                    </li>`
        } else if (info[i].media_type == "movie"){
            /* resultados.innerHTML += `<li>Pelicula: ${info[i].title}</li>` */

            resultados.innerHTML += `<li>
                                        <a href="detallep.html?id=${info[i].id}">
                                            <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                        </a>
                                    </li>`
        }
        
    }
    
})
.catch(error => console.log(error))