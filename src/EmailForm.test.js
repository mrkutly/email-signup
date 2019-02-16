import React from 'react'
import ReactDOM from 'react-dom'
import EmailForm from './EmailForm'
import { configure, mount } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() })

describe('Email form', () => {
  const wrapper = mount(<EmailForm />)

  it('has an input for an email address', () => {
    expect(wrapper.find('input[name="email"]')).to.have.lengthOf(1)
  })

  it('controls the state of the app', () => {
    const email = wrapper.find('input[name="email"]')
    email.simulate('change', { target: { value: 'mark.sauer.utley@gmail.com'} })

    expect(wrapper.state().email).to.equal('mark.sauer.utley@gmail.com')
  })
})

describe('Privacy Policy', () => {
  const wrapper = mount(<EmailForm />)

  it('contains a checkbox to confirm privacy policy', () => {
    expect(wrapper.find('input[name="privacyPolicy"]')).to.have.lengthOf(1)
  })

  it('controls the state of the app', () => {
    const checkbox = wrapper.find('input[name="privacyPolicy"]')
    checkbox.simulate('change')

    expect(wrapper.state().privacyChecked).to.equal(true)
  })
})

describe('Form submission', () => {
  it('alerts the user when an invalid email is given', () =>{
    const wrapper = mount(<EmailForm />)

    const checkbox = wrapper.find('input[name="privacyPolicy"]')
    checkbox.simulate('change')

    const email = wrapper.find('input[name="email"]')
    email.simulate('change', { target: { value: 'hello@' } })

    const form = wrapper.find('form')
    form.simulate('submit')

    expect(wrapper.find('.error-message').text()).to.equal("Uh oh! That is not a valid email address.")
  })

  it('alerts the user when the Privacy Policy box is unchecked', () => {
    const wrapper = mount(<EmailForm />)

    const email = wrapper.find('input[name="email"]')
    email.simulate('change', { target: { value: 'mark@code-challenge.com' } })

    const form = wrapper.find('form')
    form.simulate('submit')

    expect(wrapper.find('.error-message').text()).to.equal("Please accept our Privacy Policy to continue.")
  })
})
