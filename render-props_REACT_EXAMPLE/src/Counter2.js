import React, { Component } from "react";

class Counter2 extends Component {
  render() {
    const { count, increment } = this.props;
    return <button onClick={increment}>RP Cicked {count} times</button>;
  }
}

export default Counter2;
