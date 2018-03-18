const SupportCard = require('./supportCard.js');
class sup6 extends SupportCard {
    constructor() {
        this.name = 'sup6';
        this.type = 'defense';
        this.code = 0;
        this.ID = 0;
    }
    useSkill(player) {
        player.shield = true;
    }
}