class sup1 extends supportCard {
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