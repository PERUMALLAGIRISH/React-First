import React, { Component } from "react";

class POC2T1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time : new Date().toLocaleTimeString()
    };
    this.timer = this.timer.bind(this)
  }

  timer(){
    this.setState({
      time : new Date().toLocaleTimeString()
    })
  }

  componentWillMount(){
    setInterval(this.timer, 1000);
  }

  render() {
    const DemoImg = {
        width:100,
        height:100
    };
    const DemoContect = {
        color: 'blue'
    };

    var arr = [];
    for (var i = 0; i < 5; i++) { 
      arr.push(<img src={this.props.img} style={DemoImg} /> );
      arr.push(<h1>{this.props.firstName} {this.props.lastName} </h1>);
      arr.push(<h1>IT is {this.state.time}</h1>);
    }

    return (
    <div>
      <img src={this.props.img} style={DemoImg} />
      {arr}
      
    </div>
    );
  }
}

export default POC2T1;