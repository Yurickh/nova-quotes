import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import MessageCard from '.'

describe('MessageCard', () => {
  it('should render correctly', () => {
    const tree = shallow(<MessageCard message="Test message"/>)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
