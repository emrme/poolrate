import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'
import colors from '../constants/colors'
import { FONT_WEIGHT } from '../constants/fonts'
import Logo from '../components/Logo'

const data = [
  {
    title: 'Discover best liquidity pools'
  },
  {
    title: 'Analyze and track your portfolio performance'
  },
  {
    title: 'Get notified of new opportunities'
  }
]

const screen = Dimensions.get('screen')

export default function Onboarding () {
  const _renderItem = ({ item, i }) => {
    return (
      <View style={styles.slide} key={i}>
        <Logo></Logo>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      <Swiper
        height={screen.height * 0.8}
        showsPagination
        activeDotColor={colors.Gray700}
        dotColor={colors.Gray500}
        activeDotStyle={{ width: 7, height: 7 }}
        dotStyle={{ width: 7, height: 7 }}
        loop={false}
      >
        {data.map((item, i) => _renderItem({ item, i }))}
      </Swiper>
      <View
        style={{
          flexDirection: 'row',
          height: screen.height * 0.2,
          justifyContent: 'center',
          alignItems: 'flex-end'
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            flex: 1,
            marginBottom: 60,
            marginHorizontal: 16,
            backgroundColor: colors.White,

            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: colors.Gray500,
            shadowOpacity: 0.2,
            borderRadius: 10,
            shadowRadius: 10,
            shadowOffset: { width: 5, height: 10 }
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: FONT_WEIGHT.MEDIUM }}>
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Gray100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide: {
    flex: 1,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: FONT_WEIGHT.SEMIBOLD,
    textAlign: 'center',
    marginTop: 40
  }
})
