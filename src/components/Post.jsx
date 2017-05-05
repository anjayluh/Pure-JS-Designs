import React from 'react';
import '../index.css';

function Post() {
  const profilePhoto = 'download.jpg';
  const userName = 'ENews!';
  const message = 'North Korea state media slams China; suggests Trump is ignorant';
  const myPost = 'images.jpg';
  const datePosted = new Date().toLocaleDateString();
  const timePosted = new Date().toLocaleTimeString();
  // likes: '',
  // comments: '',
  return (
    <div id="posts">
      <p>
        <img src="(./images + {profilePhoto})" id="profilePhoto" alt="profilePhoto" />
        &nbsp; {userName}
      </p>
      <ul>{message}
      </ul>
      <img src="(./images + {this.myPost})" id="myPost" alt="myPost" />
      <div>
        {datePosted}
        &nbsp; &nbsp;
        {timePosted}
      </div>
    </div>
  );
}
export default Post;
