import React from 'react';
import Board from './Board.jsx';
import Tick from './Tick.jsx';
import Clock from './Clock.jsx';

export default function Game(props) {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div>
        <Tick />
        <Clock />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
