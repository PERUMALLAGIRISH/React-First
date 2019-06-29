******************************* React Example links *******************************
https://reactjsexample.com/tag/form/


Tutorial: How to set up React, webpack, and Babel 7 from scratch (2019)


******************************* filter Concept *******************************
var matsa = [{name:"jon",Age:26, status: true},{name:"Doe",Age:26, status: true}, {name:"Mark",Age:30, status: true}, {name:"make",Age:15, status: false}, {name:"jon",Age:10, status: false}];

o/p
matsa.filter(function(names){   return names.Age == 26});
(2) [{…}, {…}]
0: {name: "jon", Age: 26, status: true}
1: {name: "Doe", Age: 26, status: true}


******************************* Find Concept *******************************
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

o/p
2

******************************* setInterval Concept *******************************
setInterval(function(){
   console.log("Hello Jon")
}, 1000);


https://www.valentinog.com/blog/babel/

How to pass an object from one component to another
How to pass a function from parent component to child component using the object.
http://www.habilelabs.io/3-simple-steps-create-react-js-components/



******************************* Class Component *******************************
import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div>
      <h1>Hello</h1>
    </div>
    );
  }
}

export default ClassCounter;



******************************* Functional Component *******************************
import React from "react";


function Test() {
    return (
    <div>
      <h1>Hello</h1>
    </div>
    );
  }


export default Test;
