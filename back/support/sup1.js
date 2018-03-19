const SupportCard = require('./supportCard.js');
class sup1 extends SupportCard {
    constructor() {
        this.name = 'sup1';
        this.type = 'buff';
        this.code = 0;
        this.ID = 0;
    }
    useSkill(supportField,monsterField) {
        let index = supportField.slot.indexOf(this);
        monsterField.attackSlot[index] = false;

    }
}
module.exports = sup1;