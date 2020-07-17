import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
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

const Stack = createStackNavigator()

const RootNavigator = () => {
  const { auth } = useMst()

  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        // gestureEnabled: true,
        headerStyle: {
          backgroundColor: colors.Gray100,
          shadowColor: 'transparent'
        }
      }}
    >
      <Stack.Screen
        name='Home'
        component={TabNavigator}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name='Login'
        component={WelcomeScreen}
        options={({ navigation, route }) => {
          return {
            headerTitle: null,
            headerLeft: () => {
              return (
                <TouchableOpacity
                  style={{ marginLeft: 16 }}
                  onPress={() => {
                    if (navigation.canGoBack()) {
                      navigation.popToTop()
                    }
                  }}
                >
                  <Feather name='arrow-left' size={24} />
                </TouchableOpacity>
              )
            }
          }
        }}
      ></Stack.Screen>
      <Stack.Screen
        name='ConfirmEmail'
        component={ConfirmEmailScreen}
        options={({ navigation, route }) => {
          return {
            headerTitle: null,
            headerLeft: () => {
              return (
                <TouchableOpacity
                  style={{ marginLeft: 16 }}
                  onPress={() => {
                    if (navigation.canGoBack()) {
                      navigation.popToTop()
                    }
                  }}
                >
                  <Feather name='arrow-left' size={24} />
                </TouchableOpacity>
              )
            }
          }
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default observer(RootNavigator)
