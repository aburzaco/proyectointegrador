//slider por AJV

let media ="movie";
let timeWindow = "week";
let apiKey = "764e5562e5fed92cb370d453ac0ed8a3";
let url = `https://api.themoviedb.org/3/trending/${media}/${timeWindow}?api_key=${apiKey}`;

let slider = document.querySelector('.uk-slider-items')


fetch(url)
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
.catch(error => console.log(error))

