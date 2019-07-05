import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Previous props", prevProps);
    console.log("Previous state", prevState);
  }

  componentWillUnmount() {
    console.log("Counter will be unmounted");
  }

  styles = {
    fontSize: "20px",
    fontWeight: "bold"
  };

  /* formatCount() {
    return this.state.count === 0 ? <h1>Zero</h1> : this.state.count;
  }*/

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.count === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    // JSX
    console.log(`Counter Rendered`);
    return (
      <React.Fragment>
        <button
          className="btn btn-info btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          {" "}
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>
        <h4>{this.props.counter.count}</h4>
        <span className={this.getBadgeClasses()} style={this.styles} />
      </React.Fragment>
    );
  }
}

export default Counter;
