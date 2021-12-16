import React from "react";
import Player from "../components/Player";
import "./GameBoard.css"

class GameBoard extends React.Component {
  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="GameBoard">
        <Player name="player1" />
        <Player name="player2" />
      </div>
    );
  };
}

export default GameBoard;
