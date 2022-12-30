import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Account2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account2}>
      <View style={styles.account2Child} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View
          style={[styles.rectangle, styles.timePosition, styles.timePosition1]}
        />
        <View style={styles.statusBar}>
          <View
            style={[styles.time, styles.timePosition, styles.timePosition1]}
          >
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={[styles.batteryIcon, styles.networkPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition1]}>
            <View
              style={[
                styles.networkChild,
                styles.networkLayout,
                styles.timePosition,
              ]}
            />
            <View
              style={[
                styles.networkItem,
                styles.networkPosition,
                styles.networkLayout,
              ]}
            />
            <View
              style={[
                styles.networkInner,
                styles.networkPosition,
                styles.networkLayout,
              ]}
            />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <Text style={[styles.hello, styles.mt14, styles.mr69]}>
        Account verification letter
      </Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("Account3")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt103, styles.ml1]} />
      <View style={[styles.account2Item, styles.mt48]} />
      <Text
        style={[
          styles.hello1,
          styles.mt44,
          styles.ml1,
          styles.helloTypo,
          styles.helloTypo1,
        ]}
      >
        <Text
          style={styles.yayYourDetails}
        >{`Yay! your details has been verified `}</Text>
        <Text style={styles.yayYourDetails}>{` `}</Text>
      </Text>
      <Text
        style={[
          styles.hello2,
          styles.mt123,
          styles.helloTypo,
          styles.helloTypo1,
        ]}
      >
        Resend email
      </Text>
      <Text
        style={[styles.emailLayout, styles.mt21, styles.weSentAColor]}
      >{`Please check your email and click on confirmation link to continue. `}</Text>
      <Text style={[styles.emailLayout, styles.mt21]}>
        <Text style={styles.yayYourDetails}>
          <Text style={styles.weSentAColor}>
            We sent a confirmation email to:
          </Text>
        </Text>
        <Text style={styles.yayYourDetails}>
          <Text style={styles.weSentAColor}> </Text>
        </Text>
        <Text style={styles.yayYourDetails}>
          <Text style={[styles.emailgmailcom1, styles.helloTypo]}>
            email@gmail.com
          </Text>
        </Text>
      </Text>
      <Image
        style={[styles.iconZocialEmail, styles.mt_433]}
        resizeMode="cover"
        source={require("../assets/icon-zocialemail.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt14: {
    marginTop: GlobalStyles.Margin.margin_20xs,
  },
  mr69: {
    marginRight: 69,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt103: {
    marginTop: 103,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt48: {
    marginTop: GlobalStyles.Margin.margin_19xl,
  },
  mt44: {
    marginTop: GlobalStyles.Margin.margin_15xl,
  },
  mt123: {
    marginTop: GlobalStyles.Margin.margin_55xl,
  },
  mt21: {
    marginTop: GlobalStyles.Margin.margin_11xs,
  },
  mt_433: {
    marginTop: -433,
  },
  timePosition: {
    left: 0,
    position: "absolute",
  },
  timePosition1: {
    bottom: 0,
    left: 0,
    top: 0,
  },
  networkPosition1: {
    height: 11,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
  },
  networkPosition: {
    left: "50%",
    position: "absolute",
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  helloTypo1: {
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  weSentAColor: {
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  account2Child: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  time: {
    width: 40,
  },
  batteryIcon: {
    width: 22,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkChild: {
    height: 4,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
  },
  rectangleView: {
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
  },
  network: {
    right: 68,
    width: 17,
  },
  statusBar: {
    marginTop: -15,
    right: 16,
    left: 15,
    height: 26,
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  hello: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    alignSelf: "flex-start",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  account2Item: {
    borderRadius: GlobalStyles.Border.br_lg,
    width: 326,
    height: 543,
    backgroundColor: GlobalStyles.Color.white,
  },
  yayYourDetails: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello1: {
    color: GlobalStyles.Color.indigo,
  },
  hello2: {
    color: GlobalStyles.Color.blue,
  },
  emailLayout: {
    width: 280,
    textAlign: "center",
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  emailgmailcom1: {
    color: GlobalStyles.Color.gray_1400,
  },
  iconZocialEmail: {
    width: 97,
    height: 66,
    opacity: 0.42,
  },
  account2: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Account2;
