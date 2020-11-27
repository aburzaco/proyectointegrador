let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let search = queryObject.get ('search');
console.log(search);
let mediaType = queryObject.get('mediaType'); 

let apiKey = "764e5562e5fed92cb370d453ac0ed8a3"

if(mediaType == "movie"){

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false` 

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
            let info = data.results
            let resultados = document.querySelector('.resultados');
            for (let i = 0; i <info.length; i++) {
                 resultados.innerHTML += `<li>
                                        <a href="detallep.html?id=${info[i].id}">
                                        <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="Image not available: ${info[i].title}">
                                        </a>
                                      </li>`                       
                
                
             }
        })
        .catch(function (error) {
            console.log(error);
        })

}

if(mediaType == "tv"){

    let url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
           
            console.log(data);

            let info = data.results 
            let resultados = document.querySelector('.resultados');
            

            for (let i=0; i<info.length; i++) {
                
                    resultados.innerHTML += `<li>
                                                <a href="detalles.html?id=${info[i].id}">
                                                <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="Image not available: ${info[i].original_name}">
                                                </a>
                                            </li>`  
                } 
        

        })
        .catch(function (error) {
            console.log(error);
        })
}

if(mediaType == "person"){
    
    let url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false` 

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
           
            console.log(data);

            let info = data.results 
            let resultados = document.querySelector('.resultados');
            for (let i=0; i<info.length; i++) {
                    resultados.innerHTML += `<li>
                                                    <a href="actor.html?id=${info[i].id}">
                                                    <img src="https://image.tmdb.org/t/p/w500${info[i].profile_path}" alt="Image not available: ${info[i].name}">
                                                    </a>
                                                 </li>`
                       
                    } 

        })
        .catch(function (error) {
            console.log(error);
        })

}

if(mediaType == "all"){
    

    let url = ` https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false` 

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
    
            console.log(data);

            let info = data.results 
            let resultados = document.querySelector('.resultados');
            console.log(resultados);

            for (let i = 0; i < info.length; i++) {
                if(info[i].media_type == "movie"){
                    resultados.innerHTML += `<li>
                                                    <a href="detallep.html?id=${info[i].id}">
                                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="Image not available: ${info[i].name}">
                                                    </a>
                                            </li>`
                } else if (info[i].media_type == "tv"){
                    resultados.innerHTML += `<li>
                                                <a href="detalles.html?id=${info[i].id}">
                                                <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="Image not available: ${info[i].original_name} ">
                                                </a>
                                             </li>`
                } else {
                    resultados.innerHTML += `<li>
                                                     <a href="actor.html?id=${info[i].id}">
                                                        <img src="https://image.tmdb.org/t/p/w500${info[i].profile_path}" alt="Image not available: ${info[i].name}">
                                                     </a>
                                         </li>`
                }
            }

        })
        .catch(function (error) {
            console.log(error);
        })
}

window.addEventListener ('load', function(){
    let spin = document.querySelector ('.load')
    spin.style.display = "none"
})
