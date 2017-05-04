import React from 'react';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      newPost: '',
    };
  }
  getInitialState() {
    return {
      posts: ['Good morning Kampala', 'About this Saturday', 'Time for that picnic'],
    };
  }
  handlenewPost() {
    this.setState({ newPost: this.newPost.target.value });
    return console.log(this.newPost);
  }
  posts(thePost, userName) {
    return <postName name={this.userName} key={this.thePost} onSubmit={this.handlePost} />;
  }
  render() {
    const posts = this.state.posts;
    return (
      <div id="posts">
        <p> What is on your mind</p>
        <ul>{console.log(posts)}
        </ul>
        <textarea name={this.newPost} value="type here" />
        <button name="submit" value="Submit" onClick={this.handleNewPost} >Post </button>
      </div>
    );
  }
}
export default Post;
