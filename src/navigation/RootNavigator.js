import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { enableScreens } from 'react-native-screens'
enableScreens()

import WelcomeScreen from '../screens/Login/Welcome'
import ConfirmEmailScreen from '../screens/Login/ConfirmEmail'
import HomeScreen from '../screens/Home'
import colors from '../constants/colors'
import { observer } from 'mobx-react-lite'
import { useMst } from '../models/Root'

const Stack = createStackNavigator()

const RootNavigator = () => {
  const { auth } = useMst()

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
          </>
        ) : (
          <>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={({ navigation, route }) => {
                return { headerShown: false }
              }}
            ></Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default observer(RootNavigator)
