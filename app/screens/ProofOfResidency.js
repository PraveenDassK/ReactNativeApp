import React,{ useEffect, useState, useContext } from "react";
import * as ImagePicker from "expo-image-picker"
import { StyleSheet, View, Image, TouchableHighlight, TouchableOpacity } from "react-native";

import GlobalStyles from "../../GlobalStyles";
import Text from "../components/Text"
import Screen from "../components/Screen";
import Button from "../components/Button"
import AuthContext from "../auth/context";
import w2GlobalAPI from "../api/w2Global";

const ProofOfResidency = ({ navigation }) => {

  

  const { user, setUser } = useContext(AuthContext)

  const [imageUri, setImageUri] = useState();
  const [frontImage, setFrontImage] = useState(null)
  const [backImage, setBackImage] = useState(null)
  const [documentType, setDocumentType] = useState(null)

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) alert('You need to enable permission to access the library')
  }

  const selectImage = async (document) => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true
      })

      console.log(result)
     
      if (!result.canceled) {
        setImageUri(result.assets[0].uri)
        setFrontImage(result.assets[0].base64)
        setDocumentType(document)
      }

    } catch (error) {
      console.log("Error reading an image", error)
    }
  }

  const selectImage2 = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true
      })

      console.log(result)
     
      if (!result.canceled) {
        setImageUri(result.assets[0].uri)
        setBackImage(result.assets[0].base64)
      }

    } catch (error) {
      console.log("Error reading an image", error)
    }
  }

  const handleSubmit = async ({ phoneNumber }) => {
    const clientReference = phoneNumber

    const result = await w2GlobalAPI.verifyDocument({ clientReference, documentType, frontImage, backImage})

    console.log('what is this', result.ok, result.data, documentType)
    if (!result.ok || !result.data.result) return alert('Could not verify documents') 

    setUser(prev => ({...prev, frontImage, backImage, documentType}))
    navigation.navigate("BusinessAddress2")

  }

  useEffect(() => {
    requestPermission();
  }, [])


  return (
   
    <Screen>
      
        <View>
            <Text style={{fontSize: 30}}>Proof of Residency</Text>
        </View>
        <View>
            <Text>Please provide us a proof of your residence</Text>
        </View>

        <View>
            <Text>Your Country</Text>
        </View>

        <View style={styles.signedContainer}>
        {!frontImage && <View style={styles.selectionContainer}>
          <TouchableOpacity style={styles.selectionBox1} onPress={() => selectImage("ID3")}>
              <Text style={styles.selectionText}>Current signed passpoert</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectionBox2} onPress={() => selectImage("ID1")}>
              <Text style={styles.selectionText}>Current photo-card driving license</Text>
            </TouchableOpacity>

        </View>}
        </View>

       {frontImage && <View style={styles.reviewHolder}>
        <View style={styles.reviewContainer}>
          <Text>Currently Signed</Text>
          <View style={styles.reviewText}>
          <Text>Under review</Text>
          </View>
        </View>
        </View>}

        {frontImage && !backImage && <View style={styles.selectionContainer}>
          <TouchableOpacity style={styles.selectionBox1} onPress={selectImage2}>
            <Text style={styles.selectionText}>Back of document</Text>
          </TouchableOpacity>
        </View>}

        {backImage && <View style={styles.reviewHolder}>
        <View style={styles.reviewContainer}>
          <Text>Currently Signed</Text>
          <View style={styles.reviewText}>
          <Text>Under review</Text>
          </View>
        </View>
        </View>}
        
  


      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200, zIndex: 7 }} />}
      
    </View> */}
    <View style={styles.continueButton}>
     <Button title="Continue" color="blue" onPress={() => handleSubmit(user)}/>  
    </View>
   </Screen>
  );
};

const styles = StyleSheet.create({
  signedContainer: {
    marginTop: 50
  },
  continueButton: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  
  },
  reviewContainer:{
    backgroundColor: 'grey',
    width: "83%",
    height: 50, 
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
    
  },
  reviewHolder: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginVertical:10
  },
  reviewText: {
    flex:1,
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "flex-end"
    
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
  selectionText: {
    textAlign: "center"
  }

});

export default ProofOfResidency;
