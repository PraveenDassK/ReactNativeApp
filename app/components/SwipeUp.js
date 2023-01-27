import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {GestureHandlerRootView, GestureDetector, Gesture, Directions } from "react-native-gesture-handler"



function SwipeUp({children}) {
  const  navigation = useNavigation()
    const flingGesture = Gesture.Fling()
    .direction(Directions.UP)
    .onStart(()=>console.log("start"))
    .onEnd(()=> navigation.navigate("Login"));
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <GestureDetector gesture={flingGesture}>
          { children}
      </GestureDetector>
    </GestureHandlerRootView>
  )
}

export default SwipeUp