import React, { useEffect, useState, useContext } from "react";
import { TextInput, Text, StyleSheet, View, ScrollView,Image } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import apiweb3 from "../api/web3_api";
import AuthContext from "../auth/context";

const FUP = ({navigation}) => {
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [nftimg, setNftimg] = useState(null)
  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await apiweb3.GetBalance()
    setName(response.data.data.nftData[0].data.name)
    setDescription(response.data.data.nftData[0].data.description)
    setPrice(response.data.data.nftData[0].data.price)
    setNftimg(response.data.data.nftData[0].data.url)

  }
  return(
    <View style={styles.Container}>
    <ScrollView horizontal={true} >
    <View style={styles.Container11}>
    <Image
    style={styles.inputIcon}
    resizeMode="contain"
    source={{uri:nftimg}}
    />
    <Text style={styles.NameText}>
      <Text style={{fontWeight:'bold'}}>{name}</Text> 
    </Text>
    <Text style={styles.PriceText}>
    <Text style={{fontWeight:'bold'}}>{price}</Text> 
    </Text>
    
  </View>
  </ScrollView>
  </View>

  )


};
const styles = StyleSheet.create({
    Container: {
        marginTop: 10,
        width: 340,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#FFFFFF",
        height: "auto",
        borderRadius: 15,
        flexDirection: "column",
        padding: 20,
        justifyContent: "center",
      },
      Container11: {
        width: 200,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "grey",
        height: "auto",
        borderRadius: 15,
        flexDirection: "column",
        padding: 10,
        justifyContent: "center",
      },
      NameText: {
        textAlign: "center",
        fontSize: 14,
      },
      DescriptionText: {
        fontSize: 14,
        textAlign: "center",
        lineHeight: 30,
      },
      PriceText: {
        textAlign: "center",
        fontSize: 14,
      },
      inputIcon: {
        resizeMode: "contain",
        height: 200,
        marginTop: 10,
      },
})

export default FUP;