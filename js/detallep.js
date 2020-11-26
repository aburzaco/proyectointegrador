let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let id = queryObject.get ('id');
console.log(id);

let apiKey = "764e5562e5fed92cb370d453ac0ed8a3"
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

let elementos = document.querySelector('.elementos')
let descripcion = document.querySelector('.middle-uno')
let titulo = document.querySelector('.titulo')
let generos = document.querySelector ('.tipos-g')
let companias = document.querySelector('.tipos-c')
let release = document.querySelector('.tipos-r')
let foto = document.querySelector('.foto')
let votos = document.querySelector('.votos')
let tag = document.querySelector('.infodesktop')
fetch(url)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data)
    let genero = data.genres
    console.log(genero);
    let company = data.production_companies
    console.log(company);
    let poster = data.backdrop_path
    console.log(poster);

   /*  if(data.media_type == "tv"){
        titulo.innerHTML+= `<h2>${data.original_name}<h2>`
    } else if (data.media_type == "movie"){
      titulo.innerHTML += `<h2>${data.title}</h2>`
    } */
    tag.innerHTML += ` <p class="tag">${data.tagline}</p>`
    titulo.innerHTML += `<h2 class="titu" >${data.title}</h2>`
    votos.innerHTML += 
                        `<p class="valor">" Vote% ${data.vote_average} "</p>`
    descripcion.innerHTML +=
                           ` 
                            <p class="descripcion"> "${data.overview}"</p>`

    release.innerHTML += 
                        `<p class= "release" >  ${data.release_date}</p>`
    if(poster == ""){
        foto.innerHTML +=
                `<img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">`
     } else{
        foto.innerHTML+= `<img src="https://image.tmdb.org/t/p/w500/${poster}" alt="">`
     }
    for(let i=0; i<genero.length; i++){
    generos.innerHTML += 
                       `<a href= "generodetalle.html?id=${genero[i].id}" >${genero[i].name}, </a>`
                    }

 for(let i=0; i<company.length; i++){
     companias.innerHTML += 
                            `<a href= "" >${company[i].name}</a>`
 } 
                        
 /*favs*/
 let storage = localStorage.getItem('favoritosPeli')
 console.log(storage);
 if (storage===null){
     localStorage.setItem('favoritosPeli', '[]')
 }
 

 let button =document.querySelector('.favoritos')
 console.log(button);
 let storageJs =JSON.parse(storage)
 if(storageJs.includes(id)){
    button.innerHTML = '<i class="fas fa-minus"></i> Remove from favourites'
 }
 button.addEventListener('click', function(){
     
     
    
     if(!storageJs.includes(id)){
         storageJs.push(id)
        
         button.innerHTML = '<i class="fas fa-minus"></i> Remove from favourites'
     }else{
         storageJs = storageJs.filter (function(movie){
             return movie != id
         })
         button.innerHTML = '<i class="fas fa-plus"></i>  Add to favourites'
     }
     localStorage.setItem('favoritosPeli',JSON.stringify(storageJs))
     

    

   
 })

})
.catch(error => console.log(error))


function sacarDeFavoritos(){
    
     
     
   
    if(!storageJs.includes(id)){
        storageJs.push(id)
        let storageJs =JSON.parse(storage)
        
    }else{
        storageJs = storageJs.filter (function(movie){
            return movie != id
        })
    }
    localStorage.setItem('favoritos',JSON.stringify(storageJs))
    

   

   }




//slider

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
                                <a href="detallep.html?id=${info[i].id}"> 
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                  
                                </a>
                            </li>`
    }
        
})
.catch(error => console.log(error))

fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US&page=1`)

.then(function (respuestas){
    return respuestas.json()
})
.then(function(data){
	console.log(data)
	let rev = data.results
	let reviews = document.querySelector ('.reviews')

	for(let i=0; i<rev.length; i++){
		reviews.innerHTML += 
							`
							<p>${rev[i].author}: ${rev[i].content}</p>`
	}
})

.catch(error => console.log(error))



fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US`)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data)
    let cast = data.cast
    console.log(cast);
    let actores = document.querySelector ('.actores')

    for(let i=0; i<cast.length; i++){
        actores.innerHTML += 
                                `<a href= "actor.html?id=${cast[i].id}"> ${cast[i].name}, </a>`
    }

})

.catch(error => console.log(error))
