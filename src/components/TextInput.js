import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import colors from '../constants/colors'

const TextInput = props => {
  return (
    <TextInputRN
      style={styles.input}
      placeholder='Email address'
      onFocus={() => {}}
      onBlur={() => {}}
      autoFocus
      autoCorrect={false}
      autoCapitalize='none'
      clearTextOnFocus
      value={props.value}
      onChangeText={props.onChangeText}
    ></TextInputRN>
  )
}

export default TextInput

const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 30,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '400',
    backgroundColor: 'white',
    shadowColor: colors.Gray500,
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 0 }
  }
})
