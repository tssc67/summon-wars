const SupportCard = require('./supportCard.js');
class sup5 extends SupportCard {
    constructor() {
        this.name = 'sup5';
        this.type = 'active';
        this.code = 0;
        this.ID = 0;
    }
    useSkill(supportField,slotIndex) {
        if (supportField.slot[slotIndex].type == 'trap') {
            supportField.destroy(slotIndex);
            sendState();
        }
    }
}