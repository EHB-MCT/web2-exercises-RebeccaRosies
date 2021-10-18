const apiKey  = "4a76b54";
const form = document.getElementById("searchform");
let counter = 0;
function initfields(){   
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let inputTitle = document.getElementById("inputTitle").value
        console.log(inputTitle);
        fetchMovies(inputTitle);
    })
}

function fetchMovies(Title){
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${Title}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        /* showMovies(data) */
        form.insertAdjacentHTML("afterend", `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${data.Poster}" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id ="addMovie" type="submit" class="btn btn-primary mb-2">+</button>
                            <h5 class="card-title">${data.Title}</h5>
                            <p class="card-text">${data.Plot}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <p class="card-text"> RunTime = ${data.Runtime} </p>
                        </div>
                    </div>
                </div>
            </div>
        `);
    })
};



window.onload = function(){
    initfields();
};


