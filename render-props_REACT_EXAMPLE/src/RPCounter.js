import React, { Component } from "react";

class RPCounter extends Component {
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
    return <div>{this.props.render(this.state.count, this.increment)}</div>;
  }
}

export default RPCounter;
