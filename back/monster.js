class Monster{
    constructor(){
        this.stack = [];
    }

    addStack(card){
        this.stack.unshift(card);
    }

    destroy(){
        sendState();
    }

    removeTopStack(){
        this.stack = this.stack.shift(1);
    }

    reordering(target ,from,to){
        this.stack.splice(to,0,target);
        this.stack.splice(1,from);
    }
}