import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    setInterval(() => this.updateCurrentTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  updateCurrentTime() {
    this.setState({
      currentTime: (new Date()).toString()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
