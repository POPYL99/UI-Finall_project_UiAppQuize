import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './styles'
import { invalid } from 'moment/moment'
const HomeScreen = (props) => {

  

  return (
    <View style={styles.homeScreenContainer}>
      <Image
        source={require('./../assets/splash_logo.png')}
      />
      <TouchableOpacity style={styles.homeScreenBtn} onPress={() => {props.navigation.navigate('Settings', {invalid: false})}}>
        <Text style={styles.homeScreenBtn_text}>Let's Play</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
