const MonsterCard = require('../monsterCard.js');
class YoukaiMonsterCard extends MonsterCard {

}
class YoukaiMonsterCard1 extends YoukaiMonsterCard{
    constructor() {
        super();this.name='Youkai1';
        this.type='';
        this.code = 'you1';
        this.ID = 0;

    }

}
class YoukaiMonsterCard2 extends YoukaiMonsterCard{
    constructor() {
        super();this.name='Youkai2';
        this.type='';
        this.code = 'you2';
        this.ID = 0;

    }

}
class YoukaiMonsterCard3 extends YoukaiMonsterCard{
    constructor() {
        super();this.name='Youkai3';
        this.type='';
        this.code = 'you3';
        this.ID = 0;

    }
}
class YoukaiMonsterCard4 extends YoukaiMonsterCard{
    constructor() {
        super();this.name='Youkai4';
        this.type='';
        this.code = 'you4';
        this.ID = 0;
        this.usedTurn = 0;
        this.coolDown = 6;

    }
    useSkill(gameController,monsterField) { //currentPlayer's monsterField
        if (this.usedTurn== 0 || gameController.turn - this.usedTurn >= this.coolDown) {
            for (let i = 0;i<player.jailpool.length;i++) {
                if (player.jailpool[i] instanceof SupportCard && player.jailpool[i].type == 'trap') {
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
    YoukaiMonsterCard1,
    YoukaiMonsterCard2,
    YoukaiMonsterCard3,
    YoukaiMonsterCard4
]