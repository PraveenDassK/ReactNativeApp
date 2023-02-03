import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import api from "../api/web3_api"
import AuthContext from "../auth/context";

const Carbon = ({navigation}) => {
  const [nft, setNft] = useState({
    "name": "",
    "description": "",
    "imageURL": "../assets/image-profileplaceholder.png",
    "owner": "0x0"
  })
  
  //Calls the API once during load
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus',  () => {
      loadData()
    })
  },[])

  const loadData = async() =>{
    const response = await api.GetNFTId()
    const ipfsResponse = await api.GetNFTData(1)
    const nftData = {
      "name": ipfsResponse.title,
      "description": ipfsResponse.description,
      "imageURL": ipfsResponse.url,
      "owner": response.data[1]
    }
    setNft(nftData) 
  }
  console.log(nft)


  return (
    <View>
      <Text>
        {nft.name}
      </Text>

      <Image
        style={{width: '100%', height: '30%'}}
        source={{uri: nft.imageURL ? nft.imageURL : null}}
      >

      </Image>

      <Text>
        {nft.description}
      </Text>

    </View>
  )
};

const styles = StyleSheet.create({
  page:{

  },

});

export default Carbon;
