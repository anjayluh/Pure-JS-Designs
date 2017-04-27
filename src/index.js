import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game.jsx';

// Include square
const square = require('./Square.jsx');

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
