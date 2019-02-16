import React from 'react'
import ReactDOM from 'react-dom'
import Congratulations from './Congratulations'
import { configure, shallow } from 'enzyme'
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() })

describe('Congratulations', () => {
  const wrapper = shallow(<Congratulations />)

  it('renders the word "congratulations"', () => {
    const congrats = wrapper.find('.congrats-message').text()
    expect(congrats).to.equal('congratulations!')
  })

  it('renders a thank you message', () => {
    const thanks = wrapper.find('.thanks-message').text()
    expect(thanks).to.equal('Thank You For Signing Up!')
  })

  it('renders a message about being on the lookout for news', () => {
    const lookout = wrapper.find('.lookout-message').text()
    expect(lookout).to.equal('Look out for the latest news on your favorite shows.')
  })
})
