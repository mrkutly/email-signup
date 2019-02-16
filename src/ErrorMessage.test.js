import React from 'react'
import ReactDOM from 'react-dom'
import ErrorMessage from './ErrorMessage'
import { configure, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() })

describe('Error Message', () => {
  it('renders a message that was passed in as props', () => {
    const wrapper = shallow(<ErrorMessage message={"Uh oh..."} />)
    const message = wrapper.find('.error-message').text()
    expect(message).to.equal("Uh oh...")
  })
})
