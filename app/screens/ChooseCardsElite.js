import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, Image, Pressable, ScrollView, FlatList} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

import apiCall from "../api/apiCall";

  const ChooseCardsElite = () => {

    const [data, setData] = useState([])
    
   useEffect(()=> {
    loadData()
   },[])

    const loadData = async () => {
      const response = await apiCall.GetSubscriptions()
      setData(response[0])

      console.log("cardsApi", response[0].description, response[0].title, response[0].price)
    }
  




  return (
    // <ScrollView>
    <View style={styles.chooseCardsContainer}>
    

   

 

    <View style={styles.imageBox}>
        <Image style = {styles.image} source={require("../assets/image-cardyellow.png")}/>
    </View>
   
    <View style={styles.cardNameBox}>
        <Text style={styles.cardTitle}>{data.title}</Text>
        <Text style={styles.cardPrice}>{data.price} Per Month</Text>
    </View>

    <View style={styles.featureListBox}>


      <FlatList 
      data={data.description}
      keyExractor={item => item}
      renderItem={({item, id}) => (
        <View style={styles.featureListRow}>
          <Image style = {styles.iconImage} source={require("../assets/icon-awesomecheckcircle.png")}/>
          <Text style={styles.featureListText}>{item}</Text>
        </View>
      )}


      />
      
    
        {/* <View style={styles.featureListRow}>
          <Image style = {styles.iconImage} source={require("../assets/icon-awesomecheckcircle.png")}/>
          <Text style={styles.featureListText}>All Advanced Features</Text>
        </View>

        <View style={styles.featureListRow}>
            <Image style = {styles.iconImage} source={require("../assets/icon-awesomecheckcircle.png")}/>
            <Text style={styles.featureListTextPayments}>Payments (domestic):</Text>
            <Text style={styles.featureListSubText}>Transfer in/out: No Fee Upto 50 transactions</Text>
        </View>

        <View style={styles.featureListRow}>
          <Image style = {styles.iconImage} source={require("../assets/icon-awesomecheckcircle.png")}/>
          <Text style={styles.featureListTextCards}>Cards:</Text>
          <Text style={styles.featureListSubText}>Added expense cards with spending limits: 2 Free Expense Card</Text>
        </View>

        <View style={styles.featureListRow}>
          <Image style = {styles.iconImage} source={require("../assets/icon-awesomecheckcircle.png")}/>
          <Text style={styles.featureListTextBusiness}>Business Tool Kit:</Text>
          <Text style={styles.featureListSubText}>Free Logo Design</Text>
          <Text style={styles.featureListSubText}>Trade Mark Registration</Text>
          <Text style={styles.featureListSubText}>Desktop Support</Text>
        </View> */}



    </View>





    </View>
 

  );
};

const styles = StyleSheet.create({
Standard: {
position: "absolute",
left: "7.5%",
textAlign: "left",
color: "#0101FD",
fontSize: 18,
fontWeight: "700"

}, Premium: {
position: "absolute",
left: "45%",
color: "#999999",
fontSize: 18,
fontWeight: "700"

}, Elite: {
left: "87.5%",
color: "#999999",
fontSize: 18,
fontWeight: "700"

},whiteLine :{
width: "100%",
marginTop: "2.5%",
height: 1.5,
backgroundColor: "#ffffff"

}, ChooseCards: {
marginLeft: "7.5%",
marginTop: "5%",
fontWeight: "700",
fontSize: 26

}, imageBox: {
display: "flex",
justifyContent: "center",
alignItems: "center",

}, image: {
marginTop: "5%",
height: verticalScale(300),
width: horizontalScale(450),
resizeMode: "contain"

}, cardNameBox: {
marginTop: verticalScale(15),
width: "100%"

}, cardTitle: {
position: "absolute",
width: "100%",
textAlign: "center",
color: "#0101FD",
fontSize: 25,
fontWeight: "700"

}, cardPrice: {
marginTop: verticalScale(25),
width: "100%",
textAlign: "center",

}, featureListBox: {
backgroundColor: "white",
width: "90%",
left: "5%",
marginTop: "2.5%",
paddingTop: "2.5%",
paddingBottom: "2.5%",
borderRadius: 15,
marginBottom: "5%",
// shadowColor: '#000',
//     shadowOffset: { width: 1, height: 3 },
//     // shadowOpacity: 0.8,
//     shadowRadius: 14,
//     elevation: 5

}, featureListRow: {
width: "100%",
padding: "1%"
}, iconImage: {
height: verticalScale(20),
width: horizontalScale(20),
marginLeft: "1.5%",
resizeMode: "contain",

}, featureListText: {
position: "absolute",
left: "10%",
top: "30%",
fontWeight: "700"
}, featureListSubText: {
left: "9%",
color: "#999999",

}, featureListTextBusiness:{
position: "absolute",
left: "10%",
top: "10%",
fontWeight: "700"
}, featureListTextCards: {
 position: "absolute",
 left: "10%",
 top: "15%",
 fontWeight: "700"

}, featureListTextPayments: {
 position: "absolute",
 left: "10%",
 top: "20%",
 fontWeight: "700"
},

featureListTextCustomer: {
 position: "absolute",
 left: "10%",
 top: "18%",
 fontWeight: "700"
}
});


export default ChooseCardsElite;
