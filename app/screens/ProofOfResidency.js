import React,{ useEffect, useState} from "react";
import * as ImagePicker from "expo-image-picker"
import { StyleSheet, View, Image } from "react-native";

import GlobalStyles from "../../GlobalStyles";
import Text from "../components/Text"
import Screen from "../components/Screen";

const ProofOfResidency = () => {
  const [imageUri, setImageUri] = useState();
  const [base64, setBase64] = useState()

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) alert('You need to enable permission to access the library')
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true
      })

      console.log(result)
     
      if (!result.canceled) {
        setImageUri(result.assets[0].uri)
        setBase64(result.assets[0].base64)
      }

    } catch (error) {
      console.log("Error reading an image", error)
    }
  }

  useEffect(() => {
    requestPermission();
  }, [])


  return (
   
    <Screen>
        <View>
            <Text>Proof of Residency</Text>
        </View>
        <View>
            <Text>Please provide us a proof of your residence</Text>
        </View>

        <View>
            <Text>Your Country</Text>
        </View>


        <View style={styles.selectionContainer}>
            <View style={styles.selectionBox1} >
              <Text>Current signed passpoert</Text>
            </View>
            <View style={styles.selectionBox2} >
              <Text>Current photo-card driving license</Text>
            </View>
            <View style={styles.selectionBox3} >
              <Text>Birth Certificate</Text>
            </View>
        </View>
        <View style={styles.reviewContainer}>

        </View>

        <View style={styles.selectionContainer}>
            <View style={styles.selectionBox1} >
              <Text>Current signed passpoert</Text>
            </View>
            <View style={styles.selectionBox2} >
              <Text>Current photo-card driving license</Text>
            </View>
            <View style={styles.selectionBox3} >
              <Text>Birth Certificate</Text>
            </View>
        </View>



      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, zIndex: 7 }} />}
      {base64 && <Text>{base64}</Text>}
    </View>
   </Screen>
  );
};

const styles = StyleSheet.create({
  reviewContainer:{
    backgroundColor: 'grey'
  },
  selectionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  selectionBox1: {
    backgroundColor: "grey",
    width: 110,
    height:150,
    borderRadius: 10,
    marginHorizontal: 5
  },
  selectionBox2: {
    backgroundColor: "red",
    width: 110,
    height: 150,
    borderRadius:10,
    marginHorizontal: 5
  },
  selectionBox3: {
    backgroundColor: "blue",
    width: 110,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 5

  },

});

export default ProofOfResidency;
