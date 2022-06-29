# React Multistep Form (without libraries)

An example of how implement a multistep form in react without libraries

Each `step` in the form is it's own `Component`

My ['Profile Creator' implementation ](https://whimsical-salamander-7e72fa.netlify.app/) required some helper components, those components can be found in `/core`.

Helpers aside, all steps are in `/steps`.

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
Methods move the form back & forth like toggles.
```js
this.nexStep() // ++ step
this.prevStep() // -- step
```

`<Step />`'s are passed them, and then hooked up to `onClicks()`.

When clicked, they shift this switch statement: 
```js
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