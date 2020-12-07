# React-Native-Money-Input 💰
A React Native input component for money, preset with "0.00" and right-aligned.
Useful for usecases when displaying number with two decimal points is required, such as money and currency.
* Allows custom styling
* Built with native components
* Right aligned input
## Getting Started
Install the component to your React Native project
```
npm install react-native-money-input
```
Then import it into your app and use it just like a regular TextInput
```
import MoneyInput from 'react-native-money-input'
const MyComponent = () => {
    return <MoneyInput onTextChange={text => console.log(text)} />
}
```
![Money Input Gif](https://media.giphy.com/media/D7JtDrZGu2srLNyIWZ/giphy.gif)
## Styling & Passing Props
This component allows for custom styling simply by passing styles to the style prop. You can also pass other props to the component. For example:
```
const MyStyledComponent = () => {
    return <MoneyInput autoFocus={true} style={styles.moneyInput} />
}
const styles = StyleSheet.create({
    moneyInput: {
        fontSize: 74,
        fontWeight: 'bold',
        color: 'white',
        borderWidth: 0
    }
})
```
![Styled Money Input Gif](https://media.giphy.com/media/62U1Aa1h3qyo6dgoh6/giphy.gif)
## License
Licensed under the MIT License