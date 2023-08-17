import React, { useEffect, useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Dimensions,
  Linking,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import PinModal from "../components/PinModal";
import Tagline from "../components/Tagline";
import AuthContext from "../auth/context";
//Card details apir
import cardDetails from "../api/cardDetails";
import { GetCardDetails } from "../utility/GetCardDetails.js";
import LinearAccountButton from "../components/LinearAccountButton";
const height = Dimensions.get("window").height;

const ViewPin = ({ navigation, route }) => {
  const [showPinModal, setShowPinModal] = useState(true);
  const [pinDetails, setPinDetails] = useState("1234");
  const [cardNumber, setCardNumber] = useState("1234 1234 1234 1234");
  const { darkMode } = useContext(AuthContext);
  useEffect(() => {
    getCardDetails();
  });

  const getCardDetails = async () => {
    const cardDetails = await GetCardDetails("734194812");
  };

  if (showPinModal) {
    return (
      <View style={styles.mainContainer}>
        {showPinModal ? (
          <PinModal
            title="Enter your PIN"
            success={() => setShowPinModal(false)}
          />
        ) : null}
      </View>
    );
  }
  return (
    <View
      style={
        darkMode === "DARK" ? styles.darkterminatedCard : styles.terminatedCard
      }
    >
      <ImageBackground
        source={
          darkMode === "DARK"
            ? require("../assets/CardsettingsIcons/viewpin.jpg")
            : require("../assets/backgrounds/viewpin.jpg")
        }
        style={{ width: "100%", height: height / 2 }}
        resizeMode="cover"
        imageStyle={{
          top: "0%", // Whatever offset you want from the bottom
        }}
        // style={styles.terminatedCard}
      />
      <View
        style={{
          position: "relative",
          display: "flex",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: "-30%",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.brokenBottomCreditCardParent}>
            <Text style={styles.sadText}>Card {cardNumber}</Text>
            <Text
              style={
                darkMode === "DARK"
                  ? styles.darksadTextNormal
                  : styles.sadTextNormal
              }
            >
              {pinDetails}
            </Text>
            <Text style={styles.happytohelp}>
              Don't share your PIN with anyone{" "}
            </Text>
            <View style={{ width: "100%", padding: "5%" }}>
              <LinearAccountButton
                title={"Return to card settings"}
                onPress={() => navigation.navigate("CardSettings")}
                darkMode={darkMode}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: "60%" }}>
          <Tagline darkMode={darkMode} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    width: "100%",
    position: "absolute",
  },
  helloTypo: {
    textAlign: "center",
    position: "absolute",
  },
  maskGroup236Position: {
    right: "50%",
    left: "50%",
    top: verticalScale(0),
  },
  brokenCreditCardIcon: {
    width: "20%",
    height: "20%",
    top: "25%",
  },
  yourCardHas: {},
  hello: {
    fontSize: 18,
    color: GlobalStyles.Color.indigo_100,
    fontFamily: "Montserrat",
    textAlign: "center",
    width: "100%",
    top: "55%",
  },
  useCard: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#707070",
    textAlign: "center",
    fontFamily: "Montserrat",

    width: "100%",
    top: "70%",
  },
  groupChild: {
    height: "100%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: "#D8EBF9",
    width: "100%",
    alignItems: "center",
  },
  maskGroup236: {},
  rectangleParent: {
    bottom: verticalScale(0),
    width: "30%",
    left: horizontalScale(130),
  },
  hello1: {
    top: "35%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    width: "100%",
  },
  groupParent: {
    width: "40%",
    height: verticalScale(50),
    bottom: verticalScale(0),
  },
  brokenCreditCardParent: {
    width: "90%",
    height: 180,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF3",
    borderRadius: 20,
    marginTop: 30,
    marginLeft: "5%",
  },
  brokenBottomCreditCardParent: {
    width: "100%",
    backgroundColor: "rgba(150, 150, 150, .25)",
    opacity: 1,
    borderColor: "#FFFFFF3",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    paddingVertical: "5%",
  },
  terminatedCard: {
    backgroundColor: GlobalStyles.Color.gray_100,
    height: "100%",
    width: "100%",
    position: "relative",
  },
  darkterminatedCard: {
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    height: "100%",
    width: "100%",
    position: "relative",
  },
  container: {
    width: "100%",
    height: height / 2,
    position: "absolute",
    top: 0,
    zIndex: 0,
  },

  sadText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
  },
  sadTextNormal: {
    color: GlobalStyles.Color.gray_1400,
    fontFamily: "Montserrat",
    fontSize: 80,
    letterSpacing: 20,
  },
  darksadTextNormal: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 80,
    letterSpacing: 20,
  },
  happytohelp: {
    color: GlobalStyles.Color.gray_2100,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    marginTop: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    paddingVertical: 15,
    backgroundColor: "#212529",
    color: GlobalStyles.Color.white,
    borderRadius: 10,
    width: "90%",
    marginVertical: 10,
  },
  buttonText: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
});

export default ViewPin;
