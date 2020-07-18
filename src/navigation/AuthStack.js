import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'
import { observer } from 'mobx-react-lite'
import colors from '../constants/colors'
import WelcomeScreen from '../screens/Login/Welcome'
import ConfirmEmailScreen from '../screens/Login/ConfirmEmail'
import Onboarding from '../screens/Onboarding'
import { useMst } from '../models/Root'

const Stack = createStackNavigator()

const AuthStack = ({ navigation }) => {
  const { user, showOnboarding } = useMst()

  useEffect(() => {
    user.checkIfLoggedIn()
  }, [])

  return (
    <Stack.Navigator
      initialRouteName='Onboarding'
      screenOptions={{
        gestureEnabled: false,
        headerTitle: null,
        headerStyle: {
          backgroundColor: colors.Gray100,
          shadowColor: 'transparent'
        }
      }}
    >
      {showOnboarding && (
        <Stack.Screen
          name='Onboarding'
          component={Onboarding}
          options={{ headerShown: false }}
        ></Stack.Screen>
      )}
      <Stack.Screen name='Login' component={WelcomeScreen} />
      <Stack.Screen
        name='ConfirmEmail'
        component={ConfirmEmailScreen}
        options={{
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
      />
    </Stack.Navigator>
  )
}

export default observer(AuthStack)
