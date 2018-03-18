const SupportCard = require('./supportCard.js');
class sup8 extends SupportCard {
    constructor() {
        this.name = 'sup8';
        this.type = 'trap';
        this.code = 0;
        this.ID = 0;
    }
    useSkill(player,monsterField,slotIndex) {
        player.shield = true;
        player.deck.push(monsterField.slot[slotIndex]);
        monsterField.slot[slotIndex].removeTopStack();
        
    }
}