class SupportField{
    constructor(){
        this.slot = [null,null,null];
    }

    add(card){
        if(slot[0]!=null && slot[1]!=null && slot[3]!=null) sendState(); // all slot is full
        else{
            slot[slot.indexOf(null)] = card;
        }
    }

    destroy(index,player){
        player.jailpool.push(slot[index]);
        slot[index] = null;
    }
}
module.exports = SupportField;