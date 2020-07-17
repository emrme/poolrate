import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'
import colors from '../constants/colors'
import HomeScreen from '../screens/Home'

const Stack = createStackNavigator()

import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeStack = () => {
  const insets = useSafeAreaInsets()

  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: colors.Gray100,
          shadowColor: 'transparent'
        }
      }}
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation, route }) => {
          return {
            headerTitleAlign: 'left',
            title: 'Portfolio',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 34
            },
            headerStyle: {
              height: 64 + insets.top,
              backgroundColor: 'transparent'
            }
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
