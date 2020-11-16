let media ="movies";
let timeWindow = "week";
let apiKey = "764e5562e5fed92cb370d453ac0ed8a3";
let url = `https://api.themoviedb.org/3/trending/${media}/${timeWindow}?api_key=${apiKey}`;
let tendencias = document.querySelector( '.tendencias')

fetch(url)
    .then(function(respuestas){
        return respuestas.json();
    })
    .then (function(data){
        console.log(data);

        let info= data.results 
        //let id = info.id
        //console.log(id);
        for (let i=0; i<info.length; i++){

            tendencias.innerHTML = 
                                        ` <a href="detallep.html?id{info[i].id}"><img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="fiebredeladrillo"></a>
                                       
                                        <a href="detallep.html?id{info[i].id}"><img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}"  alt="hastaelutimo"></a>
                                       
                                        <a href="detallep.html?id{info[i].id}"><img  src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="macdonals"></a>
                                       
                                        <a href="detallep.html?id{info[i].id}"><img  src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}"  alt="toystory"></a>
                                       
                                        <a class="loimposible" href="detallep.html?id{info[i].id}"><img src="img/loimposible.jpeg""https://image.tmdb.org/t/p/w500/${info[i].poster_path}"  alt="loimposible"></a>`
                                } 
    })