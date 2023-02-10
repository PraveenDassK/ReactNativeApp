import React from 'react'
import { Text, View, Image, useWindowDimensions, StyleSheet } from 'react-native'


const OnboardingItem = ({ item }) => {

    const { width }= useWindowDimensions()


  return (
    <View style={{width}}>

        <Image source={item.image} style={[styles.image, {width, resizeMode: "contain"}]}/>
        <View style={{flex: 0.3}}>
            <Text>{item.title}</Text>
        </View>
    </View>
    
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    image: {
        flex: 0.7,
        justifyContent: "center"

    }
})