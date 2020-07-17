import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'
import { observer } from 'mobx-react-lite'
import colors from '../constants/colors'
import WelcomeScreen from '../screens/Login/Welcome'
import ConfirmEmailScreen from '../screens/Login/ConfirmEmail'
import { useIsFocused } from '@react-navigation/native'

import { rootStore, useMst } from '../models/Root'

import magic from '../services/magic'

const Stack = createStackNavigator()

const AuthStack = ({ navigation }) => {
  const isFocused = useIsFocused()

  const { auth } = useMst()

  const checkIfLoggedIn = async () => {
    const isLoggedInMagic = await magic.user.isLoggedIn()
    rootStore.setIsLoading(false)

    if (isLoggedInMagic) {
      auth.login()
    }
  }

  useEffect(() => {
    checkIfLoggedIn()
  }, [isFocused])

  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        gestureEnabled: false,
        headerTitle: null,
        headerStyle: {
          backgroundColor: colors.Gray100,
          shadowColor: 'transparent'
        },
        headerLeft: ({ canGoBack }) => {
          return (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => {
                canGoBack && navigation.goBack()
              }}
            >
              <Feather name='arrow-left' size={24} />
            </TouchableOpacity>
          )
        }
      }}
    >
      <Stack.Screen name='Login' component={WelcomeScreen} />
      <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
    </Stack.Navigator>
  )
}

export default observer(AuthStack)
