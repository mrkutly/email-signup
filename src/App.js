import React, { Component } from 'react'
import EmailForm from './EmailForm'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>SIGN UP FOR THE TLC NEWSLETTER.</h1>
        <EmailForm />
      </div>
    );
  }
}

export default App;
