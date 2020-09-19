import React, { Component } from "react";

class HoverCounter extends Component {
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
      <h1 onMouseOver={this.increment}>Hovered {this.state.count} times</h1>
    );
  }
}

export default HoverCounter;
