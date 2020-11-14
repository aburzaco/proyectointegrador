let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let search = queryObject.get ('search');
console.log(search);


let apiKey = "764e5562e5fed92cb370d453ac0ed8a3"
let url = `https://api.themoviedb.org/3/search/${search}?api_key=764e5562e5fed92cb370d453ac0ed8a3&language=en-US&page=1&include_adult=false`
fetch(url)
.then(function (respuestas){
    return respuestas.json()
})

.then(function(data){
    console.log(data);
    
})
.catch(error => console.log(error))