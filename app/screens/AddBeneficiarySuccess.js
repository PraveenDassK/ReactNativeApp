import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"


const AddBeneficiarySuccess = ({navigation}) => {
  const user="Ortiz Tyrese";

  return (
    // <Pressable
    //   style={styles.addBeneficiarySuccess}
    //   onPress={() => navigation.navigate("SendMoney")}
    // >
      <View style={styles.groupParent}>
        <View style={styles.sucessContainer}>
        <Text style={styles.successText}>Beneficiary added {'\n'} successfully!!</Text>
        
        <Image
          style={{width:"50%",height:"50%"}}
          resizeMode="contain"
          source={require("../assets/icon-awesomecheckcircle.png")}
        />
        <Pressable style={styles.bottomButton} onPress={() => navigation.navigate("SendMoney")}>
          <Text style={styles.buttontext}>Send Money</Text>
        </Pressable>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  groupParent:{
    display: 'flex',
    flex:1,
    alignItems:"center",
    justifyContent: 'flex-end',
  },
  sucessContainer:{
    width:"100%", 
    backgroundColor:GlobalStyles.Color.white,
    alignItems:"center",
    flex:0.7,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    justifyContent:"space-between",
    paddingVertical:40,

  },
  successText:{
    textAlign:"center",
    fontSize:24,
    fontFamily:"Montserrat",
    color:GlobalStyles.Color.black,
  },
  bottomButton:{
    backgroundColor:GlobalStyles.Color.lightBlack,
    paddingVertical:20,
    width:"80%",
    borderRadius:15,
    alignItems:"center",
  },
  buttontext:{
    color:GlobalStyles.Color.white,
    fontFamily:"Montserrat-Regular",
    fontSize:14,
  }
});


export default AddBeneficiarySuccess;
