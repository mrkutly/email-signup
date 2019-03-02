import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { useForm } from '../hooks/useForm'
import { privacyPolicyAccepted, emailIsValid } from '../middleware/formValidation'

const EmailForm = (props) => {
  const { formData, setField } = useForm()
  const [error, setError] = useState(null)
  const handleChange = (e) => setField(e)

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      emailIsValid(formData)
      privacyPolicyAccepted(formData)

      props.setEmail(formData.email)
    } catch(error) {
      setError(error)
    }
  }

  const { email, privacyPolicy } = formData
  return (
    <div className="email-signup">
      <div className="message">SIGN UP FOR THE TLC NEWSLETTER.</div>
      <form className="email-form" onSubmit={ handleSubmit }>
        <input type="text" name="email" onChange={ handleChange } value={ email } placeholder="enter email address" />
        <button type="submit" className="next-btn">Next</button>
        <br />
        <input type="checkbox" name="privacyPolicy" onChange={ (e) => handleChange({ target: { name: 'privacyPolicy', value: !privacyPolicy }}) } checked={ !!privacyPolicy } />
        <div className="privacy-policy-agreement">
          <label htmlFor="privacyPolicy"><span>I agree to receive information from Discovery Communications in accordance with the following <span className="underline">Privacy Policy</span></span></label>
        </div>
      </form>

      { !!error ? <ErrorMessage message={ error.message } /> : null }
    </div>
  )
}

export default EmailForm
