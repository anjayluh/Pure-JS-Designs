import React, { Component } from 'react';

class Likes extends Component {
  constructor() {
    super();
    this.state = {
      Likes: '0',
      userWhoLiked: '[]',
      userName: '',
    };
  }
}
export default Likes;
