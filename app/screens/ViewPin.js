import React, { useState } from "react";
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
import { Rating, AirbnbRating } from "react-native-ratings";
import BrokenCard from "../assets/TerminateCard/brokencardBottom.svg";
import BrokenTop from "../assets/TerminateCard/brokencard.svg";
import PinModal from "../components/PinModal";

const height = Dimensions.get("window").height;

const TerminatedCard = ({ navigation }) => {
  const [animationProgress, setAnimationProgress] = useState(true);
  const [showPinModal, setShowPinModal] = useState(true);

  function ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }
  if (showPinModal) {
    return (
      <View style={styles.mainContainer}>
        {/* <RecentTransactions
        amount={10}
      /> */}
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
    <View style={styles.terminatedCard}>
      <ImageBackground
        source={require("../assets/backgrounds/viewpin.jpg")}
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
            <Text style={styles.sadText}>Card **** **** **** 1234</Text>
            <Text style={styles.sadTextNormal}>1234</Text>
            <Text style={styles.happytohelp}>
              Don't share your PIN with anyone{" "}
            </Text>
            <Pressable style={styles.button}>
              <Text
                onPress={() => navigation.navigate("CardSettings")}
                style={styles.buttonText}
              >
                Return to card settings
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{    marginTop: "60%"}}>
          <Text style={styles.bottomText}>
            Your <Text style={styles.bottomTextBold}> Money </Text>• Your{" "}
            <Text style={styles.bottomTextBold}>Planet</Text> • Your{" "}
            <Text style={styles.bottomTextBold}>Choice</Text>
          </Text>
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
    fontWeight: "700",
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
    color: "black",
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
    paddingVertical: 5,
  },
  terminatedCard: {
    backgroundColor: GlobalStyles.Color.gray_100,
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
  bottomText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "light",
    textAlign: "center",
  },
  bottomTextBold: {
    color: "black",
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  sadText: {
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 18,
  },
  sadTextNormal: {
    color: "black",
    fontFamily: "Montserrat",
    fontWeight: "normal",
    fontSize: 80,
    letterSpacing:20,
  },
  happytohelp: {
    color: "#888888",
    fontFamily: "Montserrat",
    fontWeight: "normal",
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
    color: "white",
    borderRadius: 10,
    width: "90%",
    marginVertical:10
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "normal",
    textAlign: "center",
  },
});

export default TerminatedCard;
