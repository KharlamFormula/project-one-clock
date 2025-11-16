import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      timer: new Date().toLocaleTimeString()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({ timer: new Date().toLocaleTimeString() });
  };

  render() {
    return (
      <div style={{ textAlign: "center", margin: "20px" }}>
        <p className="timer">{this.state.timer}</p>
      </div>
    );
  }
}
