import React from "react";
import Player from "../components/Player";
import OptionsContainer from "../components/OptionsContainer.jsx";
import "./GameBoard.css";

class GameBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      pointsToWin: 20,
      die1: null,
      die2: null,
      playersTurn1: true,
      playersTurn2: false,
      winner: false,
      player1Score: 0,
      player2Score: 0,
      player1CurrentScore: 0,
      player2CurrentScore: 0,
    };
  }

  changeTurn = () => {
      if(this.state.playersTurn1) {
        this.setState({playersTurn1: false});
        this.setState({playersTurn2: true});
      } else {
        this.setState({playersTurn1: true});
        this.setState({playersTurn2: false});
      }
  }

  randomDice = () => {
    this.setState({ die1: Math.ceil(Math.random() * 6) });
    this.setState({ die2: Math.ceil(Math.random() * 6) });
  };

  newGame = () => {
    this.setState({ die1: null });
    this.setState({ die2: null });
    this.setState({ playersTurn: 0 });
    this.setState({ winner: false });
    this.setState({ player1Score: 0 });
    this.setState({ player2Score: 0 });
    this.setState({ player1CurrentScore: 0 });
    this.setState({ player2CurrentScore: 0 });
  };

  render = () => {
    // console.log(this.state.die1);
    console.log(`player1 ${this.state.playersTurn2}`);
    console.log(`player2 ${this.state.playersTurn1}`);
    return (
      <div className="GameBoard">
        <Player
          name="player 1"
          score={this.state.player1Score}
          currentScore={this.state.player1CurrentScore}
        />
        <OptionsContainer
          winPoints={this.state.pointsToWin}
          randomize={this.randomDice}
          newGame={this.newGame}
          changeTurn={this.changeTurn}
          die1={this.state.die1}
          die2={this.state.die2}
        />
        <Player
          name="player 2"
          score={this.state.player2Score}
          currentScore={this.state.player2CurrentScore}
        />
      </div>
    );
  };
}

export default GameBoard;
