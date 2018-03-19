import React from "react";
class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedPlayer: 'A'
        }
    }
    newGame = () => {
        this.props.game.newGame(this.state.selectedPlayer);
    }
    joinGame = () => {
        this.props.game.joinGame(this.state.selectedPlayer);
    }
    render(){
        return (
            <div className="fill" style={{
                background: '#000',
            }}>
                <div style={{padding:'3em 0 0 3em'}}>
                <span style={{fontSize:'3em'}}>Summon Wars</span><br/> I'm player
                {
                    ['A','B'].map(choice => {
                        return <button 
                            className={this.state.selectedPlayer == choice ? 'selected' : ''}
                            onClick={()=>{this.setState({
                                selectedPlayer:choice
                            })}}
                            >{choice}</button>
                    })
                }
                <br/>
                <button style={{fontSize:'1em'}} onClick={this.newGame}>New Game</button>
                <button style={{fontSize:'1em'}} onClick={this.joinGame}>Join Game</button>
                </div>
                <style jsx>{`
                .selected{
                    background:#335;
                    color:#fff;
                }
                `}</style>
            </div>
        );
    }
};

export default Menu;