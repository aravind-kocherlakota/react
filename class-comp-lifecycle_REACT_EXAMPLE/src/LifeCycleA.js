import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colour: "RED",
      send: "WHITE"
    };
    console.log("A: Contructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("A: getDerivedStateFromProps");
    return { colour: "BLACK" };
  }

  componentDidMount() {
    console.log("A: componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("A:Componenet Should Update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("A:getSnapshot Before Update");
    return null;
  }

  componentDidUpdate() {
    console.log("A: componentDidUpdate");
  }

  rerender() {
    this.setState({ send: "BROWN" });
    this.setState({ colour: "ORANGE" });
  }

  render() {
    console.log("A:RENDER");
    return (
      <div>
        {this.state.colour}
        <LifeCycleB colour={this.state.send} />
        <button onClick={this.rerender.bind(this)}>CLICK</button>
      </div>
    );
  }
}

export default LifeCycleA;
