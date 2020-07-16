import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import colors from '../../constants/colors'

import { observer } from 'mobx-react-lite'

import { useMst } from '../../models/Root'

const ConfirmEmail = ({ navigation }) => {
  const { auth } = useMst()

  return (
    <View style={styles.container}>
      <Text>Confirm email</Text>
      <Button
        title={!auth.isLoggedIn ? 'Log in' : 'Log out'}
        onPress={() => {
          auth.isLoggedIn ? auth.logout() : auth.login()
        }}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.Gray100 }
})

export default observer(ConfirmEmail)
