import 'mobx-react-lite/batchingForReactNative'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import RootNavigator from './src/navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'

import { Provider, rootStore } from './src/models/Root'
import colors from './src/constants/colors'
import magic from './src/services/magic'

export default function App () {
  return (
    <Provider value={rootStore}>
      <StatusBar style='dark'></StatusBar>
      <magic.Relayer />
      <NavigationContainer>
        <RootNavigator></RootNavigator>
      </NavigationContainer>
      <SafeAreaView style={{ backgroundColor: colors.Gray100 }}></SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Gray100
  }
})
