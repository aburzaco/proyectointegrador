let media ="tv";
let timeWindow = "week";
let apiKey = "764e5562e5fed92cb370d453ac0ed8a3";
let url = `https://api.themoviedb.org/3/trending/${media}/${timeWindow}?api_key=${apiKey}`;

let slider = document.querySelector('.uk-slider-items')


fetch(url)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
   /*  console.log(data.results); */
    let info = data.results;
    
    for(let i=0; i<info.length; i++){
        slider.innerHTML += `<li>
                                <a href="detalles.html?id=${info[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                  
                                </a>
                            </li>`
    }
        
})
.catch(error => console.log(error))



/* info de serie */
let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let id = queryObject.get ('id');
console.log(id);

/* let apiKey = "764e5562e5fed92cb370d453ac0ed8a3" */
/* let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`; */

let elementos = document.querySelector('.elementos')

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=764e5562e5fed92cb370d453ac0ed8a3`)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
  console.log(data) 
	elementos.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`
	 
	let detalles = document.querySelector('#detalles')
	/* let info = data.results;
    for(let i=0; i<info.length; i++){
	   detalles.innerHTML += 
							`<section class="middle-uno">
									
									<p>${info[i].overview}</p>

									<div class="infodesktop">
										<p class="edad"> ${info[i].vote_average}</p>
										
							</div>
								
							</section>
							<section class="middle-dos">
									<p><strong> Elenco:</strong> <a href="actor.html">Millie Bobby Brown</a>; <a href="actor.html">Finn Wolfhard</a>; <a href="actor.html">Noah Schnapp</a>; <a href="actor.html">Gaten Matarazzo</a>; <a href="actor.html">Caleb McLaughlin</a>; <a href="actor.html">Joe Keery</a>;<a href="actor.html">Natalia Dyer</a>;
									<a href="actor.html">David Harbour</a>;<a href="actor.html">Charlie Heaton</a>; <a href="actor.html">Sadie Sink</a></p>
									<p><strong> Directores: </strong> <a href="">Matt Duffer</a>; <a href="">Shawn Levy</a>; <a href="">Ross Duffer</a>; <a href="">Sean Astin</a> </p>
									<p> <strong>Año:</strong> <a href="">2016</a></p>
									<p><strong> Géneros:</strong> <a href="generos.html">Ciencia ficción</a>; <a href="generos.html">Tv para adolescentes</a>; <a href="generos.html">Thrillers</a></p>
									<p><strong> Nominaciones: </strong>Premio Óscar al Mejor Maquillaje y Peinado; Teen Choice Award a la Mejor Película de Drama; Premio de la Crítica Cinematográfica al mejor intérprete joven; Critics' Choice Movie Award al Mejor Maquillaje; Teen Choice Award a la Mejor Actriz - Drama, Acción, Aventura; Mejor Maquillaje y Peluquería; Critics' Choice Movie Award al Mejor Guión Adaptado; Teen Choice Award al Mejor Actor de Película de Drama.</p>
								
							</section> `
    } */
    
})
.catch(error => console.log(error))