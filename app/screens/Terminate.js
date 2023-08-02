import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  Modal,
  ImageBackground,
  Button,
} from "react-native";

import GlobalStyles from "../../GlobalStyles";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import TerminateCardAlert from "../utility/terminateCardAlert";
import Tagline from "../components/Tagline";
import apiCall from "../api/apiCall";

import BrokenCard from "../assets/TerminateCard/brokencard.svg";
import BrokenCardBottom from "../assets/TerminateCard/brokencardBottom.svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withSequence,
} from "react-native-reanimated";
import TerminatedCard from "./TerminatedCard";

const SIZE = 100.0;

const Terminate = ({ navigation, route }) => {
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const rotation = useSharedValue(0);

  const [terminate, setTerminate] = useState(false);

  const [modalVisible, setModalVisible] = useState(true);

  

  // useEffect(() => {

  //   translateY.value = withTiming(70, { duration: 1000 })
  //   translateX.value = withTiming(50, { duration: 4000 })
  //   rotation.value = withTiming(-50, { duration: 3000 })

  // }, [])

  useEffect(() => {}, []);
  const terminateFn = () => {
    navigation.navigate("TerminatedCard");
  };

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value * 8 },
        { rotateZ: `${rotation.value}deg` },
        { translateY: translateY.value * 1 },
      ],
    };
  }, []);

  const reanimatedTopStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: -translateX.value * 8 },
        { rotateZ: `${rotation.value}deg` },
      ],
    };
  }, []);

  const navigate = () => {
    
    navigation.navigate("CardSettings");
  };
  const handleYes = async () => {
    const ID = route?.params?.cardID;
    const result = await apiCall.FreezeUpdateCard(ID, "CARD_CLOSED");
    
    terminateAnimation();
    setModalVisible(!modalVisible);

    setTimeout(() => {
      setTerminate(true);
    }, 5000);
  };

  const terminateAnimation = () => {
    translateY.value = withTiming(70, { duration: 1000 });
    translateX.value = withTiming(50, { duration: 4000 });
    rotation.value = withTiming(-50, { duration: 3000 });
  };

  if (terminate) return <TerminatedCard />;

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
        <View style={{ marginTop: "10%" }}>
          <Animated.View style={reanimatedTopStyle}>
            <BrokenCard />
          </Animated.View>
          <Animated.View
            style={[{ position: "absolute", top: 109 }, reanimatedStyle]}
          >
            <BrokenCardBottom />
          </Animated.View>
        </View>
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
                    navigation.navigate("CardSettings", route.params);
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
      <View style={{ position: "absolute", bottom: "20%", left: "15%" }}>
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
    backgroundColor: GlobalStyles.Color.white,
    opacity: 0.9,
  },
  modalText: {
    color: GlobalStyles.Color.lightBlack,
    fontFamily: "Montserrat",
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
    color: GlobalStyles.Color.skyblue,
    fontFamily: "Montserrat",
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
    zIndex: -10,
  },
  bottomText: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  bottomTextBold: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
});

export default Terminate;
