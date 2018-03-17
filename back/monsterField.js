class MonsterField{
    constructor(){
        this.slot = [];
    }

    add(card){
        var needToStack = false;
        var stackNo = 0;
        if(slot[0] && slot[1] && slot[3]) sendState(); // all slot is full
        for(let i = 0 ; i < 3 ; i++){
            if(slot[i].getPrototypeOf(card)) needToStack = true;
            stackNo = i;
        }
       if(needToStack){
        let newStack = [];   
        this.slot[stackNo].unshift(card);
       }
       else{
        let newStack = [];   
        this.slot[this.slot.indexOf(null)] = newStack.push(card);
        }
    }

    removeTopStack(index){
        this.slot[ndex] = this.slot[index].shift(1);
    }

    destroy(index){
        slot[index] = null;
    }
}

module.exports = MonsterField;