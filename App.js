import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RootNavigator from './src/navigation/RootNavigator'
import 'mobx-react-lite/batchingForReactNative'

import { Provider, rootStore } from './src/models/Root'

export default function App () {
  return (
    <Provider value={rootStore}>
      <RootNavigator></RootNavigator>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
