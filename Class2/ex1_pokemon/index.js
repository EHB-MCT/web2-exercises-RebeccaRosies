
import team from './team.js'

let team1 = new team ("poky", "me", []);

let list = [];
let pokemon = [];
let number = 0;
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
    /* console.log(list, pokemon); */
    const htmllist = document.getElementById("list")
   /*  console.log(htmllist) */
    pokemon.forEach(poke => {
        htmllist.insertAdjacentHTML("beforeend", 
        `<div class="pokemon" id = "pokemon${number}">
        <img class="Picture" src="${poke.sprites.front_shiny}" alt="picture of a pokemon">
        <figcaption >
            nr: ${number+=1}
        </figcaption>
        <h1 >${poke.name} </h1>
        <div class="types" >
        <h2 class="${poke.types[0].type.name}" id="${number}">${poke.types[0].type.name} </h2>
        </div> 
        <button class="button" id = "button${number}"" type="button">Add to team!</button> </br> </br>
        <div>`);
       /*  console.log(poke.types.length);
        console.log(number); */
        if (poke.types.length == 2){
            let type1 = document.getElementById(number);
            /* console.log(type1); */
           type1.insertAdjacentHTML("afterend",`<h2 class="${poke.types[1].type.name}" > ${poke.types[1].type.name} </h2>`); 
        }
      
    }
)

let buttons = document.getElementsByClassName("button");
for (let button of buttons) {
    button.addEventListener("click", () => {
        addToTeam(button.id);
        /* console.log(button.id); */
    });}

}

function addToTeam(buttonId) {
   buttonId = buttonId.substring(6);
   console.log(buttonId);
   let chosenPokemon = pokemon[buttonId-1];
   let chosenPokemonName = chosenPokemon.name.charAt(0).toUpperCase() + chosenPokemon.name.slice(1).toLowerCase();
   let messages = document.getElementById("messages");

    if (team1.pokemonTeam.length > 5) {
        messages.innerHTML = "A team can only contain 6 pokemon!";
        messages.removeAttribute("class");
        messages.classList.add("addFail");
    } else if (team1.pokemonTeam.find(element => element == chosenPokemonName) != undefined) {
        messages.innerHTML = `${chosenPokemonName} is already part of your team!`;
        messages.removeAttribute("class");
        messages.classList.add("addFail");
    } else {
        team1.pokemonTeam.push(chosenPokemonName);
        document.getElementById("team").innerHTML = team1.describe();
        document.getElementById("messages").innerHTML = `${chosenPokemonName} added succesfully to the team!`;
        messages.removeAttribute("class");
        messages.classList.add("addSucces");
    }
}

window.onload = function (){
    fetchPokemonDatabase();
    setTimeout(showPokemon,3000);
    addToTeam();
}


