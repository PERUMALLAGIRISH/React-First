import React, { Component } from "react";

class NavBar extends Component {
  render() {
       console.log(`Nav Rendered`);
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </nav>
        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
      </div>
    );
  }
}

export default NavBar;
