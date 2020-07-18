import React, { useState, useEffect } from 'react'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { enableScreens } from 'react-native-screens'
enableScreens()

import WelcomeScreen from '../screens/Login/Welcome'
import ConfirmEmailScreen from '../screens/Login/ConfirmEmail'

import colors from '../constants/colors'
import { observer } from 'mobx-react-lite'
import { useMst } from '../models/Root'

import magic from '../services/magic'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'

const Stack = createStackNavigator()

const RootNavigator = ({ navigation }) => {
  const { auth } = useMst()

  return (
    <Stack.Navigator
      initialRouteName='Auth'
      screenOptions={{
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: colors.Gray100,
          shadowColor: 'transparent'
        }
      }}
    >
      {!auth.isLoggedIn ? (
        <Stack.Screen
          name='Auth'
          component={AuthStack}
          options={{ headerShown: false }}
        ></Stack.Screen>
      ) : (
        <Stack.Screen
          name='Home'
          component={TabNavigator}
          options={{ headerShown: false }}
        ></Stack.Screen>
      )}
    </Stack.Navigator>
  )
}

export default observer(RootNavigator)
