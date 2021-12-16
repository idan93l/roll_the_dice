import React from "react";
import "./player.css";

class Player extends React.Component {
  render = () => {
    return (
      <div className="Player">
        <h1>{this.props.name}</h1>
        <h1>current score: {this.props.initialScore}</h1>
        <h1>score: {this.props.totalScore}</h1>
      </div>
    );
  };
}

export default Player;
