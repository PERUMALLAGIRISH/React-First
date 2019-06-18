import React, { Component } from 'react';


//create calss component call state and default prop in render method
//call body component
//set prop value to Header and footer componet 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: 'App',
      header: 'headerContent',
      footer: 'footerContent' 
    }
  }
  
  render() {
    return(
      <div>
      <h1>This is {this.state.data} -1</h1>
      <Header  headerProp ={this.state.header} />
      <Body />
      <Footer  footerProp ={this.state.footer} />
      <p>App Component Default Props {this.props.catName}</p>
    </div>
    )
  }
}

//app Component Default value creting
App.defaultProps = {
    catName: "Sandy",
    eyeColor: "deepblue",
    age: "120"
}


//Create Header Component Call props value in App component
class Header extends React.Component{
 constructor(props){
    super(props);
    this.state = {
      data: 'Header'
    }
 }
 
 render(){
  return(
      <div>
         <h1>This is {this.state.data} -2</h1>
         <p>{this.props.headerProp}</p>
      </div>
  )
 }
}


//Create Body Component with Form binding and event binding
class Body extends React.Component{
 constructor(props){
    super(props);
    this.state = {
      contactEmail: '',
      contactMessage: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMsg = this.handleChangeMsg.bind(this);
        
 }
 
 handleChangeEmail(event) {
        this.setState({
            contactEmail: event.target.value,
        });
    }

    handleChangeMsg(event) {
        this.setState({
            contactMessage: event.target.value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            contactEmail: '',
            contactMessage: ''
        });
       // console.log(this.setState);
        
    }
 
 render(){
  return(
      <div>
      <hr/>
         <h1>This is {this.props.data}</h1>
         <div className="contact">
                <form className="form" onSubmit={this.handleSubmit} id="formContact">
                    <label>Email</label>
                    <input id="formEmail" type="email" name="formEmail" value={this.state.contactEmail} onChange={this.handleChangeEmail} required />
                    <label>Meddelande</label>
                    <textarea id="formMsg" name="formMsg" rows="8" cols="40" value={this.state.contactMessage} onChange={this.handleChangeMsg} required></textarea>
                    <input type="submit" value="Submit" className="btn--cta" id="btn-submit" />
                </form>
            </div>
        <hr/>
      </div>
  )
 }
}
 
//Creating Body Component Default value 
 Body.defaultProps = {
    data: "Body"
}
 
//Creating Footer Component and Event Binding
 class Footer extends React.Component{
 constructor(props){
    super(props);
    this.state = {
       data: 'Footer' 
    }
    this.updateState = this.updateState.bind(this);
    
 }
 
 updateState(){
     this.setState({data: 'Footer updated...'}) 
 }

 render(){
  return(
      <div>
         <h1>This is {this.state.data} -3</h1>
          <p>{this.props.footerProp}</p>
          <button onClick = {this.updateState}>Footer State CLICK</button>
          <p>{this.state.data}</p>
      </div>
  );
 }  
}



export default App;
