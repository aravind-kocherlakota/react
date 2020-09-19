import React, { Component } from "react";

class HoverCounter2 extends Component {
  render() {
    const { count, increment } = this.props;
    return <h1 onMouseOver={increment}>RP Hovered {count} times</h1>;
  }
}

export default HoverCounter2;
