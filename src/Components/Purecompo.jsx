import React from 'react'
import { PureComponent } from 'react';

export default class PureComponents extends PureComponent {

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
    console.log("Pure Component")
    return (
      <div>
        <h1>Pure Component</h1>
        <h3>{this.state.number}</h3>
        <button onClick={this.toggle}>Toggle</button>
        <button onClick={this.inc}>increase</button>
      </div>
    )
  }
}