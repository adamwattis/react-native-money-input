import React from 'react'
import { TextInput } from 'react-native'
import renderer from 'react-test-renderer'

import MoneyInput from './MoneyInput'
 
describe('<MoneyInput />', () => {
    it('renders correctly', () => {
        const rendered = renderer.create(<MoneyInput/>)
        const inst = rendered.root
        expect(inst.children[0].type).toEqual(TextInput)
    })
})