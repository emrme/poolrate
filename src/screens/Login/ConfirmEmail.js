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

import { Magic } from '@magic-sdk/react-native'

import getEnvVars from '../../../env.js'
const { MAGIC_API_KEY } = getEnvVars()

const magic = new Magic(MAGIC_API_KEY, {
  network: 'rinkeby'
})

magic.preload().then(() => console.log('Magic <iframe> loaded.'))

export default function Login ({ navigation, route }) {
  const email = route.params?.email

  const { auth } = useMst()

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: 'center'
        }}
      >
        <Text style={styles.title}>Check your email</Text>
        <Text style={styles.subtitle}>
          We sent a magic link to {email ? email : 'your email'}
        </Text>
        <Text style={styles.subtitle}>Click the link to log in or sign up</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%'
        }}
      >
        <Feather name='mail' size={96} color={colors.Gray200}></Feather>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Gray100,
    textAlign: 'center'
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
  }
})
