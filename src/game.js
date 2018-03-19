import Renderer from './renderer';
import * as THREE from 'three';

class Game{
    constructor(container){
        this.container = container;
        this.cardObjs = [];
        this.state = {
            showMenu: true, 
            currentPlayer: '-',
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
        cube.onEnter = () => {
            this.state.tooltip.visible = true;
            this.container.forceUpdate();
        }
        cube.onLeave = () => {
            this.state.tooltip.visible = false;
            this.container.forceUpdate();
        }
        return cube;
    }
    gameLoop(){
    }
    setupModel(){
        const setupField = () =>{
            this.monsterFields = [null,null,null];
            this.supportFields = [null,null,null];
            this.eMonsterFields = [null,null,null];
            this.eSupportFields = [null,null,null];
            this.monsterFields.forEach((slot,idx) => {
                const card = this.createCard();
                this.monsterFields[idx] = card;
                card.position.x = -2.25 + idx * 1.5
            })
            this.supportFields.forEach((slot,idx) => {
                const card = this.createCard();
                this.supportFields[idx] = card;
                card.position.x = -2.25 + idx * 1.5
                card.position.z = 2.5;
            })
            this.eMonsterFields.forEach((slot,idx) => {
                const card = this.createCard();
                this.monsterFields[idx] = card;
                card.position.x = -2.25 + idx * 1.5
                card.position.z = -2.5;
            })
            this.eSupportFields.forEach((slot,idx) => {
                const card = this.createCard();
                this.supportFields[idx] = card;
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

        const hand = this.state.hand;
        if(hand.length < this.cardObjs.length){
            for(var i = this.cardObjs[this.hand.length];i<cardObjs.length;i++){
                this.cardObjs[i].visible = false;
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
            this.cardObjs[idx].onEnter = () => {
                this.state.tooltip.visible = true;
                this.state.tooltip.text = JSON.stringify(card)
                this.container.forceUpdate();
            }
            this.cardObjs[idx].onClick = () => {
                this.summon(card.code);
            }
            this.cardObjs[idx].visible = true;
            const l = this.cardObjs.length
            this.cardObjs[idx].position.x = - (1 * l + 0.5 * (l - 1)) / 2 + idx * 1.5;
            this.cardObjs[idx].position.z = 5;
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
                console.log("Game ended " + this.state.winner);
            }
            this.updateCard();
            this.container.forceUpdate();
            break;
        }
    }
}

export default Game; 