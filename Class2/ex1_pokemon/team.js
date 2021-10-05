class Team {
    constructor(teamname){
        this.teamname = teamname;
        this.trainer = "Rebecca";
        this.pokemonteam = [];
    }
    describe(){
        let description = `<div> Team ${this.teamname}, trained by ${this.trainer} consists of ${[...this.pokemonteam]} </div>`;
        return description
    }

}

export default Team;