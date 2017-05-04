import React from 'react';
import '../src/App.css';
import Post from './Post.jsx';

function App(props) {
  return (
    <div className="facebook">
      <div className="toolbar">
        <img src="download.jpg" className="photo" alt="profile" />
        <Post />
      </div>
      <p className="comment">
        Comments here.
      </p>
    </div>
  );
}

export default App;
