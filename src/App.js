import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>{this.props.value}</h2>
        <button>-</button>
        <button>+</button>
      </div>
    );
  }
}

export default App;
