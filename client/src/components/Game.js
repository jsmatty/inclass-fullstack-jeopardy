import React, { Component } from 'react';

class Game extends Component {
  render() {
    return (
      <div>
        Hello from Game
        {this.props.match.params.gameId}
      </div>
    );
  }
}

export default Game;