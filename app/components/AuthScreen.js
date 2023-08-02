import React from 'react'
import { Text, TouchableOpacity,TouchableWithoutFeedback, Keyboard, View, Image} from "react-native";


import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../config/colors';
import images from '../assets/login/images'



const AuthScreen = ({handleBack,children, title, img, width = "100%", back=true}) => {
  
  return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{ flex: 1, justifyContent: "flex-end",  }}>
   
    {back && (
      <TouchableOpacity onPress={() => handleBack()} style={{zIndex: 100, position: "absolute", top: 20, left:10, backgroundColor: colors.light, height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center"}}>
        <MaterialCommunityIcons name="keyboard-backspace" size={30} color={colors.black} />
      </TouchableOpacity>
    )}
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", }}>

       <Image
         style={{width}} 
         resizeMode="contain"
         source={images[img]}
        />
     
      </View>
    
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
    </TouchableWithoutFeedback>
  )
}

export default AuthScreen