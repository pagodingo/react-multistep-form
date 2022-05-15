import './App.css';
import React, {Component, useState} from 'react'
import StepOne from "./components/stepOne.js"
import StepTwo from "./components/stepTwo.js"
import StepThree from "./components/stepThree.js"
import './styles/profileSelection.css'
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

  setProfile = (profile) => {
    console.log(profile)
    this.setState({profile: profile});
  }

  displayProfile = () => {
    console.log(this.state);
  }

  setProfileName = (name) => {
    this.setState({name: name})
  }

  render() {
    switch(this.state.step){
     /* case 0:
        return <ProfilesList />*/
      case 1:
        return <StepOne 
          next={this.nextStep} 
          prev={this.prevStep} 
          setProfile={this.setProfile} 
          displayProfile={this.displayProfile}
          />
      case 2:
        return <StepTwo 
          next={this.nextStep} 
          prev={this.prevStep}
          setProfileName={this.setProfileName}
          displayProfile={this.displayProfile}
          />
      case 3:
        return <StepThree 
          next={this.nextStep} 
          prev={this.prevStep}
          />
    }
  }
}
export default App;
//Streaming-Service-MultiStep-Sign-Up-Form
