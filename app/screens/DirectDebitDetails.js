import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Modal,
  Alert,
} from "react-native";
import Button from "../components/AppButton";
import AuthContext from "../auth/context";
import PinModal from "../components/PinModal";
import apiDDMandate from "../api/apiDDMandate";
import Tagline from "../components/Tagline";
import { moderateScale } from "../config/scaling";
import GlobalStyles from "../../GlobalStyles";

const DirectDebitDetails = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);

  const { darkMode, accountDetails, accountID, customerDetails } =
    useContext(AuthContext);
  const routeData = route.params;
  console.log(route.params);
  useEffect(() => {
    loadData();
  }, []);

  const handleCancelDD = async () => {
    setModalVisible(true);
  };

  const loadData = async () => {};
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : null,
        }}
      >
        <ActivityIndicator
          size="large"
          color={
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.black
          }
        />
      </View>
    );
  }
  const handleYes = () => {
    setModalVisible(false);
    setShowPinModal(true);
  };
  const handleSuccess = async () => {
    setShowPinModal(false);
    setIsLoading(true);
    const obj = {
      reason: "SERVICE_ENDED",
    };
    const deleteAcc = await apiDDMandate.DeleteDDBound(
      routeData?.mandateId,
      obj
    );
    // console.log(deleteAcc, "this is deleted account");
    navigation.navigate("DirectDebitSucess");
  };

  if (showPinModal) {
    return (
      <View style={styles.mainPinContainer}>
        {/* <RecentTransactions
        amount={10}
      /> */}
        {showPinModal ? (
          <PinModal title="Enter your PIN" success={() => handleSuccess()} />
        ) : null}
      </View>
    );
  }
  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/backgrounds/directdebit/DirectDebitBlack.png")
          : require("../assets/backgrounds/directdebit/DirectDebitWhite.png")
      }
      resizeMode="contain"
      imageStyle={{
        bottom: "-70%", // Whatever offset you want from the bottom
      }}
      style={{
        width: "100%",
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.lightTheme_bg,
        flex: 1,
      }}
    >
      <View style={styles.mainContainer}>
        <View
          style={{
            backgroundColor:
              darkMode === "DARK"
                ? "rgba(255,255,255,0.2)"
                : GlobalStyles.Color.white,
            borderRadius: 20,
            width: "100%",
            marginVertical: "5%",
            padding: "5%",
          }}
        >
          <Text
            style={
              darkMode === "DARK" ? styles.darkheadingText : styles.headingText
            }
          >
            {routeData.merchantName}
          </Text>
          <Text
            style={darkMode === "DARK" ? styles.darksubText : styles.subText}
          >
            Direct Debit
          </Text>
          <View style={{ marginVertical: "5%" }}>
            <Text
              style={
                darkMode === "DARK"
                  ? styles.darkheadingText
                  : styles.headingText
              }
            >
              Account Details
            </Text>
          </View>
          <View style={styles.eachContent}>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              Account Name
            </Text>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              {routeData.merchantName}
            </Text>
          </View>
          <View style={styles.eachContent}>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              Account Number
            </Text>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              {routeData.merchantNumber}
            </Text>
          </View>
          <View style={styles.eachContent}>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              External Reference
            </Text>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              {routeData.mandateId}
            </Text>
          </View>
          <View style={styles.eachContent}>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              Reference
            </Text>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              {routeData.mandateReference}
            </Text>
          </View>
          <View style={styles.eachContent}>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              Sort Code
            </Text>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              {routeData.merchantSortCode}
            </Text>
          </View>
        </View>
        <Button
          title="Cancel Direct Debit"
          textColor={"white"}
          color="danger"
          style={styles.boxShadow}
          transform={{ textTransform: "none" }}
          onPress={handleCancelDD}
        />
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
                Are your sure you want to{"\n"} cancel your Direct Debit?
              </Text>
              <View style={styles.buttonContaioner}>
                <View
                  style={{
                    width: "40%",
                  }}
                >
                  <Button title="Yes" onPress={handleYes} />
                </View>
                <View
                  style={{
                    width: "40%",
                  }}
                >
                  <Button
                    title="Cancel"
                    onPress={() => {
                      setModalVisible(false);
                    }}
                    color="white"
                    textColor="black"
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <Tagline darkMode={darkMode} />
    </ImageBackground>
  );
};

export default DirectDebitDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    alignSelf: "flex-start",
  },
  darkmainContainer: {
    flex: 1,
  },
  darkheadingText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  headingText: {
    color: GlobalStyles.Color.black,
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  subText: {
    color: GlobalStyles.Color.grayOnDD,
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
  },
  darksubText: {
    color: GlobalStyles.Color.darkGray,
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
  externalRefer: {
    color: "#FF0000",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
  eachContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "2%",
  },
  centeredView: {
    position: "absolute",
    top: "40%",
    paddingHorizontal: "5%",
  },
  modalView: {
    borderColor: "#FFFFFF33",
    borderWidth: 2,
    width: "100%",
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
    borderTopColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
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
  mainPinContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
