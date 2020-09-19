import React from "react";
import "./styles.css";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import Counter2 from "./Counter2";
import HoverCounter2 from "./HoverCounter2";
import RPCounter from "./RPCounter";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
      <HoverCounter />
      <RPCounter
        render={(count, increment) => (
          <Counter2 count={count} increment={increment} />
        )}
      />
      <RPCounter
        render={(count, increment) => (
          <HoverCounter2 count={count} increment={increment} />
        )}
      />
    </div>
  );
}
