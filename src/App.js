import './App.css';
import React from 'react'
import StepOne from "./components/steps/stepOne.js"
import StepTwo from "./components/steps/stepTwo.js"
import StepThree from "./components/steps/stepThree.js"
import SelectProfile from "./components/core/selectProfile.js"
import './styles/profileSelection.css'

class App extends React.Component {
  constructor (){
    super();
    this.state = {
      step: 0,
      name: "",
      profile: "",
      permissions: ""
    }
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

  createNewProfile = () => {
    let users = JSON.parse(localStorage.getItem("users"))
    if (users === null) {
      this.setState({step: 1});
    }
    if (users.length === 3){
      return window.alert("Profile Limit: 3")
    }
    this.setState({step: 1})
  }

  returnSavedProfiles = () => {
    this.setState({step: 0})
  }

  saveProfile = () => {
    console.log(this.state);
  }

  deleteProfile = (name) => {
    let users = JSON.parse(localStorage.getItem("users"));

    users.forEach((user, index) => {
      if (user.name === name){
        users.splice(index,1)
      }
    })

    localStorage.setItem("users",JSON.stringify(users))
    window.location.reload();
  }

  setPermissions = async (permissions) => {
    await this.setState({permissions: permissions})
      let user = {
        name: this.state.name,
        profile: this.state.profile,
        permissions: this.state.permissions
      }
      if (localStorage.getItem("users") === null){
        console.log("entered")
        let users = [];

        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        console.log(localStorage.getItem("users"))
        return
    }
        let users = JSON.parse(localStorage.getItem("users"))

        users.push(user);
        localStorage.setItem("users",JSON.stringify(users))
        this.setState({step: 0});
  }

  render() {
    switch(this.state.step){
      case 0:
        return <SelectProfile 
          deleteProfile={this.deleteProfile} 
          createNewProfile={this.createNewProfile}
        />
      case 1:
        return <StepOne 
          next={this.nextStep} 
          profiles={this.returnSavedProfiles} 
          setProfile={this.setProfile} 
        />
          
      case 2:
        return <StepTwo 
          next={this.nextStep} 
          prev={this.prevStep}
          inputName={this.inputName}
          setProfileName={this.setProfileName}
        />
      case 3:
        return <StepThree 
          next={this.nextStep} 
          prev={this.prevStep}
          setPermissions={this.setPermissions}
          cancel={this.returnSavedProfiles}
        />
    }
  }
}
export default App;
