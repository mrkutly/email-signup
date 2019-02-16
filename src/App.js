import React, { Component } from 'react'
import EmailForm from './EmailForm'
import NameForm from './NameForm'
import Congratulations from './Congratulations'

class App extends Component {

  state = {
    email: null,
    first: null,
    last: null,
    current: "email"
  }

  setEmail(email) {
    this.setState({ email, current: "name" })
  }

  setName(first, last) {
    this.setState({ first, last, current: "congratulations" }, () => {
      const { first, last, email } = this.state
      const user = { first, last, email }
      console.log(user)
    })
  }

  render() {
    const { current } = this.state

    return (
      <div className="App">
        {
          current !== "congratulations" ? <div className="join-message">Join the list</div> : null
        }
        {
          current === "email" ? <EmailForm setEmail={ (email) => this.setEmail(email) }/>
            : ( current === "name" ? <NameForm setName={ (first, last) => this.setName(first, last) }/>
              : <Congratulations />)
        }
      </div>
    );
  }
}

export default App
