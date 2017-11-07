import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import MessageCard from '.'

describe('MessageCard', () => {
  let random

  beforeAll(() => {
    random = Math.random
    Math.random = jest.fn(() => .5)
  })

  it('should render correctly', () => {
    const tree = shallow(<MessageCard message="Test message"/>)
    expect(toJSON(tree)).toMatchSnapshot()
  })

  it('shows avatar when it is given', () => {
    const tree = shallow(<MessageCard message="Second test message" avatar="localhost" />)
    expect(toJSON(tree)).toMatchSnapshot()
  })

  afterAll(() => {
    Math.random = random
  })
})
