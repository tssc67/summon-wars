import React from "react";
import * as THREE from 'three';
import Menu from '../src/components/menu';
class App extends React.Component {
    constructor(props){
        super(props)
        const Game = require('../src/game');
        const inst = new Game.default();
        this.game = inst;
    }
    componentDidMount = () => {
        this.game.start();
        this.refs.container.replaceChild(this.game.renderer.base.domElement,this.refs.canvas)
    }
    render(){
        return (
            <div id="container" ref="container">
                <style jsx global>{`
                body { 
                    margin:0;
                    background: #111;
                    font: 20px menlo;
                    color: #fff;
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
                
            </div>
        );
    }
};

export default App;