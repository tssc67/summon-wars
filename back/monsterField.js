class MonsterField{
    constructor(){
        this.slot = [[],[],[]];
        this.attackSlot = [false,false,false];
    }

    add(card){
        var needToStack = false;
        var stackNo = 0;

        for(let i = 0 ; i < 3 ; i++){
            if(this.slot[i].length == 0)continue;
            const slotClass = Object.getPrototypeOf(this.slot[i][0].constructor).name;
            const cardClass = Object.getPrototypeOf(card.constructor).name;
            if(slotClass == cardClass) {
                needToStack = true;
                stackNo = i;
                
                break;
            }
        }
        if(needToStack){
            this.slot[stackNo].push(card);
            return {
                ok:true
            };
        }
        else{
            if(this.slot[0].length 
                && this.slot[1].length 
                && this.slot[2].length) {
                    return {
                        ok: false,
                        err: 'Summonning failed. Slot full'
                    }
            }
            for(let i=0;i<3;i++){
                if(this.slot[i].length == 0) {
                    this.slot[i].push(card)
                    return {
                        ok:true
                    }
                }    
            }
        }
        console.log(this.slot);
        return {
            ok:false,
            err: 'Summonning failed. Slot full'
        };
    }

    removeTopStack(index,jailpool){
        jailpool.slot.
        this.slot[index] = this.slot[index].shift(1);

    }

    destroy(player,index){
        player.jailpool.push(slot[index]);
        slot[index] = null;
    }
}

module.exports = MonsterField;