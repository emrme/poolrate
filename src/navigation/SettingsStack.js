import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'
import colors from '../constants/colors'
import SettingsScreen from '../screens/Settings'

const Stack = createStackNavigator()

const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Settings'
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: colors.Gray100,
          shadowColor: 'transparent'
        }
      }}
    >
      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
        options={({ navigation, route }) => {
          return {
            title: 'Settings',
            headerLeft: null
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default SettingsStack
