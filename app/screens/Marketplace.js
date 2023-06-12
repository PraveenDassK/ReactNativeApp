import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../config/scaling'

const Marketplace = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.comingSoonText}>coming</Text>
      <Text style={styles.comingSoonText}>soon</Text>

    </View>
  )
}

export default Marketplace

const styles = StyleSheet.create({
    comingSoonText: {
        textTransform: "uppercase",
        fontSize: moderateScale(80),
        fontWeight: "bold",
        textAlign:"center",

    },
    mainContainer: {
        flex:1,
        justifyContent:"center",
        alignContent: "center",
       
    }
})