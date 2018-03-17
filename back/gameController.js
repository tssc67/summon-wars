const CardDB;
class GameController{
    constructor(){
        this.players = {
            A: new Player(),
            B: new Player()
        };
        this.currentPlayer = null;
        this.phase = new Phase();
    }
    pickFirstPlayer(){
        this.currentPlayer = (Math.random() > 0.5) ? this.players.A : this.players.B;
        return this.currentPlayer;
    }
    drawPhase(){
        if(this.currentPlayer.deck.length === 0){
            this.endGame(this.currentPlayer == this.players.A ? this.players.B: this.players.A);
        }
        this.currentPlayer.draw();
        this.currentPlayer.drawCount = 1;
        this.sendState();
    }
    setup(){
        function shuffle(arr){
            return arr.map(ele => ({
                value,
                score: Math.random()
            }))
            .sort((a,b)=>a.score-b.score)
            .map(ele=>ele.value);
        }
        function split(arr){
            const half = Math.floor(arr.length/2);
            return [
                arr.slice(0,half),
                arr.slice(half,arr.length)
            ];
        }
        const supportCards = CardDB.getSupportCards();
        const monsterCardGroups = shuffle(CardDB.getMonsterCardGroups());
        const [AMonsterCardGroups,BMonsterCardGroups] = split(monsterCardGroups);
        const [ASupportCards,BSupportCards] = split(supportCards);
        const ACards = shuffle([...ASupportCards, ...[].concat(...AMonsterCardGroups)]);
        const BCards = shuffle([...BSupportCards, ...[].concat(...BMonsterCardGroups)]);
        this.players.A.deck = ACards;
        this.players.B.deck = Bcards;

    }
getSupportCards(){
    
}

getMonsterCardGroups(){

}

endGame(){
        //TODO
    }
summonPhase(){
        
    }
    onInput(action){
        switch(action.type){
            case 'DRAW':
            this.currentPlayer.draw();
            this.sendState();
            break;
            case 'END_DRAW':
            this.phase.next(this);
            break;
            case 'SUMMON':
            this.currentPlayer.summon();
            this.sendState();
            break;
        }
    }
}

