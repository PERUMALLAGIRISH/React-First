import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    console.log(`Counters Rendered`);
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;