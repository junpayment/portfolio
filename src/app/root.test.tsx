import React from 'react'
import { shallow } from 'enzyme'
import { Root } from './root'

describe('tests', () => {
  test('test', done => {
    const dom = shallow(<Root/>)
    expect(dom.text()).toBe('root')
    done()
  })
})
