import React from 'react'
import { Text, TouchableOpacity, View} from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../config/colors';



const AuthScreen = ({children, title}) => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
   
    <TouchableOpacity onPress={console.log("go back")} style={{position: "absolute", top: 10, left:10, backgroundColor: colors.light, height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center"}}>
      <MaterialCommunityIcons name="keyboard-backspace" size={30} color={colors.black} />
      </TouchableOpacity>
    
    <View style={{  backgroundColor: colors.light,  borderTopLeftRadius: 25,borderTopRightRadius: 25,}}>
      <View style={{justifyContent: "center", alignItems: "center", marginVertical: 30}}>
        <Text style={{fontSize: 30}}>{title}</Text>
      </View>
      <View style={{paddingHorizontal: 30, paddingVertical: 50, backgroundColor: 'white',  borderTopLeftRadius: 25,
        borderTopRightRadius: 25,}}>
        { children }
      </View> 
      </View> 
    </View>
  )
}

export default AuthScreen