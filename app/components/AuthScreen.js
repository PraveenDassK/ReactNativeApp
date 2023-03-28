import React from 'react'
import { Text, View} from "react-native";
import colors from '../config/colors';


const AuthScreen = ({children, title}) => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
    <View style={{  backgroundColor: colors.light,  borderTopLeftRadius: 20,borderTopRightRadius: 20,}}>
      <View style={{justifyContent: "center", alignItems: "center", marginVertical: 30}}>
        <Text style={{fontSize: 30}}>{title}</Text>
      </View>
      
      <View style={{paddingHorizontal: 30, paddingVertical: 50, backgroundColor: 'white',  borderTopLeftRadius: 20,
        borderTopRightRadius: 20,}}>
        { children }
      </View> 
      </View> 

    </View>
  )
}

export default AuthScreen