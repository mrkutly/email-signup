import React, { Component } from 'react'


export default class EmailForm extends Component {

  state = {
    email: '',
    privacyChecked: false,
    error: null
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePrivacyChange = (e) => {
    this.setState(prevState => {
      return { privacyChecked: !prevState.privacyChecked }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    try {
      this.emailIsValid()
      this.privacyPolicyAccepted()

      this.props.setEmail(this.state.email)
    } catch(error) {
      this.setState({ error })
    }
  }

  emailIsValid = () => {
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/

    if (!regex.test(this.state.email)) {
      throw new Error("Uh oh! That is not a valid email address.")
    }
  }

  privacyPolicyAccepted = () => {
    if (!this.state.privacyChecked) {
      throw new Error("Please accept our Privacy Policy to continue.")
    }
  }

  render() {
    const { email, privacyChecked, error } = this.state
    return (
      <form className="email-form" onSubmit={ this.handleSubmit }>
        <input type="text" name="email" onChange={ this.handleEmailChange } value={ email } />
        <input type="checkbox" name="privacyPolicy" onChange={ this.handlePrivacyChange } checked={ privacyChecked } />
        <button type="submit" className="next-btn" onSubmit={ this.handleSubmit }>Next</button>
        {
          !!error ?
            <p className="error-message">{error.message}</p>
          :
            null
        }
      </form>
    )
  }
}