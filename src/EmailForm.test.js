import React from 'react'
import ReactDOM from 'react-dom'
import EmailForm from './EmailForm'
import { configure, mount } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() })

const wrapper = mount(<EmailForm />)


describe('Email form', () => {
  it('has an input for an email address', () => {
    expect(wrapper.find('input[name="email"]')).to.have.lengthOf(1)
  })

  it('controls the state of the app', () => {
    const email = wrapper.find('input[name="email"]')

    email.simulate("change", { target: { value: "mark.sauer.utley@gmail.com"} })
    expect(wrapper.state().email).to.equal("mark.sauer.utley@gmail.com")
  })
})

describe('Privacy Policy', () => {
  it('contains a checkbox to confirm privacy policy', () => {
    expect(wrapper.find('input[name="privacyPolicy"]')).to.have.lengthOf(1)
  })

  it('controls the state of the app', () => {
    const privacy = wrapper.find('input[name="privacyPolicy"]')

    privacy.simulate("change")
    expect(wrapper.state().privacyChecked).to.equal(true)
  })
})
