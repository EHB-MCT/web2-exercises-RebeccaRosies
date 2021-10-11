class Team {
    constructor(teamname, trainer,team){
        this.teamname = teamname;
        this.trainer = trainer;
        this.pokemonteam = [...team];
    }
    describe(){
        let description = `<div> Team ${this.teamname}, trained by ${this.trainer} consists of ${[...this.pokemonteam]} </div>`;
        return description
    }

}

export default Team;