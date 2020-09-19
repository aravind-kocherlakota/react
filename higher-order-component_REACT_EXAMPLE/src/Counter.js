import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevValue => {
      return { count: prevValue.count + 1 };
    });
  };

  render() {
    return (
      <button onClick={this.increment}>Cicked {this.state.count} times</button>
    );
  }
}

export default Counter;
