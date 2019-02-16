import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    email: '',
    privacyChecked: false
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePrivacyChange = (e) => {
    this.setState(prevState => {
      return { privacyChecked: !prevState.privacyChecked }
    })
  }

  render() {
    const { email, privacyChecked } = this.state

    return (
      <div className="App">
        <h1>SIGN UP FOR THE TLC NEWSLETTER.</h1>
        <input type="text" name="email" onChange={this.handleEmailChange} value={email} />
        <input type="checkbox" name="privacyPolicy" onChange={this.handlePrivacyChange} checked={privacyChecked} />
      </div>
    );
  }
}

export default App;
