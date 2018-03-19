const MonsterCard = require('./monsterCard.js');
class BaronMonsterCard extends MonsterCard {

}
class BaronMonsterCard1 extends BaronMonsterCard{
    constructor() {
        this.name='Baron1';
        this.type='';
        this.code = 'bar1';
        this.ID = 0;

    }

}
class BaronMonsterCard2 extends BaronMonsterCard{
    constructor() {
        this.name='Baron2';
        this.type='';
        this.code = 'bar2';
        this.ID = 0;

    }

}
class BaronMonsterCard3 extends BaronMonsterCard{
    constructor() {
        this.name='Baron3';
        this.type='';
        this.code = 'bar3';
        this.ID = 0;

    }

}
class BaronMonsterCard4 extends BaronMonsterCard{
    constructor() {
        this.name='Baron4';
        this.type='';
        this.code = 'bar4';
        this.ID = 0;
        this.coolDown = 8;
        this.usedTurn = 0;

    }
    useSkill(gameController,cardIndex1,cardIndex2) { //cardIndex1 cardIndex2 = index of card in opponent hand that player wants 
        if (this.usedTurn==0 || gameController.turn - this.usedTurn >= this.coolDown) {
            let opponent = (gameController.currentPlayer == players.A) ? gamerController.players.B : gameController.players.A;
            gameController.currentPlayer.deck.push(opponent.hand[cardIndex1],opponent.hand[cardIndex2]);
            this.usedTurn==gameController.turn;
        }
        else {
            sendState(); //can't use skill
        }
    }

}
exports.allClass = [
    BaronMonsterCard1,
    BaronMonsterCard2,
    BaronMonsterCard3,
    BaronMonsterCard4
]