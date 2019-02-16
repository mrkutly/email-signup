import React, { Component } from 'react'
import EmailForm from './EmailForm'
import NameForm from './NameForm'
import Congratulations from './Congratulations'
import './App.css'

class App extends Component {

  state = {
    email: null,
    first: null,
    last: null
  }

  setEmail(email) {
    this.setState({ email })
  }

  setName(first, last) {
    this.setState({ first, last }, () => console.log(this.state))
  }

  render() {
    const { email, first, last } = this.state

    return (
      <div className="App">

        {
          !email ? <EmailForm setEmail={ (email) => this.setEmail(email) }/>
            : (!first && !last ? <NameForm setName={ (first, last) => this.setName(first, last) }/>
              : <Congratulations />)
        }
      </div>
    );
  }
}

export default App;
