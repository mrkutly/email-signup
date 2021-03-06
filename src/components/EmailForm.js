import React, { Component } from 'react'
import ErrorMessage from './ErrorMessage'

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
      <div className="email-signup">
        <div className="message">SIGN UP FOR THE TLC NEWSLETTER.</div>
        <form className="email-form" onSubmit={ this.handleSubmit }>
          <input type="text" name="email" onChange={ this.handleEmailChange } value={ email } placeholder="enter email address" />
          <button type="submit" className="next-btn" onSubmit={ this.handleSubmit }>Next</button>
          <br />
          <input type="checkbox" name="privacyPolicy" onChange={ this.handlePrivacyChange } checked={ privacyChecked } />

          <div className="privacy-policy-agreement">
            <label htmlFor="privacyPolicy"><span>I agree to receive information from Discovery Communications in accordance with the following <span className="underline">Privacy Policy</span></span></label>
          </div>
        </form>

        { !!error ? <ErrorMessage message={ error.message } /> : null }
      </div>
    )
  }
}
