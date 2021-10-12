const apiKey  = "4a76b54";

function fetchMovies(){
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=parasite`)
    .then(response => response.json())
    .then(data => 
        console.log(data))
};

window.onload = function(){
    fetchMovies();
};


