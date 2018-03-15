class Phase{
    constructor(){
        this.player1 = "pop";
        this.plyaer2 = "pop2";
        this.current = "INITIAL";
    }
    summonPhase(game){
        game.summonPhase();
    }
    attackPhase(game){
        game.attackPhase();
    }
    next(game){
        switch(this.current){
            case "INITIAL" :
            game.setup();
            const player = game.pickFirstPlayer();
            this.data = player; // "A" || "B"
            this.current = "FINISH_SETUP";
            //TODO: Define message format
            game.sendState();
            break;
            
            case "ATTACK":
            game.switchPlayer();
            this.data = game.currentPlayer;
            
            case "FINISH_SETUP" :
            this.current = "TURN"; 
            game.drawPhase();
            break;
            
            case "TURN":
            this.current = "SUMMON";
            this.summonPhase(game);
            break;
            
            case "SUMMON":
            this.current = "ATTACK";
            this.attackPhase(game);
            break;
        }
    }

}

module.exports = Phase;