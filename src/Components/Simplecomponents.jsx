import React from 'react'
import { Component } from 'react';

export default class Simplecomponents extends Component {

  constructor(props){
    super(props);

    this.state = {
        number:0,
      toggle:true
     
    }
  }

  toggle = ()=>{
    this.setState({toggle:!this.state.toggle})
  }

  inc = ()=>{
    if(this.state.toggle){
      this.setState({number:this.state.number+1})
    }
   }
  


  render() {
    console.log("Simple Component")
    return (
      <div>
        <h1>Simple Component</h1>
        <h3>{this.state.number}</h3>
        <button onClick={this.toggle}>Toggle</button>
        <button onClick={this.inc}>increase</button>
      </div>
    )
  }
}