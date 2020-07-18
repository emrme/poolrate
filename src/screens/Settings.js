import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import colors from '../constants/colors'
import magic from '../services/magic'
import { useMst } from '../models/Root'
import { observer } from 'mobx-react-lite'
import { findKeyByValueInMap } from '../helpers'

const Settings = () => {
  const { user, auth } = useMst()

  const address = findKeyByValueInMap(user.addresses, {
    label: 'Magic'
  })
  console.log('address: ', address)

  return (
    <SafeAreaView style={styles.container}>
      <Text>{user.email}</Text>
      <Text>{address}</Text>

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
