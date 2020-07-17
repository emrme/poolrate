import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import colors from '../constants/colors'
import magic from '../services/magic'
import { useMst } from '../models/Root'

export default function Home () {
  const { auth, isLoading } = useMst()
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title='Log out'
        onPress={async () => {
          await magic.user.logout()
          auth.logout()
        }}
      ></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Gray100
  }
})
