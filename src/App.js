import React, { Component } from 'react'
import EmailForm from './EmailForm'
import NameForm from './NameForm'
import './App.css'

class App extends Component {

  state = {
    email: null,
  }

  setEmail(email) {
    this.setState({ email })
  }

  render() {
    const { email } = this.state

    return (
      <div className="App">
        <h1>SIGN UP FOR THE TLC NEWSLETTER.</h1>
        {
          !email ?
            <EmailForm setEmail={ (email) => this.setEmail(email) }/>
          :
            <NameForm />
        }
      </div>
    );
  }
}

export default App;
