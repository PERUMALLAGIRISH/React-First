import React, { Component } from "react";

class POC2T2 extends Component {
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
    let myArray = ["Girish Perumalla", "Abhinav", "Sathish", "Siva", "Manoj"];
    for(var i = 0; i<myArray.length; i++){
      arr.push(myArray[i]);
      arr.push(<p style={DemoContect}>IT is {this.state.time}</p>);
    }

    return (
    <div>
      <img src={this.props.img} style={DemoImg} />
      <br/>
      {/* <h1>IT is {this.state.time}</h1> */}
      {arr}
    </div>
    );
  }

  
}

export default POC2T2;

