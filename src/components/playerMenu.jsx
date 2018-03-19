import React from "react";
class PlayerMenu extends React.Component {
    constructor(props){
        super(props);
    }
    nextPhase = ()=>{
        this.props.game.nextPhase();
    }
    draw = () => {
        this.props.game.draw();
    }
    render(){
        return (
            <div style={{
                right:0,
                color:'white'
            }}>
            Player's menu<br/>
            Current turn : {this.props.game.state.currentPlayer}<br/>
            Current phase :
            <table>
                <tbody>
                <tr>
                {
                    ['TURN','SUMMON','SUPPORT','ATTACK'].map(phase => {
                        return <td key={phase} style={{
                            background: this.props.game.state.phase == phase
                             ? '#303055' : ''
                        }}>{phase}</td>
                    })

                }
                </tr>
                </tbody>
            </table>
            Deck left : {this.props.game.state.deck}<br/>
            <button onClick={this.nextPhase}> Next Phase</button><br/>
            <button onClick={this.draw}>Draw!</button>
            </div>
        );
    }
};

export default PlayerMenu;