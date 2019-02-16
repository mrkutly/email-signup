import React from 'react'
import ReactDOM from 'react-dom'
import NameForm from './NameForm'
import { configure, mount } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() })


describe('Name form', () => {
  const wrapper = mount(<NameForm />)

  it('renders an instruction message', () => {
    expect(wrapper.find('.message').text()).to.equal("ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.")
  })

  it('renders two input fields for first and last name', () => {
    expect(wrapper.find('input')).to.have.lengthOf(2)
  })

  it('renders a sign up button to complete the registration process', () => {
    expect(wrapper.find('button')).to.have.lengthOf(1)
  })

  it('first name input controls the state of the app', () => {
    const first = wrapper.find('input[name="first-name"]')
    first.simulate('change', { target: { value: 'Mark'} })

    expect(wrapper.state().first).to.equal('Mark')
  })

  it('last name input controls the state of the app', () => {
    const last = wrapper.find('input[name="last-name"]')
    last.simulate('change', { target: { value: 'Sauer-Utley'} })

    expect(wrapper.state().last).to.equal('Sauer-Utley')
  })
})

describe('Name form submission', () => {
  it('alerts the user when first name field is empty', () => {
    const wrapper = mount(<NameForm />)

    const last = wrapper.find('input[name="last-name"]')
    last.simulate('change', { target: { value: 'Sauer-Utley'} })

    const form = wrapper.find('.name-form')
    form.simulate('submit')

    expect(wrapper.state().error).to.not.be.null
    expect(wrapper.find('.error-message').text()).to.eq("Oops! Please include a first name.")
  })

  it('alerts the user when last name field is empty', () => {
    const wrapper = mount(<NameForm />)

    const first = wrapper.find('input[name="first-name"]')
    first.simulate('change', { target: { value: 'Mark'} })

    const form = wrapper.find('.name-form')
    form.simulate('submit')

    expect(wrapper.state().error).to.not.be.null
    expect(wrapper.find('.error-message').text()).to.eq("Oops! Please include a last name.")
  })
})
