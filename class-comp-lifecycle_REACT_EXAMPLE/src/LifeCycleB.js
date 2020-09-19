import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colour: "RED"
    };
    console.log("B: Contructor");
  }

  static getDerivedStateFromProps(props) {
    console.log("B: getDerivedStateFromProps");
    return { colour: props.colour };
  }

  componentDidMount() {
    console.log("B: componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("B:Componenet Should Update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("B:getSnapshot Before Update");
    return null;
  }

  componentDidUpdate() {
    console.log("B: componentDidUpdate");
  }
  render() {
    console.log("B:RENDER");
    return <div>{this.state.colour}</div>;
  }
}

export default LifeCycleB;
