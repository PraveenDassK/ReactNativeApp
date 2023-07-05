import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  Modal,
  ImageBackground,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import TerminateCardAlert from "../utility/terminateCardAlert";
import Tagline from "../components/Tagline";
import apiCall from "../api/apiCall"
const Terminate = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);

  const navigate = () => {
    console.log("Function");
    navigation.navigate("CardSettings");
  };
  useEffect(() => {}, []);
  const terminateFn = () => {
    navigation.navigate("TerminatedCard");
  };
  const handleYes = async () => {
    //  const result = await apiCall.TerminateCard({ID},"Terminate")
    setModalVisible(!modalVisible);

    navigation.navigate("TerminatedCard");

  }

  return (
    <View style={styles.terminate}>
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/cardLion.png")} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are your sure you want to{"\n"} terminate your card?
            </Text>
            <View style={styles.buttonContaioner}>
              <View
                style={{
                  width: "50%",
                  borderRightColor: "grey",
                  borderRightWidth: 0.5,
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    navigation.navigate("CardSettings");
                  }}
                >
                  <Text style={styles.textStyle}>No</Text>
                </Pressable>
              </View>
              <View
                style={{
                  width: "50%",
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleYes}
                >
                  <Text style={styles.textStyle}>Yes</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <ImageBackground
        resizeMode="stretch"
        source={require("../assets/backgrounds/terminatecard.jpg")}
        style={styles.container}
      />
      <View style={{ position: "absolute", bottom: "20%",left:"15%" }}>
        <Text style={styles.bottomText}>
          Your <Text style={styles.bottomTextBold}> Money </Text>• Your{" "}
          <Text style={styles.bottomTextBold}>Planet</Text> • Your{" "}
          <Text style={styles.bottomTextBold}>Choice</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  terminate: {
    position: "relative",
    height: "100%",
  },
  centeredView: {
    position: "absolute",
    left: "10%",
    top: "40%",
  },
  modalView: {
    borderColor: "#FFFFFF33",
    borderWidth: 2,
    width: "90%",
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    opacity: 0.9,
  },
  modalText: {
    color: "#212529",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 25,
  },
  buttonContaioner: {
    display: "flex",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    // marginTop:20,
  },
  textStyle: {
    textAlign: "center",
    color: "blue",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    marginVertical: 13,
  },
  container: {
    width: "100%",
    height: 450,
    position: "absolute",
    bottom: 0,
    zIndex: 0,
  },
  bottomText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "light",
  },
  bottomTextBold: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  
});

export default Terminate;
