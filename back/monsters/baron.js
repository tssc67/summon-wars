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
        this.count = 0;

    }
    useSkill(gameController,player,card1,card2) { //card1 card2 are the card
        if (this.count==0) {
            
        }
    }

}
exports.allClass = [
    BaronMonsterCard1,
    BaronMonsterCard2,
    BaronMonsterCard3,
    BaronMonsterCard4
]