import React, { useEffect, useState, useContext } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import GlobalStyles from "../../GlobalStyles";
// import Text from "../components/Text";
import Screen from "../components/Screen";
import Button from "../components/AppButton";
import AuthContext from "../auth/context";
import w2GlobalAPI from "../api/w2Global";
import Icon from "../components/Icon";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AuthScreen from "../components/AuthScreen";
import { Dropdown } from "react-native-element-dropdown";
import Success from "../components/RegistrationSuccess";

const data = [
  { label: "Passport (recommended)", value: "passport" },
  { label: "Driving License", value: "drivers_licence" },
  { label: "Citizencard", value: "citizencard" },
  { label: "Birth ceritificate", value: "birth_certificate" },
];

const ProofOfID = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [imageUri, setImageUri] = useState();
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [documentType, setDocumentType] = useState("");

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };

  const selectImage = async (document) => {
    setIsLoading(true);
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
      });
      alert("Scan the back");
      const resultBack = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
      });

      console.log(result.assets[0]);

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
        setFrontImage(result.assets[0].base64);
        setBackImage(resultBack.assets[0].base64);
        setDocumentType("ID3");
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
    setIsLoading(false);
  };

  // const selectImage2 = async () => {
  //   setIsLoading(true);
  //   try {
  //     const result = await ImagePicker.launchCameraAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       base64: true,
  //     });

  //     console.log(result.assets[0]);

  //     if (!result.canceled) {
  //       setImageUri(result.assets[0].uri);
  //       setBackImage(result.assets[0].base64);
  //     }
  //   } catch (error) {
  //     console.log("Error reading an image", error);
  //   }
  //   setIsLoading(false);
  // };

  const handleSubmit = async () => {
    navigation.navigate("ProofOfFace");
    // setIsLoading(true);
    // const clientReference = phoneNumber;

    // const result = await w2GlobalAPI.verifyDocument(
    //   clientReference,
    //   documentType,
    //   frontImage,
    //   backImage
    // );

    // console.log("what is this", result.ok, result.data[0].result);

    // if (!result.ok || !result.data[0].result)
    //   return alert("Could not verify documents");

    // setUser((prev) => ({ ...prev, frontImage, backImage, documentType }));
    // navigation.navigate("BusinessAddress2");
    // setIsLoading(false);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  const handleBack = () => {
    navigation.navigate("ProofOfResidency");
  };

  return (
    <Screen>
      <AuthScreen
        title="Photo ID"
        img="elephantCard"
        width="60%"
        handleBack={handleBack}
      >
        <CountryOfResidence />
        <View>
          <Dropdown
            style={[styles.dropdown]}
            containerStyle={styles.dropdownContainer}
            data={data}
            maxHeight={100}
            labelField="label"
            valueField="value"
            placeholder={"Select"}
            placeholderStyle={{ fontSize: 14, color: "#D3D3D3" }}
            value={documentType}
            onChange={(item) => {
              setDocumentType(item.value);
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.uploadContainer}
          onPress={() => selectImage(documentType)}
        >
          {!frontImage ? (
            <>
              <MaterialCommunityIcons
                name="plus-circle-outline"
                color="#D3D3D3"
                size={30}
              />
              <Text style={{ color: "#D3D3D3" }}>Add document</Text>
            </>
          ) : (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {imageUri && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: imageUri }}
                    style={{ width: 100, height: 100 }}
                  />
                </View>
              )}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="check-circle"
                  color="#D3D3D3"
                  size={30}
                />
                <Text style={{ color: "#D3D3D3" }}>Uploaded</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>
        <Button
          title="Continue"
          textColor="white"
          color="black"
          onPress={() => handleSubmit()}
        />
      </AuthScreen>
    </Screen>
    // <Screen>
    //   <View style={{ flex: 1, padding: 20 }}>
    //     <View>
    //       <Text style={{ fontSize: 26, fontWeight: "700", color: "#00003d" }}>
    //         Proof of Residency
    //       </Text>
    //     </View>
    //     <View style={{ marginTop: 20 }}>
    //       <Text style={styles.signedSelect}>
    //         Please provide us a proof of your residence
    //       </Text>
    //     </View>

    //     <CountryOfResidence />

    //     <View style={styles.signedContainer}>
    //       <Text style={styles.signedSelect}>
    //         Select one document from the below categories
    //       </Text>
    //       {!frontImage && (
    //         <View style={styles.selectionContainer}>
    //           <ImageSelector
    //             title="Current signed passport"
    //             onPress={() => selectImage("ID3")}
    //           />
    //           <ImageSelector
    //             title="Current photo-card driving license"
    //             onPress={() => selectImage("ID1")}
    //           />
    //         </View>
    //       )}
    //     </View>

    //     {frontImage && <ImageReview />}

    //     {frontImage && !backImage && (
    //       <View style={styles.signedContainer}>
    //         <Text style={styles.signedSelect}>
    //           Select one document from the below categories
    //         </Text>
    //         <View style={styles.selectionContainer}>
    //           <ImageSelector title="Back of document" onPress={selectImage2} />
    //           {/* <TouchableOpacity style={styles.selectionBox1} onPress={selectImage2}>
    //           <Text style={styles.selectionText}>Back of document</Text>
    //         </TouchableOpacity> */}
    //         </View>
    //       </View>
    //     )}

    //     {backImage && (
    //       <>
    //         <View style={styles.signedContainer}>
    //           <Text style={styles.signedSelect}>
    //             Select one document from the below categories
    //           </Text>
    //           <ImageReview />
    //         </View>

    //         <View style={styles.continueButton}>
    //           <Button title="Continue" onPress={() => handleSubmit(user)} />
    //         </View>
    //       </>
    //     )}
    //   </View>
    // </Screen>
  );
};

const CountryOfResidence = () => {
  return (
    <View>
      <Text>Issuing country</Text>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <TouchableOpacity>
            <Image
              style={{ width: 25, height: 25 }}
              resizeMode="cover"
              source={require("../assets/image-ukflag.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerItem}>
          <Text>United Kingdom</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 7,
    flexDirection: "row",
    marginTop: 5,
    borderColor: "blue",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor: "white",
  },
  containerImage: {
    flex: 1,
  },
  containerItem: {
    flex: 7,
    justifyContent: "center",
  },
  signedContainer: {
    marginTop: 50,
  },
  continueButton: {
    position: "absolute",
    bottom: 50,
    left: 20,
    width: "100%",
  },
  reviewContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    width: "83%",
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  reviewHolder: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginVertical: 10,
  },
  reviewText: {
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  reviewSubText: {
    justifyContent: "center",
  },
  selectionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    // shadowColor: "grey",
    // shadowOpacity: 1,
    // shadowRadius: 10,
  },
  selectionBox1: {
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    width: 115,
    height: 140,
    borderRadius: 17,
    marginHorizontal: 5,
  },
  selectionBox2: {
    backgroundColor: "red",
    width: 110,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectionBox3: {
    backgroundColor: "blue",
    width: 110,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectionText: {
    color: "blue",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
  },
  selectionItem1: {
    alignItems: "center",
    flex: 1,
    paddingTop: 5,
  },
  selectionItem2: {
    flex: 3,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  signedSelect: {
    color: "#999",
    fontSize: 14,
  },
  proofFont: {
    color: "blue",
    fontWeight: "500",
    fontSize: 14,
  },
  label: {
    color: "black",
    fontSize: 16,
  },
  dropdown: {
    borderRadius: 10,
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 8,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
    borderColor: "#D3D3D3",
  },
  dropdownContainer: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  uploadContainer: {
    borderColor: "#D3D3D3",
    borderRadius: 10,
    borderWidth: 2.5,
    borderStyle: "dashed",
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProofOfID;

// import {
//   Camera,
//   CameraType,
// } from "expo-camera";
// import { useEffect, useState } from "react";
// import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import * as FaceDetector from "expo-face-detector";

// export default function App() {
//   const [permission, setPermission] = useState({});
//   const [faceData, setFaceData] = useState([]);

//   useEffect(() => {
//     requestPermissions();
//   }, []);

//   const requestPermissions = async () => {
//     try {
//     const {  status } = Camera.requestCameraPermissionsAsync()
//     setPermission(status === "granted");
//     console.log("status",status)
//     } catch (e) {
//       console.log('errpr',e)
//     }
//   };

//   if (permission !== false) {
//     return (
//       <View style={[styles.container, {justifyContent: "center", alignItems: "center"}]}>
//         <Text>No Access </Text>
//       </View>
//     );
//   }
//   const getFaceDataView = () => {
//     if (faceData.length === 0) {
//       return (
//         <View style={styles.faces}>
//           <Text style={styles.faceDesc}>No faces:</Text>
//         </View>
//       );
//     } else {
//       return faceData.map((face, index) => {
//         const eyesShut =
//           face.rightEyeOpenProbability < 0.4 &&
//           face.leftEyeOpenProbability < 0.4;
//         const winking =
//           !eyesShut &&
//           (face.rightEyeOpenProbability < 0.4 ||
//             face.leftEyeOpenProbability < 0.4);
//         const smiling = face.smilingProbability > 0.7;
//         return (
//           <>

//           <View style={styles.faces} key={index}>
//             <Text style={styles.faceDesc}>
//               Eyes Shut: {eyesShut.toString()}
//             </Text>
//             <Text style={styles.faceDesc}>Winking: {winking.toString()}</Text>
//             <Text style={styles.faceDesc}>Smiling: {smiling.toString()}</Text>

//           </View>
//           <View>
//               <Button title="press me" onPress={handleCapture}/>
//             </View>
//           </>
//         );
//       });
//     }
//   };

//   const handleFaceDetected = ({ faces}) => {
//     setFaceData(faces);
//     console.log(faces[0]);
//   };

//   const handleCapture = () => {

//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         f
//         type={CameraType.front}
//         style={styles.camera}
//         onFacesDetected={handleFaceDetected}
//         faceDetectorSettings={{
//           mode: FaceDetector.FaceDetectorMode.accurate,
//           detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
//           runClassifications: FaceDetector.FaceDetectorClassifications.none,
//           minDetectionInterval: 100,
//           tracking: true,
//         }}
//       >
//         {getFaceDataView()}
//       </Camera>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   faces: {
//     backgroundColor: "#ffffff",
//     alignSelf: "stretch",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: 16,
//     opacity: 0.2
//   },
//   faceDesc: {
//     fontSize: 20,
//   },
// });
