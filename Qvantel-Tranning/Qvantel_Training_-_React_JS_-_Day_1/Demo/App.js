import React, { Component } from "react";
import Counter from "./components/Counter";

class App extends Component {
  

  render() {
    return (
      <React.Fragment>
        <h1>Hello with App</h1>
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
