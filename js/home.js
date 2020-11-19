

let slider = document.querySelector('.uk-slider-items')


fetch("https://api.themoviedb.org/3/trending/all/week?api_key=764e5562e5fed92cb370d453ac0ed8a3")
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data.results);
    let info = data.results;
    
    for(let i=0; i<info.length; i++){
        slider.innerHTML += `<li>
                                <a href="detallep.html?id=${info[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                    <div class="uk-position-center uk-panel">
                                    </div>
                                </a>
                            </li>`
    }

})
.catch(error => console.log(error));  



let sliderdos = document.querySelector('.peli')
fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=764e5562e5fed92cb370d453ac0ed8a3")
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data.results);
    let infomovie = data.results;
    
    for(let i=0; i<infomovie.length; i++){
        sliderdos.innerHTML += `<ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m"><li>
                                <a href="detallep.html?id=${infomovie[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${infomovie[i].poster_path}" alt="">
                                    <div class="uk-position-center uk-panel">
                                    </div>
                                </a>

                            </li> 
              
           
                            </ul>` 
    }

})
.catch(error => console.log(error)); 




fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=764e5562e5fed92cb370d453ac0ed8a3")
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data.results);
    let infotv = data.results;
    
    for(let i=0; i<infotv.length; i++){
        slider.innerHTML += `<li>
                                <a href="detallep.html?id=${infotv[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${infotv[i].poster_path}" alt="">
                                    <div class="uk-position-center uk-panel">
                                    </div>
                                </a>
                            </li>`
    }

})
.catch(error => console.log(error)); 