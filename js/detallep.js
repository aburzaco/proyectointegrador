/*let queryString = window.location.search;
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
.catch(error => console.log(error))*/






/* let media ="movies";
let timeWindow = "week";
let apiKey = "764e5562e5fed92cb370d453ac0ed8a3";
let url = `https://api.themoviedb.org/3/trending/${media}/${timeWindow}?api_key=${apiKey}`;
let tendencias = document.querySelector( '.tendencias') */

/* fetch('https://api.themoviedb.org/3/trending/movies/week?api_key=764e5562e5fed92cb370d453ac0ed8a3')
    .then(function(respuestas){
        return respuestas.json();
    })
    .then (function(data){
        console.log(data);

        let info= data.results 
        let pelicula = document.querySelector( '.carousel__elemento ')
        //let id = info.id
		//console.log(id);
		let imagen = document.querySelector ('.pelis ')
        for (let i=0; i<info.length; i++){
/* 
            pelicula.innerHTML += 
                                        ` <a href="detallep.html?id{info[i].id}"><img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt=""></a>
                                       
                                       `
								}  */
		/* 	imagen.src= `https://image.tmdb.org/t/p/w500/${info[i].poster_path}`
			 }
	})
	
	 */ */