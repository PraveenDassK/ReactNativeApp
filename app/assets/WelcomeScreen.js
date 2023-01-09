import React, { Children } from 'react'
import { ImageBackground, Text, StyleSheet, SafeAreaView } from 'react-native'

import LoginRegister from '../components/LoginRegister'
import colors from '../config/colors'
function WelcomeScreen(props) {

    const { children } = props

    const image = {url: 'https://picsum.photos/200/300'}

  return (

    <ImageBackground blurRadius={10} source={image} style={styles.background}>
      <Text style={styles.text}>Welcome to</Text>
      <LoginRegister />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
  
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.black,
        fontSize: 30,
        marginVertical: 20,
        fontWeight: '600',
        
        // fontFamily: 'Courier'
    }

})

export default WelcomeScreen