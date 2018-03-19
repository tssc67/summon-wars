const Card = require('./card');
class MonsterCard extends Card {
    constructor(){
        super();
        this.name = '';
        this.type = '';
        this.code = 0;
        this.ID = 0;
    }

    useSkill(){
    }
}

module.exports = MonsterCard;