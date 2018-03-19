const Card = require('./card');

class SupportCard extends Card{
    constructor(){
        this.name = '';
        this.type = '';
        this.code = 0;
        this.ID = 0;
    }

    useSkill(){
    }
}

module.exports = SupportCard;
