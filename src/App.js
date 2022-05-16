import './App.css';
import React, {Component, useState} from 'react'
import StepOne from "./components/stepOne.js"
import StepTwo from "./components/stepTwo.js"
import StepThree from "./components/stepThree.js"
import SelectProfile from "./components/selectProfile.js"
import './styles/profileSelection.css'
class App extends React.Component {
  constructor (){
    super();
    this.state = {
      step: 0,
      name: "",
      email: "",
      profile: "",
      permissions: ""
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
    this.setState({profile: profile, step: 2});
  }

  inputName = (e) => {
    e.preventDefault();
    this.setState({name: e.target.children[0].value, step: 3})
  }

  displayProfile = () => {
    console.log(localStorage);
  }

  setProfileName = (name) => {
    this.setState({name: name})
  }

  createProfile = () => {
    this.setState({step: 1})
  }

  profiles = () => {
    this.setState({step: 0})
  }

  saveProfile = () => {
    console.log(this.state);
  }

  setPermissions = async (permissions) => {
   await this.setState({permissions: permissions})
     this.profiles();
     console.log(this.state)
  }

  render() {
    switch(this.state.step){
      case 0:
        return <SelectProfile createProfile={this.createProfile}/>
      case 1:
        return <StepOne 
          next={this.nextStep} 
          profiles={this.profiles} 
          setProfile={this.setProfile} 
          displayProfile={this.displayProfile}
        />
          
      case 2:
        return <StepTwo 
          next={this.nextStep} 
          prev={this.prevStep}
          inputName={this.inputName}
          setProfileName={this.setProfileName}
          displayProfile={this.displayProfile}
        />
      case 3:
        return <StepThree 
          next={this.nextStep} 
          prev={this.prevStep}
          setPermissions={this.setPermissions}
          cancel={this.profiles}
        />
    }
  }
}
export default App;

//Streaming Multi-step Profile Creation
