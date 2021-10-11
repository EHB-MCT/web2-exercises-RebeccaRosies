class Team {
    constructor(teamName, trainer,pokemonTeam){
        this.teamName = teamName;
        this.trainer = trainer;
        this.pokemonTeam = [...pokemonTeam];
    }
    describe(){
        let pokeTeam = [...this.pokemonTeam];
        let description = 
            `<div> Team ${this.teamName}, trained by ${this.trainer} consists of ${[...pokeTeam]} </div>`;
        return description
    }

}

export default Team;