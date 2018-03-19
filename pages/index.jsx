import React from "react";
import * as THREE from 'three';
import Menu from '../src/components/menu';
import PlayerMenu from '../src/components/playerMenu';
class App extends React.Component {
    constructor(props){
        super(props)
        const Game = require('../src/game');
        const inst = new Game.default();
        this.game = inst;
        this.mouse = {
            x:0,
            y:0
        }
    }
    componentDidMount = () => {
        this.game.start();
        this.refs.container.replaceChild(this.game.renderer.base.domElement,this.refs.canvas)
        this.game.container = this;
        window.addEventListener( 'mousemove', (e)=>{
            this.mouse.x = event.clientX;
            this.mouse.y = event.clientY;
            this.forceUpdate();
        }, false );
    }
    render(){
        return (
            <div id="container" ref="container">
                <style jsx global>{`
                body { 
                    margin:0;
                    background: #111;
                    font: 20px 'Segoe UI',Helvetica;
                    color: #fff;
                    overflow:hidden;
                }
                #container > * {
                    position:absolute;
                }
                .fill {
                    width:100%;
                    height:100%;
                }
                `}</style>
                <canvas ref="canvas" style={{
                    width: '100%',
                    height: '100%',
                }}></canvas>
                {
                    this.game.state.showMenu ? <Menu game={this.game} ref="menu"/> : null
                }
                {
                    this.game.state.showMenu ? null : <PlayerMenu game={this.game} ref="playerMenu"/> 
                }
                {
                    this.game.state.tooltip.visible
                    ?
                    <div 
                    ref="tooltip"
                    style={{
                        left: `${this.mouse.x}px`,
                        top: `${this.mouse.y}px`,
                        padding:'1em',
                        background:'#333333'
                    }}>
                        {this.game.state.tooltip.text}
                    </div>                
                    : null
                }
            </div>
        );
    }
};

export default App;