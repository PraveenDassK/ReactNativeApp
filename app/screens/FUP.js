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
    <ScrollView>
    <View style={styles.Container}>
    <Image
    style={styles.inputIcon}
    resizeMode="contain"
    source={{uri:nftimg}}
    />
    <Text style={styles.NameText}>
      <Text style={{fontWeight:'bold'}}>NFT Name:</Text> {name}
    </Text>
    <Text style={[styles.DescriptionText]}>
    <Text style={{fontWeight:'bold'}}>Description:</Text> {description}
    </Text>
    <Text style={styles.PriceText}>
    <Text style={{fontWeight:'bold'}}> Price:</Text> {price}
    </Text>
    
  </View>
  </ScrollView>
  )


};
const styles = StyleSheet.create({
    Container: {
        marginTop: "2.5%",
        width: GlobalStyles.DivContainer.width,
        marginLeft: GlobalStyles.DivContainer.marginLeft,
        backgroundColor: "#FFFFFF",
        height: "auto",
        borderRadius: 15,
        flexDirection: "column",
        padding: "5%",
        justifyContent: "center",
      },
      NameText: {
        textAlign: "left",
        fontSize: 14,
      },
      DescriptionText: {
        fontSize: 14,
        textAlign: "left",
        lineHeight: 30,
      },
      PriceText: {
        textAlign: "left",
        fontSize: 14,
      },
      inputIcon: {
        resizeMode: "contain",
        height: 200,
        marginTop: "5%",
      },
})

export default FUP;