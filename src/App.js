import React, { Component } from "react";

class App extends Component {
  render() {
    const { value, onIncrement, onDecrement, onIncrementAsync } = this.props;

    return (
      <div className="App">
        <h2>{value}</h2>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
        <button onClick={onIncrementAsync}>Async +</button>
      </div>
    );
  }
}

export default App;
