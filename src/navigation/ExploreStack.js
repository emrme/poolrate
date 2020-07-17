import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'
import colors from '../constants/colors'
import ExploreScreen from '../screens/Explore'

const Stack = createStackNavigator()

const ExploreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Explore'
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: colors.Gray100,
          shadowColor: 'transparent'
        }
      }}
    >
      <Stack.Screen
        name='Explore'
        component={ExploreScreen}
        options={({ navigation, route }) => {
          return {
            title: 'Explore',
            headerLeft: null
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default ExploreStack
