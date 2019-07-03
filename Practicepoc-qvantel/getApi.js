import React, { Component } from "react";

class GetAp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          item: json
        });
      });
  }
  render() {
    const { isLoaded, item } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          <ul>
            {item.map(items => (
              <li key={items.id}>{items.title}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default GetAp;
