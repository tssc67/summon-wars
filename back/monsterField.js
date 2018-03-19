class MonsterField{
    constructor(){
        this.slot = [[],[],[]];
        this.attackSlot = [false,false,false];
    }

    add(card){
        var needToStack = false;
        var stackNo = 0;
        if(this.slot[0].length 
        && this.slot[1].length 
        && this.slot[2].length) {
            return sendState(); // all slot is full
        }
        for(let i = 0 ; i < 2 ; i++){
            if(this.slot[i].length == 0)continue;
            const slotClass = Object.getPrototypeOf(this.slot[i][0]).name;
            const cardClass = Object.getPrototypeOf(card).name;
            if(slotClass == cardClass) needToStack = true;
            stackNo = i;
        }
        console.log(stackNo);
        if(needToStack){
            this.slot[stackNo].push(card);
        }
        else{
            for(let i=0;i<2;i++){
                if(slot[i].length == 0) {
                    this.slot[i].push(card)
                }    
            }
        }
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