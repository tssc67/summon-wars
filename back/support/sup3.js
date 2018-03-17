class sup3 extends supportCard {
    constructor() {
        this.name = 'sup3';
        this.type = 'active';
        this.code = 0;
        this.ID = 0;
    }
    useSkill(player) {
        var monsterRecycle = [];
        for (let i = 0;i<player.jailpool.length;i++) {
            if (player.jailpool[i] instanceof MonsterCard) {
                monsterRecycle.push(player.jailpool[i]);
            }
        }
        let j = Math.floor(Math.random()*monsterRecycle.length) + 1;
        
        player.deck.push(monsterRecycle[j]);
    }
}