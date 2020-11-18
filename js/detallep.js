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
/*    descripcion.innerHTML +=
                           ` <div class="infodesktop">
                                <p class="edad">"${data.vote_average} "</p>
                                <p class="hora"></p>

                            </div>
                            <p class="descripcion"> "${data.overview}"</p>` */
             
    
})
.catch(error => console.log(error))



//slider por AJV

let media ="movie";
let timeWindow = "week";



let slider = document.querySelector('.uk-slider-items')


fetch(`https://api.themoviedb.org/3/trending/${media}/${timeWindow}?api_key=${apiKey}`)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data.results);
    let info = data.results;
    
    for(let i=0; i<info.length; i++){
        slider.innerHTML += `<li>
                                <a href="detallep.html?id="${info[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                  
                                </a>
                            </li>`
    }
        
})
.catch(error => console.log(error))

