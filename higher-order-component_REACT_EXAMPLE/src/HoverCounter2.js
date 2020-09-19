import React, { Component } from "react";
import HOCCounter from "./HOCCounter";

class HoverCounter2 extends Component {
  render() {
    let { count, increment } = this.props;
    return <h1 onMouseOver={increment}>with hoc Hovered {count} times</h1>;
  }
}

export default HOCCounter(HoverCounter2);
