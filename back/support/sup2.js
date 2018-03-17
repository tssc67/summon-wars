class sup2 extends supportCard {
    constructor() {
        this.name = 'sup2';
        this.type = 'active';
        this.code = 0;
        this.ID = 0;
    }
    useSkill(player) {
        var supportRecycle = [];
        for (let i = 0;i<player.jailpool.length;i++) {
            if (player.jailpool[i] instanceof SupportCard) {
                supportRecycle.push(player.jailpool[i]);
            }
        }
        let j = Math.floor(Math.random()*supportRecycle.length) + 1;
        
        player.deck.push(supportRecycle[j]);
    }
}