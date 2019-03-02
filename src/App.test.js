import React from 'react'
import ReactDOM from 'react-dom'
import { configure, mount, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import EmailForm from './components/EmailForm'
import NameForm from './components/NameForm'
import Congratulations from './components/Congratulations'


configure({ adapter: new Adapter() })

describe('App', () => {
  it('initially renders the email form', () => {
    const wrapper = mount(<App />)

    expect(wrapper.state().current).to.equal("email")
    expect(wrapper.contains(EmailForm.prototype)).to.equal(true)
  })


  it('renders a call to action message in initial state', () => {
    const wrapper = shallow(<App />)

    const message = wrapper.find('.join-message').text()
    expect(message).to.equal("Join the list")
  })

  it('has state that is controlled by email form', () => {
    const wrapper = mount(<App />)

    const email = wrapper.find('input[name="email"]')
    email.simulate('change', { target: { value: 'mark.sauer.utley@gmail.com'} })

    const checkbox = wrapper.find('input[name="privacyPolicy"]')
    checkbox.simulate('change')

    const form = wrapper.find('.email-form')
    form.simulate('submit')

    expect(wrapper.state().email).to.equal('mark.sauer.utley@gmail.com')
  })

  it('renders the name form when the email form is submitted', () => {
    const wrapper = mount(<App />)

    const email = wrapper.find('input[name="email"]')
    email.simulate('change', { target: { value: 'mark.sauer.utley@gmail.com'} })

    const checkbox = wrapper.find('input[name="privacyPolicy"]')
    checkbox.simulate('change')

    const form = wrapper.find('.email-form')
    form.simulate('submit')

    expect(wrapper.state().current).to.equal("name")
    expect(wrapper.contains(NameForm.prototype)).to.equal(true)
  })

  it('renders call to action message with name form', () => {
    const wrapper = mount(<App />)

    const email = wrapper.find('input[name="email"]')
    email.simulate('change', { target: { value: 'mark.sauer.utley@gmail.com'} })

    const checkbox = wrapper.find('input[name="privacyPolicy"]')
    checkbox.simulate('change')

    const form = wrapper.find('.email-form')
    form.simulate('submit')

    const message = wrapper.find('.join-message').text()
    expect(message).to.equal("Join the list")
  })

  it('has state that is controlled by the name form', () => {
    const wrapper = mount(<App />)

    const email = wrapper.find('input[name="email"]')
    email.simulate('change', { target: { value: 'mark.sauer.utley@gmail.com'} })

    const checkbox = wrapper.find('input[name="privacyPolicy"]')
    checkbox.simulate('change')

    const emailForm = wrapper.find('.email-form')
    emailForm.simulate('submit')

    const first = wrapper.find('input[name="first-name"]')
    first.simulate('change', { target: { value: 'Mark'} })

    const last = wrapper.find('input[name="last-name"]')
    last.simulate('change', { target: { value: 'Sauer-Utley'} })

    const nameForm = wrapper.find('.name-form')
    nameForm.simulate('submit')

    expect(wrapper.state().email).to.equal('mark.sauer.utley@gmail.com')
    expect(wrapper.state().first).to.equal('Mark')
    expect(wrapper.state().last).to.equal('Sauer-Utley')
  })

  it('renders the congratulations message when the email and name have been submitted', () => {
    const wrapper = mount(<App />)

    const email = wrapper.find('input[name="email"]')
    email.simulate('change', { target: { value: 'mark.sauer.utley@gmail.com'} })

    const checkbox = wrapper.find('input[name="privacyPolicy"]')
    checkbox.simulate('change')

    const emailForm = wrapper.find('.email-form')
    emailForm.simulate('submit')

    const first = wrapper.find('input[name="first-name"]')
    first.simulate('change', { target: { value: 'Mark'} })

    const last = wrapper.find('input[name="last-name"]')
    last.simulate('change', { target: { value: 'Sauer-Utley'} })

    const nameForm = wrapper.find('.name-form')
    nameForm.simulate('submit')

    expect(wrapper.state().current).to.equal("congratulations")
    expect(wrapper.contains(Congratulations)).to.equal(true)
  })
})
