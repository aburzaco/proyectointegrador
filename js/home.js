fetch("https://api.themoviedb.org/3/trending/all/week?api_key=764e5562e5fed92cb370d453ac0ed8a3")
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data.results);
    let info = data.results;
    let slider = document.querySelector('.all .uk-slider-items')
    
    for(let i=0; i<info.length; i++){
        if(info[i].media_type == "tv"){
        slider.innerHTML += `<li>
                                <a href="detalles.html?id=${info[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                    <div class="uk-position-center uk-panel">
                                    </div>
                                </a>
                            </li>`
        }
        else if(info[i].media_type == "movie"){
            slider.innerHTML += `<li>
                                    <a href="detallep.html?id=${info[i].id}">
                                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                        <div class="uk-position-center uk-panel">
                                        </div>
                                    </a>
                                </li>`
        }
    }

})
.catch(error => console.log(error));  




fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=764e5562e5fed92cb370d453ac0ed8a3")
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data.results);
    let infomovie = data.results;
    let slider = document.querySelector('.peli .uk-slider-items')
    for(let i=0; i<infomovie.length; i++){
        slider.innerHTML += `<li>
                                <a href="detallep.html?id=${infomovie[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${infomovie[i].poster_path}" alt="">
                                    <div class="uk-position-center uk-panel">
                                    </div>
                                </a>

                            </li> 
              
           
                            ` 
    }

})
.catch(error => console.log(error)); 




fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=764e5562e5fed92cb370d453ac0ed8a3")
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data.results);
    let infotv = data.results;
    let slider = document.querySelector('.serie .uk-slider-items')
    for(let i=0; i<infotv.length; i++){
        slider.innerHTML += `<li>
                                <a href="detalles.html?id=${infotv[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${infotv[i].poster_path}" alt="">
                                    <div class="uk-position-center uk-panel">
                                    </div>
                                </a>
                            </li>`
    }

})
.catch(error => console.log(error));


/*peli principal*/

fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=764e5562e5fed92cb370d453ac0ed8a3`)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data.results);
    let info = data.results;
    let peli = document.querySelector('.peli-principal')
    let titulo = document.querySelector('.titulo')
    let desc = document.querySelector ('.descripcion')
    let detalle = document.querySelector('.but')
    
        peli.innerHTML += `<img src="https://image.tmdb.org/t/p/w500${info[0].backdrop_path}" alt="">`
        titulo.innerText = `${info[0].title}`
        desc.innerText = `${info[0].overview}`
        detalle.innerHTML +=`<a role="button" href="detallep.html?id=${info[0].id}" class="button" class="detalle">  <i class="fas fa-info-circle"></i>More details</a>`

})
.catch(error => console.log(error))