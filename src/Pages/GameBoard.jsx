import React from "react";
import Player from "../components/Player";
import "./GameBoard.css"

class GameBoard extends React.Component {
  render = () => {
    return (
      <div className="GameBoard">
        <Player name="player1" initialScore="0" totalScore="0"/>
        <Player name="player2" initialScore="1" totalScore="1"/>
      </div>
    );
  };
}

export default GameBoard;
