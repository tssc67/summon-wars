import * as THREE from 'three';
class Renderer{
    constructor(canvas){
        this.keys = {};
        this.lastIntersects = [];
        this.raycaster = new THREE.Raycaster();
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.base = new THREE.WebGLRenderer({
        });
        this.base.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.base.domElement );
        this.mouse = {};
        window.addEventListener( 'mousemove', (e)=>{
            this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            if(!this.lastOverObject && this.mouseOverObject) {
                if(this.mouseOverObject.onEnter){
                    this.mouseOverObject.onEnter();
                }
                if(this.mouseOverObject._onEnter){
                    this.mouseOverObject._onEnter();
                }
            }
            if(this.lastOverObject && !this.mouseOverObject) {
                if(this.lastOverObject.onLeave){
                    this.lastOverObject.onLeave();
                }
                if(this.lastOverObject._onLeave){
                    this.lastOverObject._onLeave();
                }
            }
        }, false );
        
        window.addEventListener('mousedown', (e) => {
            if(this.mouseOverObject && this.mouseOverObject.onClick) {
                this.mouseOverObject.onClick();
            }
        })
        const procKeyDown = (key) => {
            console.log(key);
            switch(key){
                case '-':
                this.camera.position.y += 0.5;
                break;
                case '=':
                this.camera.position.y -= 0.5;
                break;
            }
        }
        window.addEventListener('keydown', (e) => {
            procKeyDown(e.key);
            this.keys[e.key] = true;
        })
        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        })
    }
    render(){
        const procKey = () => {
            const camSpeed = 0.05;
            this.scene.rotation.y -= this.keys['ArrowLeft'] ? camSpeed : 0;
            this.scene.rotation.y += this.keys['ArrowRight'] ? camSpeed : 0;
            this.scene.rotation.x += this.keys['ArrowUp'] ? camSpeed : 0;
            this.scene.rotation.x -= this.keys['ArrowDown'] ? camSpeed : 0;
        }
        procKey();
        this.raycaster.setFromCamera( this.mouse, this.camera );
        this.lastOverObject = this.mouseOverObject;
        this.mouseOverObject = null;
        var intersects = this.raycaster.intersectObjects( this.scene.children );
        this.lastIntersects.forEach(intersect => {
            const obj = intersect.object;
            obj.material.color.set(obj.material._oldColor);
        });
        for ( var i = 0; i < intersects.length; i++ ) {
            const obj = intersects[ i ].object
            obj.material._oldColor = obj.material.color.getHex();
            obj.material.color.set( 0x303055 );
            this.mouseOverObject = obj;
        }
        this.lastIntersects = intersects;
        this.base.render(this.scene, this.camera);
    }
}

export default Renderer;