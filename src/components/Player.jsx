import React from "react";
import "./player.css";

class Player extends React.Component {
  constructor() {
    super();
  }

  render = () => {
    return (
      <div className="Player">
        <h1>{this.props.name}</h1>
        <h1>current score:</h1>
        <h1>score:</h1>
      </div>
    );
  };
}

export default Player;
