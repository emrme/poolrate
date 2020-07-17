import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-view'
// import { SafeAreaView } from '@react-navigation/native'
import colors from '../constants/colors'

export default function Home () {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Gray100,
    paddingBottom: 0
  }
})
