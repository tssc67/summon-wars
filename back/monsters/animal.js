class AnimalMonsterCard extends MonsterCard {

}
class AnimalMonsterCard1 extends AnimalMonsterCard{
    constructor() {
        this.name='Animal1';
        this.type='';
        this.code = 'ani1';
        this.ID = 0;

    }

}
class AnimalMonsterCard2 extends AnimalMonsterCard{
    constructor() {
        this.name='Animal2';
        this.type='';
        this.code = 'ani2';
        this.ID = 0;

    }

}
class AnimalMonsterCard3 extends AnimalMonsterCard{
    constructor() {
        this.name='Animal3';
        this.type='';
        this.code = 'ani3';
        this.ID = 0;

    }

}
class AnimalMonsterCard4 extends AnimalMonsterCard{
    constructor() {
        this.name='Animal4';
        this.type='skilled';
        this.code = 'ani4';
        this.ID = 0;
        this.coolDown= 8;
        this.usedTurn=0;
    }
    useSkill(gameController) { //I feel like this one is likely to have a bug
        let opponent = (gameController.currentPlayer == players.A) ? gamerController.players.B : gameController.players.A;
        if (this.usedTurn== 0 || gameController.turn - this.usedTurn >= this.coolDown) {
            for (let i =0;i<opponent.deck.length;i++) {
                if (opponent.deck[i].type == 'defense') {
                    opponent.jailpool.push(opponent.deck[i]);
                    opponent.deck.splice(i,1);
                }
            }
        }
        this.count = this.coolDown;
    }

}
exports.allClass = [
    AnimalMonsterCard1,
    AnimalMonsterCard2,
    AnimalMonsterCard3,
    AnimalMonsterCard4
]