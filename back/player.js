
class Player{
    constructor(code){
        //this.name = name;
        this.HP = 3;
        this.code = code;
        this.deck = []; 
        this.hand = [];
        this.jailpool = [];
        this.shield = false;

    }

    decreaseHP(){
        if(this.HP < 0) this.HP = 0;
        else
        this.HP -= 1;
    }

    draw(){
        if(this.deck.length){
            this.hand.push(this.deck.shift(1));
        }
    }
}
module.exports = Player;