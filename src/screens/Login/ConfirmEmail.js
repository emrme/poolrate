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

import { RPCError, RPCErrorCode } from '@magic-sdk/react-native'
import LottieView from 'lottie-react-native'

const ConfirmEmail = ({ navigation, route }) => {
  const { auth } = useMst()

  const email = route.params?.email

  const [timer, setTimer] = useState(60)
  const [canTryAgain, setCanTryAgain] = useState(false)
  const [hasTried, setHasTried] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      timer > 0 && setTimer(timer => timer - 1)
    }, 1000)

    if (timer === 0) {
      clearInterval(interval)
      setCanTryAgain(true)
    }

    return () => clearInterval(interval)
  }, [timer])

  useEffect(() => {
    if (!auth.isLoggedIn) {
      const loginWithMagicLink = async () => {
        try {
          let idToken = await magic.auth.loginWithMagicLink({
            email: email,
            showUI: false
          })
          auth.login(idToken)
        } catch (err) {
          if (err instanceof RPCError) {
            switch (err.code) {
              case RPCErrorCode.MagicLinkFailedVerification:
                console.log('MagicLinkFailedVerification')
              case RPCErrorCode.MagicLinkExpired:
                console.log('MagicLinkExpired')
              case RPCErrorCode.MagicLinkRateLimited:
                console.log('MagicLinkRateLimited')
              case RPCErrorCode.UserAlreadyLoggedIn:
                console.log('UserAlreadyLoggedIn')
                break
            }
          }
        }
      }
      loginWithMagicLink()
    }
  }, [auth.isLoggedIn])

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: 'center'
        }}
      >
        <Text style={styles.title}>Check your email</Text>
        <Text style={styles.subtitle}>
          We emailed a magic link to {email ? email : 'your email'}
        </Text>
        <Text style={styles.subtitle}>
          Click it to log in and come back to this screen
        </Text>
      </View>

      <View style={styles.emailIcon}>
        <LottieView
          source={require('../../../assets/email-animation.json')}
          style={{ width: 240 }}
          autoPlay
          loop
        />
      </View>

      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 40,
          width: '100%'
        }}
      >
        {!hasTried && <Text style={styles.subtitle}>Didn't get an email?</Text>}
        {!hasTried &&
          (!canTryAgain ? (
            <Text style={styles.subtitle}>Try again in {timer}s</Text>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setHasTried(true)
              }}
            >
              <Text
                style={[
                  styles.subtitle,
                  { color: colors.Black, fontWeight: FONT_WEIGHT.MEDIUM }
                ]}
              >
                Try again
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </SafeAreaView>
  )
}

export default observer(ConfirmEmail)

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
    marginHorizontal: 40,
    fontSize: 18,
    fontWeight: FONT_WEIGHT.REGULAR,
    color: colors.Gray500,
    textAlign: 'center'
  },
  emailIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
})
