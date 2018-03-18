const MonsterCard = require('./monsterCard.js');
class GypsyMonsterCard extends MonsterCard {

}
class GypsyMonsterCard1 extends GypsyMonsterCard{
    constructor() {
        this.name='gypsy1';
        this.type='';
        this.code = 'gyp1';
        this.ID = 0;

    }

}
class GypsyMonsterCard2 extends GypsyMonsterCard{
    constructor() {
        this.name='gypsy2';
        this.type='';
        this.code = 'gyp2';
        this.ID = 0;
    }

}
class GypsyMonsterCard3 extends GypsyMonsterCard{
    constructor() {
        this.name='gypsy3';
        this.type='';
        this.code = 'gyp3';
        this.ID = 0;

    }

}
class GypsyMonsterCard4 extends GypsyMonsterCard{
    constructor() {
        this.name='gypsy4';
        this.type='';
        this.code = 'gyp4';
        this.ID = 0;
        this.coolDown=8;
        this.usedTurn=0;

    }
    useSkill(gameController,cardIndex1,cardIndex2) { //cardIndex1 cardIndex2 = index of card in opponent hand that player wants 
        if (this.usedTurn==0 || gameController.turn - this.usedTurn >= this.coolDown) {
            let opponent = (gameController.currentPlayer == players.A) ? gamerController.players.B : gameController.players.A;
            gameController.currentPlayer.hand.push(opponent.deck[cardIndex1],opponent.deck[cardIndex2]);
            this.usedTurn==gameController.turn;
        }
        else {
            sendState(); //can't use skill
        }
    }

    }


exports.allClass = [
    GypsyMonsterCard1,
    GypsyMonsterCard2,
    GypsyMonsterCard3,
    GypsyMonsterCard4
]