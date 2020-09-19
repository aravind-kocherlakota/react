import React, { Component } from "react";
import HOCCounter from "./HOCCounter";

class Counter2 extends Component {
  render() {
    let { count, increment } = this.props;
    return <button onClick={increment}>with hoc Cicked {count} times</button>;
  }
}

export default HOCCounter(Counter2);
