import React, { Component } from 'react'


export default class EmailForm extends Component {

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
      <div className="email-form">
        <input type="text" name="email" onChange={this.handleEmailChange} value={email} />
        <input type="checkbox" name="privacyPolicy" onChange={this.handlePrivacyChange} checked={privacyChecked} />
      </div>
    )
  }
}
