import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.props.onRequestFetchData();
  }
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
