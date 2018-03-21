const CardDB = require('./cardDB');
const Player = require('./player');
const Phase = require('./phase');
const SupportField = require('./supportField');
const MonsterField = require('./monsterField');
const MonsterCard = require('./monsterCard');
const SupportCard = require('./supportCard');
const server = require('./server');
class GameController{
    constructor(){

        this.players = {
            A: new Player('A'),
            B: new Player('B')
        };
        this.currentPlayer = null;
        this.phase = new Phase();
        this.turn = 0;
        this.supportFields = {
            A: new SupportField(),
            B: new SupportField()
        };
        this.monsterFields = {
            A: new MonsterField(),
            B: new MonsterField()
        };
        this.winner = null;

    }
    pickFirstPlayer(){
        this.currentPlayer = this.players.A;
        // this.currentPlayer = (Math.random() > 0.5) ? this.players.A : this.players.B;
        return this.currentPlayer;
    }
    drawPhase(){
        if(this.currentPlayer.deck.length == 0){
            this.endGame(this.currentPlayer == this.players.A ? this.players.B: this.players.A);
        }
        this.currentPlayer.draw();
        this.currentPlayer.drawCount = 1;
        this.sendState();
    }
    setup(){
        function shuffle(arr){
            return arr.map(ele => ({
                value: ele,
                score: Math.random()
            }))
            .sort((a,b)=>a.score-b.score)
            .map(ele=>ele.value);
        }
        function split(arr){
            const half = Math.floor(arr.length/2);
            return [
                arr.slice(0,half),
                arr.slice(half,arr.length)
            ];
        }
        const supportCards = CardDB.getSupportCards();
        const monsterCardGroups = shuffle(CardDB.getMonsterCardGroups());
        const [AMonsterCardGroups,BMonsterCardGroups] = split(monsterCardGroups);
        const [ASupportCards,BSupportCards] = split(supportCards);
        const ACards = shuffle([...ASupportCards, ...[].concat(...AMonsterCardGroups)])
        .map(card => new card());
        const BCards = shuffle([...BSupportCards, ...[].concat(...BMonsterCardGroups)])
        .map(card => new card());
        this.players.A.deck = ACards;
        this.players.B.deck = BCards;

    }

    endGame(player){
        this.winner = player.code;
        console.log("game ended");
        this.sendState();
    }
    summonPhase(){
        //TODO
    }
    attackPhase(){
    }
    supportPhase(){
        //TODO
    }
    summon(monsterField,supportField,card){
        if(card instanceof MonsterCard){
            return monsterField.add(card);
        }else if(card instanceof supportCard){
            return supportField.add(card);
        }
    }
      
    attacked(player,slotIndex){
        if (!player.shield) {
        if(attackedMonster == null) {
            player.descreaseHP();
            if(player.HP == 0) this.endGame(this.currentPlayer);
        }
        if(attackedMonster.getStackNumber == 1) player.monsterField.destroy(slotIndex);
        else player.monsterField.removeTopStack(slotIndex);
    }
    else {
        player.shield = false;
        sendstate();
       }
      
}

    attacking(monsterField,slotIndex) {
        if (monsterField.attackSlot[slotIndex] == false) {
        monsterField.attackSlot[slotIndex] =true;
        }
        else sendState();
      
    }
    useSkill(player,card){
        card.useSkill();
    }

    switchPlayer(){
        this.currentPlayer = this.players.A == this.currentPlayer ? this.players.B : this.players.A;
    }
    onInput(action){
        const code = this.currentPlayer.code;
        switch(action.type){
            case 'DRAW':
            this.currentPlayer.draw();
            this.sendState();
            break;
            case 'END_DRAW':
            this.phase.next(this);
            break;
            case 'SUMMON':
            const summonStatus = this.summon(
                this.monsterFields[code],
                this.supportFields[code],
                CardDB.getCardByCode(action.code)
            );
            if(!summonStatus.ok) {
                this.sendAlert(code,summonStatus.err);
            } else {
                const idx = this.currentPlayer.hand.findIndex(card => card.code == action.code);
                this.currentPlayer.hand.splice(idx,1);
            }
            this.sendState();
            break;
            case 'ATTACK':
            this.currentPlayer.attack();
            this.sendState();
            case 'END_TURN' :
            this.turn++;
            switchPlayer();
            break;
            case 'NEXT_PHASE':
            this.phase.next(this);
            break;
            case 'SUPPORT':
            this.phase.next(this);
            break;
        }
    }
    getListener() {
        return (data)=>{
            switch(data.type){
                case 'NEXT_PHASE':
                this.onInput(data);
                break;       
                case 'DRAW':
                this.onInput(data);
                break;
                case 'SUMMON':
                this.onInput(data);
                break;
            }
        }
    }
    sendAlert(player, message){
        const data = {
            type: 'ALERT',
            message
        };
        server.sendMessage(player,data);
    }
    sendState(){
        const message = {
            type: 'GAME_STATE',
            state: {
                currentPlayer: this.currentPlayer.code,
                phase: this.phase.current,
            }   
        };
        ['A','B'].forEach(player => {
            const _message = {
                ...message,
                state: {
                    ...message.state,
                    deck: this.players[player].deck.length,
                    hand: this.players[player].hand,
                    monsterFields: this.monsterFields,
                    supportFields: this.supportFields,
                    winner: this.winner,
                    iam: player
                },
            };
            server.sendMessage(player,_message);
        })
    }
}

module.exports = GameController