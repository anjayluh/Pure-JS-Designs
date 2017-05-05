import React from 'react';
import '../App.css';
import Post from './Post.jsx';

function App(props) {
  return (
    <div className="facebook">
      <div className="toolbar">
        <Post />
      </div>
      <div>
        <p className="comment">
        Likes Comments
      </p>
      </div>
    </div>
  );
}

export default App;
