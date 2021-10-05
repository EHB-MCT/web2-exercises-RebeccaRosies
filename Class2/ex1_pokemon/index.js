
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
        console.log(list, pokemon);
        const htmllist = document.getElementById("list")
        pokemon.forEach(poke => {
            htmllist.insertAdjacentHTML("afterbegin", 
            `<img class="Picture" src="${poke.sprites.front_shiny}" alt="picture of a pokemon">
            <figcaption >
                nr: 
            </figcaption>
            <h1 >name:${poke.name} </h1>
            <section >
                <div>property1:${poke.types[0].type.name}</div>
            </section>
            <button type="button">Add to team!</button> </br> </br>`)   
        })
    }

window.onload = function (){
    fetchPokemonDatabase();
    setTimeout(showPokemon,3000);
}


