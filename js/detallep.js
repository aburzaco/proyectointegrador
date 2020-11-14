let id = data.id
fetch(`https://api.themoviedb.org/3/movie/?api_key=764e5562e5fed92cb370d453ac0ed8a3`)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data)
    let poster = document.querySelector('.foto')
   poster.src = `https://image.tmdb.org/t/p/w500${backdrop_path}`
    
})
.catch(error => console.log(error))