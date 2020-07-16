import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { enableScreens } from 'react-native-screens'
enableScreens()

import WelcomeScreen from '../screens/Login/Welcome'
import ConfirmEmailScreen from '../screens/Login/ConfirmEmail'

import colors from '../constants/colors'
const Stack = createStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: colors.Gray100,
            shadowColor: 'transparent'
          }
        }}
      >
        {true ? (
          <>
            <Stack.Screen
              name='Login'
              component={WelcomeScreen}
              options={({ navigation, route }) => {
                return {}
              }}
            ></Stack.Screen>
            <Stack.Screen
              name='ConfirmEmail'
              component={ConfirmEmailScreen}
              options={({ navigation, route }) => {
                return {}
              }}
            ></Stack.Screen>
          </>
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
