import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Marketplace = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.comingSoonText}>Coming Soon</Text>
    </View>
  )
}

export default Marketplace

const styles = StyleSheet.create({
    comingSoonText: {
        fontSize: 60,
        fontWeight: "bold",
        textAlign:"center",
        
    },
    mainContainer: {
        flex:1,
        justifyContent:"center",
        alignContent: "center",
       
    }
})