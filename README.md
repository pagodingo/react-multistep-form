# React Multistep Form (without libraries)

<a target="_blank" href="https://whoswatching.netlify.app/"><img src="https://admiring-pike-75c4b2.netlify.app/assets/profile-creation-preview.133c552a31dc0b26537bb05ea031a797.png" alt="react-multistep--preview" /></a>

An example of how to implement a multistep form in react without libraries

Each `step` in the form is its own `Component`

My <a href="https://whoswatching.netlify.app/" target="_blank">profile creator implementation</a> required some helper components, those components can be found in `/core`.

Helpers aside - all components are in `/steps`.

## Moving from one step to another

In main `App.js`, the current step is stored in state:

```js
class App extends React.Component 
{
    constructor()
    {
        super();
        this.state = {
            step: 0
        }
    }
}
```

React Class Component Methods move the form back & forth like toggles.

```js
this.nextStep() // ++ step
this.prevStep() // -- step
```

`Steps` are passed them, and then hooked up to `onClicks()`.

When clicked, they shift this switch statement:

```js
// App.js
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
```
