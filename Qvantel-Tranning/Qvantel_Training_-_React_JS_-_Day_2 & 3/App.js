import React, { Component } from "react";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(`App Contructor ${this.props}`);
    //this.state = this.props.something;
    //  initialize the state directly.
  }

  componentDidMount() {
    // Async calls. and update the state
     console.log(`App Mounted`);
  }

  state = {
    counters: [
      { id: 1, count: 3 },
      { id: 2, count: 4 },
      { id: 3, count: 5 },
      { id: 4, count: 6 }
    ]
  };

  handleDecrement = counter => {
    console.log("Event Handler called--");
    const counters = [...this.state.counters]; // cloning the array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count--;
    //console.log(counters);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    console.log("Event Handler called--");
    const counters = [...this.state.counters]; // cloning the array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].count++;
    //console.log(counters);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.count = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
     console.log(`App Rendered`);
     
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.count > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
