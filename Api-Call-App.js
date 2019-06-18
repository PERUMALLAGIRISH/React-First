import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

class App extends React.Component {
  //state: { posts: any[] };
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  // componentDidMount() {
  //   fetch("https://reqres.in/api/users?page=2")
  //     .then(response => response.json())
  //     .then(resData => {
  //       this.setState({ posts: resData.data });
  //     });
      
  // }

  // componentDidMount() {
  //   fetch("https://reqres.in/api/users?page=2")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           posts: result.data
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           error
  //         });
  //       }
  //     )
  // }
  componentDidMount() {
      this.fetchFirst();
  }

  fetchFirst(){
    fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            posts: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
  }




  render() {
    return (
      <div>
        <h3>Hello</h3>
        <div>
          {this.state.posts.map(post => (
          <ul>
            <h3>Details</h3>
            <li>{post.first_name}, {post.last_name}</li>
            <li>{post.email}</li>
            <li>{post.avatar}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
export default App;

const rootElement = document.getElementById("root");
render(<App />, rootElement);
