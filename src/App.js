import React, { Component } from 'react'
import EmailForm from './EmailForm'
import './App.css'

class App extends Component {

  state = {
    email: null,
  }

  setEmail(email) {
    this.setState({ email })
  }

  render() {
    return (
      <div className="App">
        <h1>SIGN UP FOR THE TLC NEWSLETTER.</h1>
        <EmailForm setEmail={ (email) => this.setEmail(email) }/>
      </div>
    );
  }
}

export default App;
