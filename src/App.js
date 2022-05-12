import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from 'react'
import StepOne from "./components/stepOne.js"
import StepTwo from "./components/stepTwo.js"
import StepThree from "./components/stepThree.js"
class App extends React.Component {
  constructor (){
    super();
    this.state = {
      step: 1,
      name: "",
      email: "",
      profile: ""
    }
  }

  nextStep = () => {
    this.setState({step: Math.min(this.state.step + 1, 3)})
  }

  prevStep = () => {
    this.setState({step: Math.max(this.state.step - 1,1)})
  }

  render() {
    switch(this.state.step){
      case 1:
        return <StepOne next={this.nextStep} prev={this.prevStep}/>
      case 2:
        return <StepTwo next={this.nextStep} prev={this.prevStep}/>
      case 3:
        return <StepThree next={this.nextStep} prev={this.prevStep}/>
    }
  }
}
export default App;
//Streaming-Service-MultiStep-Sign-Up-Form