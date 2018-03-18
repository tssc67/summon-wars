const MonsterCard = require('./monsterCard.js');
class DemonMonsterCard extends MonsterCard {

}
class DemonMonsterCard1 extends DemonMonsterCard{
    constructor() {
        this.name='Demon1';
        this.type='';
        this.code = 'dem1';
        this.ID = 0;

    }

}
class DemonMonsterCard2 extends DemonMonsterCard{
    constructor() {
        this.name='Demon2';
        this.type='';
        this.code = 'dem2';
        this.ID = 0;

    }

}
class DemonMonsterCard3 extends DemonMonsterCard{
    constructor() {
        this.name='Demon3';
        this.type='';
        this.code = 'dem3';
        this.ID = 0;

    }

}
class DemonMonsterCard4 extends DemonMonsterCard{
    constructor() {
        this.name='Demon4';
        this.type='';
        this.code = 'dem4';
        this.ID = 0;
        this.coolDown=10;
        this.usedTurn=0;

    }
    useSkill(gameController,monsterField) { //opponent's monsterField
        if (this.usedTurn== 0 || gameController.turn - this.usedTurn >= this.coolDown) {
            for (let i = 0;i<2;i++) {
                if (monsterField.slot[i].length==4) {
                    for (let j=0;j<3;j++) {
                        if (monsterField.slot[i][j].type=='skilled') {
                            monsterField.slot[i][j].usedTurn = gameController.turn;
                        }
                    }
                }
            }
            this.usedTurn = gameController.turn;
        }
        else {
            sendState(); //tell player he can't use skill etc.
        }
    }

}
exports.allClass = [
    DemonMonsterCard1,
    DemonMonsterCard2,
    DemonMonsterCard3,
    DemonMonsterCard4
]