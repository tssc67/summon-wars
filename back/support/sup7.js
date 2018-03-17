class sup7 extends supportCard {
    constructor() {
        this.name = 'sup7';
        this.type = 'trap';
        this.code = 0;
        this.ID = 0;
    }
    useSkill(player1,player2,slotIndex) {
        player1.shield = true;
        GameController.attacked(player2,slotIndex);
    }
}