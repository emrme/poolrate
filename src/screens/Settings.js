import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import colors from '../constants/colors'
import magic from '../services/magic'
import { useMst } from '../models/Root'
import { observer } from 'mobx-react-lite'

const Settings = () => {
  const { auth, user, sLoading } = useMst()
  return (
    <SafeAreaView style={styles.container}>
      <Text>{user.email}</Text>
      <Text>{user.publicAddress}</Text>
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

export default observer(Settings)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Gray100
  }
})
