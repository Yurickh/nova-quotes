import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import MessageList from '.'

describe('MessageList', () => {
  it('should render correctly', () => {
    const tree = shallow(<MessageList />)
    expect(toJSON(tree)).toMatchSnapshot()
  })
})
