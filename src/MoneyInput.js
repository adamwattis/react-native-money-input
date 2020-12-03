import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

import normalizer from './utils/price-string-normalizer'

const MoneyInput = ({value = '0.00', style, onChangeText}) => {

    const [ numValue, setNumValue ] = useState(value)

    const handleValueChange = (text) => {
        setNumValue(text)
        if (onChangeText) return onChangeText(text)
    }
    return (
        <>
            <TextInput 
                value={normalizer(numValue)} 
                style={[styles.input, style]} 
                keyboardType={'number-pad'}
                onChangeText={(text) => handleValueChange(text)} />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        textAlign: 'right',
        height: 'auto',
        width: 'auto',
        borderWidth: 2,
        borderColor: 'gray',
    }
})
export default MoneyInput