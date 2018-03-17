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
        this.count = 0;
    }
    useSkill(gameController,monsterField) {
        if (this.count==0) {
            for (let i = 0;i<2;i++) {
                if (monsterField.slot[i].length==4) {
                    for (let j=0;i<3;j++) {
                        if (monsterField.slot[i][j].type=='skilled') {
                            monsterField.slot[i][j].count = 0;
                        }
                    }
                }
            }
            this.count = this.coolDown;
        }
    }

}
exports.allClass = [
    AngelMonsterCard1,
    AngelMonsterCard2,
    AngelMonsterCard3,
    AngelMonsterCard4
]