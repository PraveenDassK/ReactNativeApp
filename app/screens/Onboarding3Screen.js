import React from 'react'
import { StyleSheet, View, Pressable, Text, Image } from "react-native";

import GlobalStyles from "../../GlobalStyles";

function Onboarding3Screen() {
    return (
        <Pressable
          style={styles.onboarding3}
          onPress={() => navigation.navigate("SignUpPersonal")}
        >
          <Pressable
            style={styles.onboarding3Inner}
            onPress={() => navigation.navigate("SignUpPersonal")}
          >
            <View style={[styles.groupChild, styles.groupPosition1]} />
          </Pressable>
          <View style={[styles.statusBarBlack, styles.mt_844]}>
            <View style={[styles.rectangle, styles.groupPosition1]} />
            <View style={styles.statusBar}>
              <View style={[styles.time, styles.groupPosition1]}>
                <Text style={[styles.text, styles.bFlexBox]}>9:41</Text>
              </View>
              <Image
                style={[styles.batteryIcon, styles.networkPosition]}
                resizeMode="cover"
                source={require("../assets/icon-awesomebatterythreequarters.png")}
              />
              <Image
                style={styles.wifiIcon}
                resizeMode="cover"
                source={require("../assets/icon-awesomewifi.png")}
              />
              <View style={[styles.network, styles.networkPosition]}>
                <View style={[styles.networkChild, styles.networkLayout]} />
                <View
                  style={[
                    styles.networkItem,
                    styles.networkGroupPosition,
                    styles.networkLayout,
                  ]}
                />
                <View
                  style={[
                    styles.networkInner,
                    styles.networkGroupPosition,
                    styles.networkLayout,
                  ]}
                />
                <View style={[styles.rectangleView, styles.networkLayout]} />
              </View>
            </View>
          </View>
          <Text style={[styles.hello, styles.mt71, styles.ml1]}>
            <Text style={styles.theNextGenOfYour}>
              <Text style={styles.theNextGen}>The Next Gen of your</Text>
            </Text>
            <Text style={styles.theNextGenOfYour}>
              <Text style={styles.futureInvestments1}>Future Investments</Text>
            </Text>
          </Text>
          <Text style={[styles.hello1, styles.mt40, styles.ml1]}>
            Swipe to Get Started
          </Text>
          <View style={[styles.homeIndicator, styles.mt28, styles.ml1]} />
          <Image
            style={[styles.onboarding3Child, styles.mt75, styles.ml1]}
            resizeMode="cover"
            source={require("../assets/group-30627.png")}
          />
          <View style={[styles.orangeCard, styles.mt52, styles.ml134]}>
            <View style={[styles.groupParent, styles.groupPosition1]}>
              <View style={[styles.groupParent, styles.groupPosition1]}>
                <Image
                  style={[styles.path33118Icon, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/path-3311813.png")}
                />
                <View style={[styles.groupParent, styles.groupPosition1]}>
                  <Image
                    style={[styles.groupItem, styles.groupChildLayout1]}
                    resizeMode="cover"
                    source={require("../assets/logo-carbonytetext13.png")}
                  />
                  <Image
                    style={[styles.groupInner, styles.groupChildLayout1]}
                    resizeMode="cover"
                    source={require("../assets/logo-carbonytetextlarge13.png")}
                  />
                  <View style={[styles.groupChild1, styles.groupChildLayout]} />
                  <Image
                    style={[styles.rectangleIcon, styles.groupChildLayout1]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-2620413.png")}
                  />
                  <View style={[styles.bWrapperLayout, styles.bFramePosition]}>
                    <Text style={[styles.b, styles.bFlexBox]}>B</Text>
                  </View>
                  <Text style={[styles.business, styles.businessTypo]}>
                    BUSINESS
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.groupIcon, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/image-chip13.png")}
              />
              <Image
                style={styles.groupChild2}
                resizeMode="cover"
                source={require("../assets/logo-visa13.png")}
              />
              <Image
                style={[styles.groupChild3, styles.networkGroupPosition]}
                resizeMode="cover"
                source={require("../assets/icon-contactless13.png")}
              />
              <Text style={[styles.expDate1224, styles.bFlexBox]}>
                EX<Text style={styles.p}>P</Text> D<Text style={styles.p}>A</Text>TE
                12 / 24
              </Text>
            </View>
          </View>
          <View style={[styles.orangeCard, styles.mt_263, styles.mr135]}>
            <View style={[styles.groupParent, styles.groupPosition1]}>
              <View style={[styles.groupParent, styles.groupPosition1]}>
                <Image
                  style={[styles.path33118Icon1, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/path-3311814.png")}
                />
                <View style={[styles.groupParent, styles.groupPosition1]}>
                  <Image
                    style={[styles.groupChild4, styles.groupChildLayout1]}
                    resizeMode="cover"
                    source={require("../assets/logo-carbonytetext14.png")}
                  />
                  <Image
                    style={[styles.groupChild5, styles.groupChildLayout1]}
                    resizeMode="cover"
                    source={require("../assets/logo-carbonytetextlarge14.png")}
                  />
                  <View style={[styles.groupChild6, styles.groupChildLayout]} />
                  <Image
                    style={[styles.groupChild7, styles.groupChildLayout1]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-2620414.png")}
                  />
                  <View style={[styles.bContainer, styles.bWrapperLayout]}>
                    <Text style={[styles.b, styles.bFlexBox]}>B</Text>
                  </View>
                  <Text style={[styles.business1, styles.businessTypo]}>
                    BUSINESS
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.groupChild8, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/image-chip14.png")}
              />
              <Image
                style={styles.groupChild9}
                resizeMode="cover"
                source={require("../assets/logo-visa14.png")}
              />
              <Image
                style={[styles.groupChild10, styles.networkGroupPosition]}
                resizeMode="cover"
                source={require("../assets/icon-contactless14.png")}
              />
            </View>
          </View>
          <Pressable
            style={[styles.orangeCard, styles.mt_240, styles.ml1]}
            onPress={() => navigation.navigate("Onboarding2")}
          >
            <View style={[styles.groupParent, styles.groupPosition1]}>
              <View style={[styles.groupParent, styles.groupPosition1]}>
                <Image
                  style={[styles.path33118Icon2, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/path-3311815.png")}
                />
                <View style={[styles.groupParent, styles.groupPosition1]}>
                  <Image
                    style={[styles.groupItem, styles.groupChildLayout1]}
                    resizeMode="cover"
                    source={require("../assets/logo-carbonytetext15.png")}
                  />
                  <Image
                    style={[styles.groupInner, styles.groupChildLayout1]}
                    resizeMode="cover"
                    source={require("../assets/logo-carbonytetextlarge15.png")}
                  />
                  <View style={[styles.groupChild1, styles.groupChildLayout]} />
                  <Image
                    style={[styles.rectangleIcon, styles.groupChildLayout1]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-2620415.png")}
                  />
                  <View style={[styles.bFrame, styles.bFramePosition]}>
                    <Text style={[styles.b, styles.bFlexBox]}>B</Text>
                  </View>
                  <Text style={[styles.business, styles.businessTypo]}>
                    BUSINESS
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.groupIcon, styles.groupPosition]}
                resizeMode="cover"
                source={require("../assets/image-chip15.png")}
              />
              <Image
                style={styles.groupChild2}
                resizeMode="cover"
                source={require("../assets/logo-visa15.png")}
              />
              <Image
                style={[styles.groupChild3, styles.networkGroupPosition]}
                resizeMode="cover"
                source={require("../assets/icon-contactless15.png")}
              />
            </View>
          </Pressable>
        </Pressable>
      );
}

const styles = StyleSheet.create({
    mt_844: {
      marginTop: GlobalStyles.Margin.margin_92xs,
    },
    mt71: {
      marginTop: GlobalStyles.Margin.margin_33xl,
    },
    ml1: {
      marginLeft: GlobalStyles.Margin.margin_32xs,
    },
    mt40: {
      marginTop: GlobalStyles.Margin.margin_10xl,
    },
    mt28: {
      marginTop: GlobalStyles.Margin.margin_3xs,
    },
    mt75: {
      marginTop: GlobalStyles.Margin.margin_36xl,
    },
    mt52: {
      marginTop: GlobalStyles.Margin.margin_21xl,
    },
    ml134: {
      marginLeft: 134,
    },
    mt_263: {
      marginTop: -263,
    },
    mr135: {
      marginRight: 135,
    },
    mt_240: {
      marginTop: -240,
    },
    groupPosition1: {
      bottom: 0,
      left: 0,
      top: 0,
      position: "absolute",
    },
    bFlexBox: {
      textAlign: "left",
      position: "absolute",
    },
    networkPosition: {
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
    networkGroupPosition: {
      left: "50%",
      position: "absolute",
    },
    groupChildLayout1: {
      maxHeight: "100%",
      overflow: "hidden",
      maxWidth: "100%",
      position: "absolute",
    },
    groupChildLayout: {
      backgroundColor: GlobalStyles.Color.gray_1600,
      width: "108.22%",
      height: "33.14%",
      position: "absolute",
    },
    bFramePosition: {
      left: "2.97%",
      bottom: "-10.02%",
      right: "65.67%",
      top: "77.87%",
    },
    businessTypo: {
      color: GlobalStyles.Color.white,
      fontSize: GlobalStyles.FontSize.size_sm,
      // fontFamily: GlobalStyles.FontFamily.helvetica,
      fontWeight: "700",
      textAlign: "left",
      letterSpacing: 0,
      position: "absolute",
    },
    groupPosition: {
      width: 28,
      top: 19,
      position: "absolute",
    },
    bWrapperLayout: {
      opacity: 0.6,
      width: "31.36%",
      height: "32.16%",
      position: "absolute",
    },
    groupChild: {
      backgroundColor: GlobalStyles.Color.gray_300,
      left: 0,
      right: 0,
    },
    onboarding3Inner: {
      height: 844,
      width: 375,
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
      left: 0,
      right: 0,
      backgroundColor: GlobalStyles.Color.white,
    },
    text: {
      fontSize: GlobalStyles.FontSize.size_4xl,
      lineHeight: 24,
      fontWeight: "500",
      // fontFamily: GlobalStyles.FontFamily.roboto,
      color: GlobalStyles.Color.gray_1900,
      letterSpacing: 0,
      left: 0,
      top: 0,
    },
    time: {
      width: 40,
      left: 0,
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
      left: 0,
      position: "absolute",
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
    theNextGen: {
      // fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    },
    theNextGenOfYour: {
      margin: GlobalStyles.Margin.margin_33xs,
    },
    futureInvestments1: {
      fontWeight: "700",
      // fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    },
    hello: {
      fontSize: GlobalStyles.FontSize.size_8xl,
      lineHeight: 35,
      color: GlobalStyles.Color.indigo,
      textAlign: "center",
    },
    hello1: {
      fontSize: GlobalStyles.FontSize.size_base,
      color: GlobalStyles.Color.gray_800,
      // fontFamily: GlobalStyles.FontFamily.helvetica,
      textAlign: "center",
      letterSpacing: 0,
    },
    homeIndicator: {
      borderRadius: GlobalStyles.Border.br_8xl,
      backgroundColor: GlobalStyles.Color.black,
      width: 134,
      height: 5,
    },
    onboarding3Child: {
      width: 96,
      height: 10,
    },
    path33118Icon: {
      right: 12,
      bottom: -13,
      left: 0,
      top: 0,
    },
    groupItem: {
      height: "8.75%",
      width: "44.14%",
      top: "-59.55%",
      right: "58.61%",
      bottom: "150.8%",
      left: "-2.75%",
    },
    groupInner: {
      height: "10.96%",
      width: "76.89%",
      top: "30.34%",
      right: "15.15%",
      bottom: "58.7%",
      left: "7.96%",
    },
    groupChild1: {
      top: "69.9%",
      right: "-4.3%",
      bottom: "-3.04%",
      left: "-3.92%",
    },
    rectangleIcon: {
      height: "15.98%",
      width: "25.18%",
      top: "109.18%",
      right: "-96.23%",
      bottom: "-25.15%",
      left: "171.05%",
    },
    b: {
      top: "-2.08%",
      left: "-3.23%",
      fontSize: GlobalStyles.FontSize.size_16xl,
      letterSpacing: 5,
      color: GlobalStyles.Color.gray_1700,
      // fontFamily: GlobalStyles.FontFamily.helvetica,
      fontWeight: "700",
    },
    business: {
      top: "88.85%",
      left: "8.93%",
    },
    groupParent: {
      left: 0,
      right: 0,
    },
    groupIcon: {
      right: 27,
      height: 32,
    },
    groupChild2: {
      right: 28,
      bottom: 11,
      width: 48,
      height: 43,
      position: "absolute",
    },
    groupChild3: {
      marginLeft: 19.49,
      top: 25,
      width: 16,
      height: 22,
    },
    p: {
      letterSpacing: 0,
    },
    expDate1224: {
      marginTop: 30.93,
      left: 16,
      fontSize: GlobalStyles.FontSize.size_10xs,
      color: GlobalStyles.Color.gray_1600,
      // fontFamily: GlobalStyles.FontFamily.helvetica,
      top: "50%",
    },
    orangeCard: {
      width: 198,
      height: 299,
      transform: [
        {
          rotateY: "340deg",
        },
      ],
    },
    path33118Icon1: {
      right: 7,
      bottom: -22,
      left: 0,
      top: 0,
    },
    groupChild4: {
      height: "9.09%",
      width: "45.28%",
      top: "-61.09%",
      right: "57.53%",
      bottom: "152.01%",
      left: "-2.82%",
    },
    groupChild5: {
      height: "11.27%",
      width: "78.99%",
      top: "31.21%",
      right: "12.85%",
      bottom: "57.53%",
      left: "8.16%",
    },
    groupChild6: {
      top: "71.84%",
      right: "-4.21%",
      bottom: "-4.98%",
      left: "-4.02%",
    },
    groupChild7: {
      height: "16.51%",
      width: "26.04%",
      top: "112.39%",
      right: "-102.09%",
      bottom: "-28.9%",
      left: "176.05%",
    },
    bContainer: {
      top: "80.02%",
      right: "65.6%",
      bottom: "-12.18%",
      left: "3.04%",
    },
    business1: {
      top: "91.3%",
      left: "9.15%",
    },
    groupChild8: {
      right: 22,
      height: 33,
    },
    groupChild9: {
      right: 23,
      bottom: 3,
      width: 49,
      height: 45,
      position: "absolute",
    },
    groupChild10: {
      marginLeft: 22.62,
      top: 26,
      height: 23,
      width: 17,
    },
    path33118Icon2: {
      right: -48,
      bottom: -73,
      left: 0,
      top: 0,
    },
    bFrame: {
      opacity: 0.4,
      width: "31.36%",
      height: "32.16%",
      bottom: "-10.02%",
      right: "65.67%",
      top: "77.87%",
      position: "absolute",
    },
    onboarding3: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      backgroundColor: GlobalStyles.Color.white,
    },
  });
  

export default Onboarding3Screen