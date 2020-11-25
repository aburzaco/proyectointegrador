let storage = localStorage.getItem('favoritos')
console.log(storage);
if(storage==null){
    localStorage.setItem('favoritos', '[]')
}
let storageJs =JSON.parse(storage)


let favoritos = document.querySelector('.favoritos')
storageJs.forEach(id =>{
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=764e5562e5fed92cb370d453ac0ed8a3`)
    .then(datos => datos.json())
    .then(respuesta=>{
        console.log(respuesta);
   
        favoritos.innerHTML += ` <a href="detalles.html?id=${respuesta.id}"><img src="https://image.tmdb.org/t/p/w500${respuesta.poster_path}" alt=""></a>`
        
      
    })
    
})

storageJs.forEach(id =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=764e5562e5fed92cb370d453ac0ed8a3`)
    .then(datos => datos.json())
    .then(respuesta=>{
        console.log(respuesta);
   
        favoritos.innerHTML += ` <a href="detallep.html?id=${respuesta.id}"><img src="https://image.tmdb.org/t/p/w500${respuesta.poster_path}" alt=""></a>`
        
      
    })
    
})