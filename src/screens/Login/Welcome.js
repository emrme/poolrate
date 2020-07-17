import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  SafeAreaView
} from 'react-native'
import { FONT_WEIGHT } from '../../constants/fonts'
import colors from '../../constants/colors'
import { Feather } from '@expo/vector-icons'

import TextInput from '../../components/TextInput'

import { observer } from 'mobx-react-lite'

import { useMst } from '../../models/Root'

import magic from '../../services/magic'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Spinner from 'react-native-loading-spinner-overlay'
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')

  const { auth, isLoading } = useMst()

  const insets = useSafeAreaInsets()

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 + insets.bottom : 0}
    >
      <Spinner visible={isLoading}></Spinner>

      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.title}>Welcome to Poolrate</Text>
              <Text style={styles.subtitle}>
                Enter your email address to log in
              </Text>
              <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <TextInput onChangeText={text => setEmail(text)}></TextInput>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'flex-end'
              }}
            >
              <TouchableOpacity
                style={styles.roundButton}
                onPress={async () => {
                  //

                  //   let user = await magic.user
                  //   let isLoggedIn = await user.isLoggedIn()
                  //   console.log('isLoggedIn: ', isLoggedIn)
                  //   let token = await user.getIdToken()
                  //   console.log('token: ', token)
                  //   await user.logout()
                  //   isLoggedIn = await user.isLoggedIn()
                  //   console.log('isLoggedIn: ', isLoggedIn)

                  navigation.navigate('ConfirmEmail', { email })
                }}
              >
                <Feather
                  name='chevron-right'
                  size={24}
                  style={{ marginLeft: 2 }}
                ></Feather>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default observer(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Gray100
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: FONT_WEIGHT.SEMIBOLD
  },
  subtitle: {
    marginTop: 10,
    marginHorizontal: 16,
    fontSize: 18,
    fontWeight: FONT_WEIGHT.REGULAR,
    color: colors.Gray500,
    textAlign: 'center'
  },
  roundButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.Gray500,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    marginBottom: 30,
    marginRight: 30
  }
})
