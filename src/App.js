import React, { Component } from "react";

class App extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props;

    return (
      <div className="App">
        <h1>HELLO SAGA !</h1>
        <h2>{value}</h2>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    );
  }
}

export default App;
