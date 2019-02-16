import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import EmailForm from './EmailForm'
import { configure, mount } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() })

const wrapper = mount(<App />)

describe('App', () => {
  it('renders sign up message', () => {
    const message = <h1>SIGN UP FOR THE TLC NEWSLETTER.</h1>

    expect(wrapper.contains(message)).to.equal(true)
  })

  it('renders the email form', () => {
    expect(wrapper.contains(EmailForm.prototype)).to.equal(true)
  })

})
