import React from "react";
import Game from '../src/game';
import * as THREE from 'three';
class App extends React.Component {
    componentDidMount = () => {
        const inst = new Game();
        inst.testModel();
        inst.start();
    }
    render(){
        return (
            <div>

                    <style jsx global>{`
                    body { 
                        margin:0;
                        background: #000;
                        font: 11px menlo;
                        color: #fff;
                    }
                    `}</style>
    
            </div>
        );
    }
};

export default App;