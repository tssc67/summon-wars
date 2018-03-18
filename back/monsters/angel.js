class AngelMonsterCard extends MonsterCard {
    
}
class AngelMonsterCard1 extends AngelMonsterCard{
    constructor() {
        this.name='Angel1';
        this.type='';
        this.code = 'ang1';
        this.ID = 0;

    }
}
class AngelMonsterCard2 extends AngelMonsterCard{
    constructor() {
        this.name='Angel2';
        this.type='';
        this.code = 'ang2';
        this.ID = 0;

    }

}
class AngelMonsterCard3 extends AngelMonsterCard{
    constructor() {
        this.name='Angel3';
        this.type='';
        this.code = 'ang3';
        this.ID = 0;

    }

}
class AngelMonsterCard4 extends AngelMonsterCard{
    constructor() {
        this.name='Angel4';
        this.type='skilled';
        this.code = 'ang4';
        this.ID = 0;
        this.coolDown=10;
        this.usedTurn=0;   
    }
    useSkill(gameController,monsterField) { //currentPlayer's monsterField
        if (this.usedTurn== 0 || gameController.turn - this.usedTurn >= this.coolDown) {
            for (let i = 0;i<2;i++) {
                if (monsterField.slot[i].length==4) {
                    for (let j=0;j<3;j++) {
                        if (monsterField.slot[i][j].type=='skilled') {
                            monsterField.slot[i][j].usedTurn = 0;
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
    AngelMonsterCard1,
    AngelMonsterCard2,
    AngelMonsterCard3,
    AngelMonsterCard4
]