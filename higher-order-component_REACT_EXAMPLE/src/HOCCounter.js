import React, { Component } from "react";

const HOCCounter = WrappedComponent => {
  class NewComponent extends Component {
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
        <WrappedComponent count={this.state.count} increment={this.increment} />
      );
    }
  }
  return NewComponent;
};

export default HOCCounter;
