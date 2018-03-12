import * as THREE from 'three';
class Renderer{
    constructor(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.base = new THREE.WebGLRenderer();
        this.base.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.base.domElement );
    }
    render(){
        this.base.render(this.scene, this.camera);
    }
}

export default Renderer;