import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Login Form",
      userName: '',
      password: ''
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeUsername(event) {
    console.log(event);
    this.setState({
      userName: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    alert('UserName is: ' + this.state.userName + ' Password is :' + this.state.password);
    event.preventDefault();
  }


  clearForm = (event) => { 
    event.preventDefault();
    this.setState({
      userName: "",
      password: ''
    });
  }


  render() {
    return (
      <div>
        <div className="container mt-3">
          <h2>POC 3</h2>
          <div className="card mt-5">
            <div className="card-header">{this.state.header}</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label style={{textAlign: 'left'}}>
                    Username:
                  <input type="text" className="form-control" value={this.state.userName} onChange={this.handleChangeUsername} />
                  </label>
                </div>
                <div className="form-group">
                  <label style={{textAlign: 'left'}}>
                    Password:
                  <input type="password" className="form-control" value={this.state.password} onChange={this.handleChangePassword} />
                  </label>
                </div>
                <button onClick={this.clearForm} type="submit" className="btn btn-warning">Clear</button> | &nbsp;
                <button onClick={this.handleSubmit}  type="submit"  className="btn btn-primary">Login</button>
              </form>
              
            </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;
