import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { enableScreens } from 'react-native-screens'
enableScreens()

import LoginScreen from '../screens/Login'

import colors from '../constants/colors'
const Stack = createStackNavigator()

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
        <Stack.Screen
          name='Login'
          component={LoginScreen}
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
    </NavigationContainer>
  )
}

export default RootNavigator
