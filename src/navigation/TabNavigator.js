import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import colors from '../constants/colors'
import HomeStack from './HomeStack'
import ExploreStack from './ExploreStack'

const Tab = createBottomTabNavigator()

const TabNavigator = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {}
      }}
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: { borderTopWidth: 0 },
        activeTintColor: colors.Black,
        inactiveTintColor: colors.Gray500
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Feather name='home' size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name='Explore'
        component={ExploreStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Feather name='search' size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name='Settings'
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Feather name='user' size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
