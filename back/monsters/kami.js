class KamiMonsterCard extends MonsterCard {

}
class KamiMonsterCard1 extends KamiMonsterCard{
    constructor() {
        this.name='Kami1';
        this.type='';
        this.code = 'kam1';
        this.ID = 0;

    }

}
class KamiMonsterCard2 extends KamiMonsterCard{
    constructor() {
        this.name='Kami2';
        this.type='';
        this.code = 'kam2';
        this.ID = 0;

    }

}
class KamiMonsterCard3 extends KamiMonsterCard{
    constructor() {
        this.name='Kami3';
        this.type='';
        this.code = 'kam3';
        this.ID = 0;

    }

}
class KamiMonsterCard4 extends KamiMonsterCard{
    constructor() {
        this.name='Kami4';
        this.type='';
        this.code = 'kam4';
        this.ID = 0;
        this.usedTurn = 0;
        this.coolDown = 8;

    }
    useSkill(gameController) { //I feel like this one is likely to have a bug
        let opponent = (gameController.currentPlayer == players.A) ? gamerController.players.B : gameController.players.A;
        if (this.usedTurn== 0 || gameController.turn - this.usedTurn >= this.coolDown) {
            for (let i =0;i<opponent.deck.length;i++) {
                if (opponent.deck[i].type == 'trap') {
                    opponent.jailpool.push(opponent.deck[i]);
                    opponent.deck.splice(i,1);
                }
            }
        }
        this.count = this.coolDown;
    }

}
exports.allClass = [
    KamiMonsterCard1,
    KamiMonsterCard2,
    KamiMonsterCard3,
    KamiMonsterCard4
]