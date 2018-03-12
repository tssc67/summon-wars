import Renderer from './renderer';
import * as THREE from 'three';
class Game {
    constructor(){
        this.renderer = new Renderer();
    }

    testModel(){
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.renderer.scene.add( this.cube );
        this.renderer.camera.position.z = 5;
    }

    start(){
        const loop = () => {
            requestAnimationFrame(loop);
            this.cube.rotation.x += 0.1;
            this.cube.rotation.y += 0.1;
            this.renderer.render();
        }
        loop();
    }
}

export default Game; 