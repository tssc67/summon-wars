import Renderer from './renderer';
import * as THREE from 'three';

class Game{
    constructor(container){
        this.container = container;
        this.cardObjs = [];
        this.state = {
            showMenu: true, 
            currentPlayer: '-',
            selectingTarget: null,
            tooltip: {
                visible: false,
                text: 'Tooltip'
            }
        }
    }
    createCard(){
        const geometry = new THREE.BoxGeometry( 1, 0.031,1.5 );
        const material = new THREE.MeshBasicMaterial( { color: 0x333333 } );
        const cube = new THREE.Mesh( geometry, material );
        this.renderer.scene.add( cube );
        cube.isMouseIn = false;
        cube._onEnter = () => {
            cube.isMouseIn = true;
            this.state.tooltip.visible = true;
            this.state.tooltip.text = cube._card ? JSON.stringify(cube._card): 'Empty field';
            this.container.forceUpdate();
        }
        cube._onLeave = () => {
            cube.isMouseIn = false;
            this.state.tooltip.visible = false;
            this.container.forceUpdate();
        }
        return cube;
    }
    gameLoop(){
    }
    nullCardTooltip(){

    }
    setupModel(){
        const setupField = () =>{
            this.monsterFields = [null,null,null];
            this.supportFields = [null,null,null];
            this.eMonsterFields = [null,null,null];
            this.eSupportFields = [null,null,null];
            this.monsterFields.forEach((slot,idx) => {
                const card = this.createCard();
                card.material.color.set(0xffffff);
                this.monsterFields[idx] = card;
                card.position.x = -2.25 + idx * 1.5
            })
            this.supportFields.forEach((slot,idx) => {
                const card = this.createCard();
                card.material.color.set(0xffffff);
                this.supportFields[idx] = card;
                card.position.x = -2.25 + idx * 1.5
                card.position.z = 2.5;
            })
            this.eMonsterFields.forEach((slot,idx) => {
                const card = this.createCard();
                card.material.color.set(0xff0000);
                this.eMonsterFields[idx] = card;
                card.position.x = -2.25 + idx * 1.5
                card.position.z = -2.5;
            })
            this.eSupportFields.forEach((slot,idx) => {
                const card = this.createCard();
                card.material.color.set(0xff0000);
                this.eSupportFields[idx] = card;
                card.position.x = -2.25 + idx * 1.5
                card.position.z = -5.0;
            })
        }
        setupField();
        this.renderer.camera.position.y = 10;
        this.renderer.camera.lookAt(new THREE.Vector3(0,0,0));
    }
    start(){
        this.renderer = new Renderer();
        this.socket = require('./socket');
        this.socket.setHandler(this.messageHandler);
        this.setupModel();
        const loop = () => {
            requestAnimationFrame(loop);
            this.gameLoop();
            this.renderer.render();
        }
        loop();
    }
    newGame(player){
        this.sendMessage({
            type:'NEW_GAME',
            _player:player,
        });
    }
    joinGame(player){
        this.sendMessage({
            type:'HELLO',
            _player:player,
        })
    }
    nextPhase(){
        this.sendMessage({
            type:'NEXT_PHASE',
        })
    }
    sendMessage(message){
        this.socket.sendMessage({
            ...message,
            player: this.state.currentPlayer
        })
    }
    draw(){
        this.sendMessage({
            type: 'DRAW',
        })
    }
    summon(code){
        this.sendMessage({
            type: 'SUMMON',
            code
        })
    }
    updateCard(){
        // update hand
        const hand = this.state.hand;
        if(hand.length < this.cardObjs.length){
            console.log(i,'hidden');
            for(var i = hand.length;i<this.cardObjs.length;i++){
                this.cardObjs[i].visible = false;
                if(this.cardObjs[i].isMouseIn){
                    this.state.tooltip.visible = false;
                }
            }
        } else if (hand.length > this.cardObjs.length){
            while(this.cardObjs.length < hand.length){
                this.cardObjs.push(this.createCard(this.cardObjs.length));
                const l = this.cardObjs.length;
                // this.cardObjs.position.x = - (1 * this.cardObjs + 0.5 * (this.cardObjs - 1)) / 2
            }
        }
        hand.forEach((card,idx) => {
            // console.log(this.cardObjs)
            this.cardObjs[idx]._card = card;
            this.cardObjs[idx].onEnter = () => {
                this.state.tooltip.visible = true;
                this.state.tooltip.text = JSON.stringify(card)
                this.container.forceUpdate();
            }
            this.cardObjs[idx].onClick = () => {
                this.summon(card.code);
            }
            this.cardObjs[idx].visible = true;
            const l = hand.length
            this.cardObjs[idx].position.x = - (1 * l + 0.5 * (l - 1)) / 2 + idx * 1.5;
            this.cardObjs[idx].position.z = 5;
        });
        
        //
        function swap(iam){
            return iam == 'A' ? 'B' : 'A';
        }
        this.monsterFields.forEach((card,idx) => {
            let tCard = this.state.monsterFields[this.state.iam].slot[idx];
            // tCard = tCard[tCard.length-1];
            
            if(tCard && tCard.length) {
                card._card = tCard;
                card.material.color.set(0x333355)
                card.onClick = () => {
                    this.state.selectingTarget = tCard[0].code;
                    console.log(this.state.selectingTarget);
                    console.log("Select card to atatakc")
                }
            } else {
                delete card._card;
                card.material.color.set(0xffffff)
            }
        })
        this.supportFields.forEach((card,idx) => {
            let tCard = this.state.supportFields[this.state.iam].slot[idx];
            if(tCard) {
                card._card = tCard;
                card.material.color.set(0x333355)
            } else {
                delete card._card;
                card.material.color.set(0xffffff)
            }
        })
        this.eMonsterFields.forEach((card,idx) => {
            let tCard = this.state.monsterFields[swap(this.state.iam)].slot[idx];
            // tCard = tCard[tCard.length-1];
            if(tCard && tCard.length) {
                card._card = tCard;
                card.material.color.set(0x553333);
                card.onClick = () => {
                    console.log("ATtacking");
                    console.log(this.state.selectingTarget);
                    if(!this.state.selectingTarget)return;
                    this.sendMessage({
                        type: 'ATTACK',
                        source: this.state.selectingTarget,
                        target: tCard[0].code
                    })
                }
            } else {
                delete card._card;
                card.material.color.set(0xff0000)
            }
        })
        this.eSupportFields.forEach((card,idx) => {
            let tCard = this.state.supportFields[swap(this.state.iam)].slot[idx];
            if(tCard) {
                card._card = tCard;
                card.material.color.set(0x333355)
            } else {
                delete card._card;
                card.material.color.set(0xff0000)
            }
        })
    }
    messageHandler = (data) => {
        switch(data.type) {
            case 'GAME_STATE':
            if(this.state.showMenu){
                this.state.showMenu = false;
            }
            this.state = {
                ...this.state,
                ...data.state
            }
            console.log(this.state);
            if(this.state.winner){
                alert("Game ended " + this.state.winner + " is a");
            }
            this.updateCard();
            this.container.forceUpdate();
            break;
            case 'ALERT':
            alert(data.message);
        }
    }
}

export default Game; 