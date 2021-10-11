
import team from './team.js'

let team1 = new team ("poky", "me", "pokemon");

let list = [];
let pokemon = [];
function fetchPokemonDatabase() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => {
        /* console.log(data.results); */
        list = data.results;
        list.forEach(p => {
            fetch(p.url)
            .then(response => response.json())
            .then (data => {
                /* console.log(data); */
                pokemon.push(data);
            }) 
        })

    });
}

function showPokemon(){
    let number = 0;
    console.log(list, pokemon);
    const htmllist = document.getElementById("list")
    console.log(htmllist)
    pokemon.forEach(poke => {
        htmllist.insertAdjacentHTML("beforeend", 
        `<div class="pokemon">
        <img class="Picture" src="${poke.sprites.front_shiny}" alt="picture of a pokemon">
        <figcaption >
            nr: ${number+=1}
        </figcaption>
        <h1 >${poke.name} </h1>
        <div class="types" >
        <h2 class="${poke.types[0].type.name}" id="${number}">${poke.types[0].type.name} </h2>
        </div> 
        <button type="button">Add to team!</button> </br> </br>
        <div>`);
        console.log(poke.types.length);
        console.log(number);
        if (poke.types.length == 2){
            let type1 = document.getElementById(number);
            console.log(type1);
           type1.insertAdjacentHTML("afterend",`<h2 class="${poke.types[1].type.name}" > ${poke.types[1].type.name} </h2>`); 
        }
    }
)}

window.onload = function (){
    fetchPokemonDatabase();
    setTimeout(showPokemon,3000);
}


