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
const height = Dimensions.get("window").height;

const TerminatedCard = ({ navigation }) => {
  const [animationProgress, setAnimationProgress] = useState(true);
  function ratingCompleted(rating) {
    
  }
  return (
    <View style={styles.terminatedCard}>
      {/* <View
          style={{
            // position: "absolute",
            zIndex: 10,
            flex: 1,
            height: "100%",
            left: "25%",
          }}
        >
         
          <View style={{ width: "100%", height: "50%", top: "10%" }}>
            <BrokenTop height="100%" />
          </View>
          <View style={{ width: "100%", height: "50%", bottom: "25%" }}>
            <BrokenCard height="100%" />
          </View>
        </View> */}
      <View style={styles.brokenCreditCardParent}>
        <Image
          style={[styles.brokenCreditCardIcon, styles.groupParentPosition]}
          resizeMode="contain"
          source={require("../assets/brokencreditcard.png")}
        />
        <Text style={[styles.hello, styles.helloTypo]}>
          <Text style={styles.yourCardHas}>Your card has been </Text>
          <Text style={styles.yourCardHas}>terminated.</Text>
        </Text>
        <Text style={styles.useCard}>
          You will not be able to use this card.
        </Text>
      </View>

      <ImageBackground
        resizeMode="stretch"
        source={require("../assets/backgrounds/terminatecard.jpg")}
        style={styles.container}
      />
      <View
        style={{
          position: "absolute",
          bottom: "20%",
          width: "100%",
          paddingHorizontal: 10,
        }}
      >
        <View style={styles.brokenBottomCreditCardParent}>
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
          <Text style={styles.happytohelp}>Happy to hear your feedback. </Text>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={50}
            showRating={false}
            onFinishRating={ratingCompleted}
            style={{ width: "100%", marginVertical: 5 }}
          />
        </View>

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
  terminatedCard: {
    backgroundColor: GlobalStyles.Color.gray_100,
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
