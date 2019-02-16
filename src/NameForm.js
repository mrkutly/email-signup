import React, { Component } from 'react'
import ErrorMessage from './ErrorMessage'

export default class NameForm extends Component {

  state = {
    first: '',
    last: '',
    error: null
  }

  handleChange = (e, name) => {
    this.setState({ [name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    try {
      this.firstNameExists()
      this.lastNameExists()
    } catch(error) {
      this.setState({ error })
    }
  }

  firstNameExists = () => {
    const { first } = this.state

    if (first.length < 1) {
      throw new Error("Oops! Please include a first name.")
    }
  }

  lastNameExists = () => {
    const { last } = this.state

    if (last.length < 1) {
      throw new Error("Oops! Please include a last name.")
    }
  }

  render() {
    const { error } = this.state
    return (
      <React.Fragment>
        <div className="message">
          ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.
        </div>

        <form className="name-form" onSubmit={ this.handleSubmit } >
          <input type="text" name="first-name" onChange={ (e) => this.handleChange(e, 'first') } placeholder="First Name" />
          <input type="text" name="last-name" onChange={ (e) => this.handleChange(e, 'last') } placeholder="Last Name" />
          <button type="submit">Sign Up</button>
        </form>

        { !!error ? <ErrorMessage message={ error.message } /> : null }
      </React.Fragment>
    )
  }
}
