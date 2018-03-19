
class Player{
    constructor(){
        //this.name = name;
        this.HP = 3;
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
        this.hand.push(this.deck[0]);
        this.deck = this.deck.shift(1);
    }
}
module.exports = Player;