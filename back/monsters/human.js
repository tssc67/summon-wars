class HumanMonsterCard extends MonsterCard {

}
class HumanMonsterCard1 extends HumanMonsterCard{
    constructor() {
        this.name='Human1';
        this.type='';
        this.code = 'hum1';
        this.ID = 0;

    }

}
class HumanMonsterCard2 extends HumanMonsterCard{
    constructor() {
        this.name='Human2';
        this.type='';
        this.code = 'hum2';
        this.ID = 0;

    }

}
class HumanMonsterCard3 extends HumanMonsterCard{
    constructor() {
        this.name='Human3';
        this.type='';
        this.code = 'hum3';
        this.ID = 0;

    }


}
class HumanMonsterCard4 extends HumanMonsterCard{
    constructor() {
        this.name='Human4';
        this.type='';
        this.code = 'hum4';
        this.ID = 0;
        this.usedTurn =0;
        this.coolDown = 6;

    }
    useSkill(gameController,monsterField,player) { //currentPlayer's monsterField
        if (this.usedTurn== 0 || gameController.turn - this.usedTurn >= this.coolDown) {
            for (let i = 0;i<player.jailpool.length;i++) {
                if (player.jailpool[i] instanceof SupportCard && player.jailpool[i].type == 'defense') {
                    player.deck.push(player.jailpool[i]);
                    player.jailpool.splice(i,1);
                }
            }
        }
        else {
            sendState(); //tell player he can't use skill etc.
        }
    }

}
exports.allClass = [
    HumanMonsterCard1,
    HumanMonsterCard2,
    HumanMonsterCard3,
    HumanMonsterCard4
]