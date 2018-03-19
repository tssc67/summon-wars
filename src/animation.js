import * as THREE from 'three';
class Animation {
    constructor(){
        this.clock = new THREE.Clock({autoStart:true});
        this.animatables = [];
    }
    processAnimation(){

    }
    async animate(length,proc,end){
    }
    get time(){
        return this.clock.getElapsedTime;
    }
}