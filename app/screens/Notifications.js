import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale } from '../config/scaling'


const Notifications = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Notifications</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: moderateScale(25)
    }
})
export default Notifications