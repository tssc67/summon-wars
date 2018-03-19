import Renderer from './renderer';
import * as THREE from 'three';
class Game {
    constructor(){
        this.state = {
            showMenu: true, 
        }
    }
    gameLoop(){
        
    }
    start(){
        this.renderer = new Renderer();
        this.socket = require('./socket');
        this.socket.onmessage = this.messageHandler;
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.renderer.scene.add( this.cube );
        this.renderer.camera.position.z = 5;
        const loop = () => {
            requestAnimationFrame(loop);
            this.gameLoop();
            this.renderer.render();
        }
        loop();
    }
    newGame(player){
        this.socket.sendMessage({
            type:'NEW_GAME',
            player,
        });
    }
    joinGame(player){
        this.socket.sendMessage({
            type:'HELLO',
            player,
        })
    }
    messageHandler(data){

    }
}

export default Game; 