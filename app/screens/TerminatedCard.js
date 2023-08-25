import React, { useState, useContext } from "react";
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
import AuthContext from "../auth/context";
import Tagline from "../components/Tagline";

const height = Dimensions.get("window").height;
const smallDevice = { height: 650 };
const isSmallDevice = height < smallDevice.height;
const TerminatedCard = ({ navigation }) => {
  const [animationProgress, setAnimationProgress] = useState(true);
  const { darkMode } = useContext(AuthContext);
  function ratingCompleted(rating) {}
  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/dashboardDark/terminatecard.jpg")
          : require("../assets/backgrounds/terminatecard.jpg")
      }
      resizeMode="contain"
      imageStyle={{
        bottom: darkMode === "DARK" ? "-28%" : "-70%", // Whatever offset you want from the bottom
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
      <View style={styles.terminatedCard}>
        <View
          style={
            darkMode === "DARK"
              ? styles.darkbrokenCreditCardParent
              : styles.brokenCreditCardParent
          }
        >
          <Image
            style={[styles.brokenCreditCardIcon, styles.groupParentPosition]}
            resizeMode="contain"
            source={require("../assets/brokencreditcard.png")}
          />
          <Text
            style={[
              darkMode === "DARK" ? styles.darkhello : styles.hello,
              styles.helloTypo,
            ]}
          >
            <Text style={styles.yourCardHas}>Your card has been </Text>
            <Text style={styles.yourCardHas}>terminated.</Text>
          </Text>
          <Text style={styles.useCard}>
            You will not be able to use this card.
          </Text>
        </View>
        {/* 
      <ImageBackground
        resizeMode="stretch"
        source={require("../assets/backgrounds/terminatecard.jpg")}
        style={styles.container}
      /> */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: 10,
            marginVertical: darkMode === "DARK" ? "0%" : "10%",
            marginTop: darkMode === "DARK" ? "30%" : "0%",
          }}
        >
          <View
            style={
              darkMode === "DARK"
                ? styles.darkbrokenBottomCreditCardParent
                : styles.brokenBottomCreditCardParent
            }
          >
            <Text style={styles.sadText}>Sad to see you go!</Text>
            <Text style={styles.sadTextNormal}>
              The planet is in danger! We can make it better{"\n"}.Stay connect
              with us:
              <Text
                style={styles.sadText}
                onPress={() => Linking.openURL("https://carbonyte.io/")}
              >
                {" "}
                www.carbonyte.io
              </Text>
            </Text>
            <Text style={styles.happytohelp}>
              Happy to hear your feedback.{" "}
            </Text>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={50}
              showRating={false}
              onFinishRating={ratingCompleted}
              style={{ width: "100%", marginVertical: 5 }}
            />
          </View>

          {/* <Text style={styles.bottomText}>
            Your <Text style={styles.bottomTextBold}> Money </Text>• Your{" "}
            <Text style={styles.bottomTextBold}>Planet</Text> • Your{" "}
            <Text style={styles.bottomTextBold}>Choice</Text>
          </Text> */}
        </View>
      </View>
      <Tagline darkMode={darkMode} />
    </ImageBackground>
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
  darkhello: {
    fontSize: 18,
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    textAlign: "center",
    width: "100%",
    top: "55%",
  },
  useCard: {
    fontSize: 16,
    color: GlobalStyles.Color.gray_1000,
    textAlign: "center",
    fontFamily: "Montserrat-Regular",

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
    backgroundColor: GlobalStyles.Color.white,
    borderColor: "#FFFFFF3",
    borderRadius: 20,
    marginTop: 30,
    marginLeft: "5%",
  },
  darkbrokenCreditCardParent: {
    width: "90%",
    height: 180,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderColor: "#FFFFFF3",
    borderRadius: 20,
    marginTop: 30,
    marginLeft: "5%",
  },
  brokenBottomCreditCardParent: {
    width: "100%",
    backgroundColor: "rgba(0,0,0, 0.5)",
    opacity: 1,
    borderColor: "#FFFFFF3",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    paddingVertical: 5,
  },
  darkbrokenBottomCreditCardParent: {
    width: "100%",
    backgroundColor: "rgba(255,255,255, 0.2)",
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
    // backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    height: "100%",
    width: "100%",
    position: "relative",
  },
  container: {
    width: "100%",
    height: height / 1.5,
    position: "absolute",
    bottom: 0,
    zIndex: 0,
  },
  bottomText: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    marginTop: 10,
  },
  bottomTextBold: {
    color: GlobalStyles.Color.white,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  sadText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    fontSize: 14,
  },
  sadTextNormal: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
  },
  happytohelp: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    marginTop: 10,
  },
});

export default TerminatedCard;
