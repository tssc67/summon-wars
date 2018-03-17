class sup4 extends supportCard {
    constructor() {
        this.name = 'sup4';
        this.type = 'active';
        this.code = 0;
        this.ID = 0;
    }
    useSkill(supportField,slotIndex) {
        if (supportField.slot[slotIndex].type == 'defense') {
            supportField.destroy(slotIndex);
            sendState();
        }
    }
}