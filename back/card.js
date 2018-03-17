class Card{
    constructor(){
        this.name = '';
        this.type = '';
        this.code = 0;
        this.ID = 0;
    }
    /*
    summon(field){
        switch(field){
            case 'monsterField':
            if(monster = monsterField.find(this.code)){
                monster.addStack(this);
            } 
            else{
                monsterField.add(this);
            }
            break;

            case 'supportField':
                SupportField.add(this);
            break;
        }
    }
*/
    useSkill(target){
    }

}

module.exports = Card;