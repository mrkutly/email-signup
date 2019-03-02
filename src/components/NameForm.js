import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { useForm } from '../hooks/useForm'
import { nameExists } from '../middleware/formValidation'

const NameForm = (props) => {
  const { formData, setField } = useForm()
  const [error, setError] = useState(null)
  const handleChange = (e) => setField(e)

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      const { first, last } = formData

      nameExists({ type: 'first', value: first })
      nameExists({ type: 'last', value: last })

      props.setName(first, last)
    } catch(error) {
      setError(error)
    }
  }

  return (
    <div className="name-form-div">
      <div className="message">
        ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.
      </div>

      <form className="name-form" onSubmit={ handleSubmit } >
        <input type="text" name="first" onChange={ handleChange } placeholder="First Name" />
        <input type="text" name="last" onChange={ handleChange } placeholder="Last Name" />
        <button type="submit">Sign Up</button>
      </form>

      { !!error ? <ErrorMessage message={ error.message } /> : null }
    </div>
  )
}

export default NameForm
