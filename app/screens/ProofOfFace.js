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
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import images from '../assets/login/images'

import colors from "../config/colors";
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

const ProofOfFace = ({ navigation, back = true }) => {
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

      

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
        setFrontImage(result.assets[0].base64);
        setDocumentType(document);
      }
    } catch (error) {
      
    }
    setIsLoading(false);
  };

  const selectImage2 = async () => {
    setIsLoading(true);
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
      });

      

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
        setBackImage(result.assets[0].base64);
      }
    } catch (error) {
      
    }
    setIsLoading(false);
  };

  const handleSubmit = async () => {
    navigation.navigate("ProofOfAuthority");
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
      <ScrollView>
        <View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              {back && (
                <TouchableOpacity
                  onPress={() => handleBack()}
                  style={{
                    zIndex: 100,
                    position: "absolute",
                    top: 20,
                    left: 10,
                    backgroundColor: colors.light,
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="keyboard-backspace"
                    size={30}
                    color={colors.black}
                  />
                </TouchableOpacity>
              )}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 100,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: colors.light,
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 30,
                  }}
                >
                  <Text style={{ fontSize: 30 }}>{"Face verification"}</Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 30,
                    paddingVertical: 50,
                    backgroundColor: "white",
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                  }}
                >
                  <View style={{ marginBottom: 20 }}>
                    <Text style={{ textAlign: "left" }}>
                      Take a photo of you with your selfie camera. Please take a
                      photo using portrait orientation and ensure your face is
                      clearly visible and not blurry.
                    </Text>
                  </View>
                  <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width :"100%",height:300}}
                resizeMode="contain"
                source={require('../assets/icon-faceid.png')}
              />
            </View>
                  {/* <CountryOfResidence /> */}

                  {/* <View>
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
            </View> */}

                  <TouchableOpacity
                    style={styles.uploadContainer}
                    onPress={() => selectImage(documentType)}
                  >
                    {!frontImage ? (
                      <>
                        <FontAwesome name="camera" color="#D3D3D3" size={35} />
                        <Text
                          style={{
                            color: "#212529",
                            fontSize: 15,
                            marginTop: 2,
                          }}
                        >
                          Open camera
                        </Text>
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
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </Screen>
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

const ImageSelector = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.selectionBox1} onPress={onPress}>
      <View style={styles.selectionItem1}>
        <Icon
          name="chevron-up"
          iconColor="blue"
          backgroundColor="transparent"
          size={50}
        />
      </View>
      <View style={styles.selectionItem2}>
        <Text style={[styles.selectionText, styles.proofFont]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ImageReview = () => {
  return (
    <View style={styles.reviewHolder}>
      <View style={styles.reviewContainer}>
        <Text style={styles.proofFont}>Currently Signed</Text>
        <View style={styles.reviewText}>
          <Icon name="check-circle" backgroundColor="none" iconColor="blue" />
          <View style={styles.reviewSubText}>
            <Text style={styles.proofFont}>Under review</Text>
          </View>
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
    borderWidth: 1.5,
    // borderStyle: "dashed",
    height: 150,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  identifyDocument: {
    color: "#212529",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    marginBottom: 10,
  },
});

export default ProofOfFace;
