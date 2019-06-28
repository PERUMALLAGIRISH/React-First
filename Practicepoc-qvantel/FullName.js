import React, { Component } from "react";

class FullName extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName : "Girish",
        lastName : "Perumalla",
    };
  }


fullName = () => {
    return this.state.firstName + " " + this.state.lastName;
}; 

  render() {
    return (
        <div>
            <h1>Hello {this.fullName()}</h1>
        </div>
    )
  }
}

export default FullName;
