import React from 'react'
import { StyleSheet, View, Pressable, Text, Image } from "react-native";

import GlobalStyles from "../../GlobalStyles";
function Onboarding2Screen() {
    return (
        <Pressable
          style={styles.onboarding2}
          onPress={() => navigation.navigate("Onboarding3")}
        >
          <Pressable
            style={styles.onboarding2Inner}
            onPress={() => navigation.navigate("Onboarding3")}
          >
            <View style={[styles.groupChild, styles.groupPosition]} />
          </Pressable>
          <View style={[styles.statusBarBlack, styles.mt_844]}>
            <View style={[styles.rectangle, styles.groupPosition]} />
            <View style={styles.statusBar}>
              {/* <View style={[styles.time, styles.groupPosition]}>
                <Text style={styles.text}>9:41</Text>
              </View> */}
              {/* <Image
                style={[styles.batteryIcon, styles.networkPosition1]}
                resizeMode="cover"
                source={require("../assets/icon-awesomebatterythreequarters.png")}
              /> */}
              {/* <Image
                style={styles.wifiIcon}
                resizeMode="cover"
                source={require("../assets/icon-awesomewifi.png")}
              /> */}
              {/* <View style={[styles.network, styles.networkPosition1]}>
                <View style={[styles.networkChild, styles.networkChildLayout]} />
                <View style={[styles.networkItem, styles.networkPosition]} />
                <View style={[styles.networkInner, styles.networkPosition]} />
                <View style={[styles.rectangleView, styles.networkChildLayout]} />
              </View> */}
            </View>
          </View>
          <Text style={[styles.hello, styles.mt74, styles.ml1]}>
            <Text style={styles.moneyExchange}>
              <Text style={styles.moneyExchange1}>Money Exchange</Text>
            </Text>
            <Text style={styles.moneyExchange}>
              <Text style={styles.moneyExchange1}>Simple, Safe and Secure</Text>
            </Text>
            <Text style={styles.text1} />
            <Text style={styles.moneyExchange1} />
          </Text>
         
          <Image
            style={[styles.onboarding2Child, styles.mt96, styles.ml1]}
            resizeMode="cover"
            source={require("../assets/group-306271.png")}
          />
          <View style={[styles.cardLayout, styles.mt104, styles.ml110]}>
            <View style={[styles.groupParent, styles.groupPosition]}>
              <View style={[styles.groupParent, styles.groupPosition]}>
                <Image
                  style={[styles.path33118Icon, styles.groupChildLayout3]}
                  resizeMode="cover"
                  source={require("../assets/path-3311813.png")}
                />
                <View style={[styles.groupParent, styles.groupPosition]}>
                  <Image
                    style={[styles.groupItem, styles.groupChildLayout3]}
                    resizeMode="cover"
                    source={require("../assets/group-3175916.png")}
                  />
                  <Image
                    style={[styles.groupInner, styles.groupLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3176016.png")}
                  />
                  <View style={[styles.groupChild1, styles.groupChildLayout2]} />
                  <Image
                    style={[styles.rectangleIcon, styles.groupChildLayout3]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-2620416.png")}
                  />
                  <View style={[styles.bWrapper, styles.bWrapperLayout]}>
                    <Text style={styles.b}>B</Text>
                  </View>
                  <Text style={[styles.business, styles.businessTypo]}>
                    BUSINESS
                  </Text>
                </View>
              </View>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group-3176416.png")}
              />
              <Image
                style={styles.groupChild2}
                resizeMode="cover"
                source={require("../assets/group-3176616.png")}
              />
              <Image
                style={[styles.groupChild3, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/group-3176716.png")}
              />
            </View>
          </View>
          <View style={[styles.cardLayout, styles.mt_299, styles.mr122]}>
            <View style={[styles.groupParent, styles.groupPosition]}>
              <View style={[styles.groupParent, styles.groupPosition]}>
                <Image
                  style={[styles.path33118Icon, styles.groupChildLayout3]}
                  resizeMode="cover"
                  source={require("../assets/path-3311817.png")}
                />
                <View style={[styles.groupParent, styles.groupPosition]}>
                  <Image
                    style={[styles.groupChild4, styles.groupChildLayout3]}
                    resizeMode="cover"
                    source={require("../assets/group-3175917.png")}
                  />
                  <Image
                    style={[styles.groupChild5, styles.groupLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-3176017.png")}
                  />
                  <View style={[styles.groupChild6, styles.groupChildLayout2]} />
                  <Image
                    style={[styles.groupChild7, styles.groupChildLayout3]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-2620417.png")}
                  />
                  <View style={[styles.bContainer, styles.bWrapperLayout]}>
                    <Text style={styles.b}>B</Text>
                  </View>
                  <Text style={[styles.business1, styles.businessTypo]}>
                    BUSINESS
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.groupChild8, styles.groupChildLayout1]}
                resizeMode="cover"
                source={require("../assets/group-3176417.png")}
              />
              <Image
                style={[styles.groupChild9, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/group-3176617.png")}
              />
              <Image
                style={[styles.groupChild10, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/group-3176717.png")}
              />
            </View>
          </View>
          <Pressable
            style={[styles.card12, styles.mt_280, styles.ml4]}
            onPress={() => navigation.navigate("Onboarding1")}
          >
            <View style={[styles.groupParent, styles.groupPosition]}>
              <View style={[styles.groupParent, styles.groupPosition]}>
                <Image
                  style={[styles.path33118Icon2, styles.groupChildLayout3]}
                  resizeMode="cover"
                  source={require("../assets/path-3311818.png")}
                />
                <View style={[styles.groupParent, styles.groupPosition]}>
                  <Image
                    style={[styles.groupChild11, styles.groupChildLayout3]}
                    resizeMode="cover"
                    source={require("../assets/group-3175918.png")}
                  />
                  <Image
                    style={[styles.groupChild12, styles.groupChildLayout3]}
                    resizeMode="cover"
                    source={require("../assets/group-3176018.png")}
                  />
                  <View style={[styles.groupChild13, styles.groupChildLayout2]} />
                  <Image
                    style={[styles.groupChild14, styles.groupChildLayout3]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-262042.png")}
                  />
                  <View style={styles.bFrame}>
                    <Text style={styles.b}>B</Text>
                  </View>
                  <Text style={[styles.business2, styles.businessTypo]}>
                    BUSINESS
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.groupChild15, styles.groupChildLayout1]}
                resizeMode="cover"
                source={require("../assets/group-3176418.png")}
              />
              <Image
                style={[styles.groupChild16, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/group-3176618.png")}
              />
              <Image
                style={[styles.groupChild17, styles.groupChildPosition]}
                resizeMode="cover"
                source={require("../assets/group-3176718.png")}
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
    mt74: {
      marginTop: GlobalStyles.Margin.margin_35xl,
    },
    ml1: {
      marginLeft: GlobalStyles.Margin.margin_32xs,
    },
    mt84: {
      marginTop: GlobalStyles.Margin.margin_42xl,
    },
    mt96: {
      marginTop: 96,
    },
    mt104: {
      marginTop: 104,
    },
    ml110: {
      marginLeft: GlobalStyles.Margin.margin_49xl,
    },
    mt_299: {
      marginTop: GlobalStyles.Margin.margin_81xs,
    },
    mr122: {
      marginRight: 122,
    },
    mt_280: {
      marginTop: -280,
    },
    ml4: {
      marginLeft: GlobalStyles.Margin.margin_29xs,
    },
    groupPosition: {
      bottom: 0,
      left: 0,
      top: 0,
      position: "absolute",
    },
    networkPosition1: {
      height: 11,
      marginTop: -3,
      top: "50%",
      position: "absolute",
    },
    networkChildLayout: {
      width: 3,
      backgroundColor: GlobalStyles.Color.gray_1400,
      borderRadius: GlobalStyles.Border.br_7xs,
      bottom: 0,
      position: "absolute",
    },
    networkPosition: {
      left: "50%",
      width: 3,
      backgroundColor: GlobalStyles.Color.gray_1400,
      borderRadius: GlobalStyles.Border.br_7xs,
      bottom: 0,
      position: "absolute",
    },
    groupChildLayout3: {
      maxHeight: "100%",
      overflow: "hidden",
      maxWidth: "100%",
      position: "absolute",
    },
    groupLayout: {
      top: "30.34%",
      width: "76.89%",
      maxHeight: "100%",
      overflow: "hidden",
      maxWidth: "100%",
      position: "absolute",
    },
    groupChildLayout2: {
      backgroundColor: GlobalStyles.Color.gray_1600,
      width: "108.22%",
      height: "33.14%",
      position: "absolute",
    },
    bWrapperLayout: {
      opacity: 0.6,
      width: "31.36%",
      height: "32.16%",
      position: "absolute",
    },
    businessTypo: {
      color: GlobalStyles.Color.white,
      fontSize: GlobalStyles.FontSize.size_sm,
      
      fontWeight: "700",
      textAlign: "left",
      letterSpacing: 0,
      position: "absolute",
    },
    groupChildPosition: {
      height: 22,
      left: "50%",
      position: "absolute",
    },
    groupChildLayout1: {
      height: 30,
      position: "absolute",
    },
    groupChildLayout: {
      height: 41,
      position: "absolute",
    },
    groupChild: {
      backgroundColor: GlobalStyles.Color.gray_300,
      left: 0,
      right: 0,
    },
    onboarding2Inner: {
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

      color: GlobalStyles.Color.gray_1900,
      textAlign: "left",
      letterSpacing: 0,
      left: 0,
      top: 0,
      position: "absolute",
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
    moneyExchange1: {
    //   fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    },
    moneyExchange: {
      margin: GlobalStyles.Margin.margin_33xs,
    },
    text1: {
      fontWeight: "700",
    //   fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    },
    hello: {
      fontSize: GlobalStyles.FontSize.size_8xl,
      lineHeight: 35,
      color: GlobalStyles.Color.indigo,
      textAlign: "center",
    },
    homeIndicator: {
      borderRadius: GlobalStyles.Border.br_8xl,
      backgroundColor: GlobalStyles.Color.black,
      width: 134,
      height: 5,
    },
    onboarding2Child: {
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
    //   fontFamily: GlobalStyles.FontFamily.helvetica,
      fontWeight: "700",
      textAlign: "left",
      position: "absolute",
    },
    bWrapper: {
      top: "77.87%",
      right: "65.67%",
      bottom: "-10.02%",
      left: "2.97%",
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
      top: 19,
      right: 27,
      height: 32,
      width: 28,
      position: "absolute",
    },
    groupChild2: {
      right: 28,
      bottom: 11,
      height: 43,
      width: 48,
      position: "absolute",
    },
    groupChild3: {
      marginLeft: 19.49,
      top: 25,
      width: 16,
    },
    cardLayout: {
      transform: [
        {
          rotateY: "340deg",
        },
      ],
      height: 299,
      width: 198,
    },
    groupChild4: {
      height: "9.17%",
      width: "48.62%",
      top: "-65.2%",
      right: "54.65%",
      bottom: "156.03%",
      left: "-3.27%",
    },
    groupChild5: {
      height: "11.03%",
      right: "13.82%",
      bottom: "58.63%",
      left: "9.29%",
    },
    groupChild6: {
      top: "69.91%",
      right: "-3.55%",
      bottom: "-3.05%",
      left: "-4.68%",
    },
    groupChild7: {
      height: "12.58%",
      width: "16.14%",
      top: "97.91%",
      right: "-67.9%",
      bottom: "-10.49%",
      left: "151.76%",
    },
    bContainer: {
      top: "79.23%",
      right: "65.15%",
      bottom: "-11.38%",
      left: "3.49%",
    },
    business1: {
      top: "90.26%",
      left: "10.39%",
    },
    groupChild8: {
      top: 27,
      right: 25,
      width: 25,
    },
    groupChild9: {
      right: 26,
      bottom: 17,
      width: 43,
    },
    groupChild10: {
      marginLeft: 26.6,
      top: 29,
      width: 15,
    },
    path33118Icon2: {
      right: -60,
      bottom: -60,
      left: 0,
      top: 0,
    },
    groupChild11: {
      height: "6.35%",
      width: "49.25%",
      top: "-62.13%",
      right: "53.94%",
      bottom: "155.78%",
      left: "-3.18%",
    },
    groupChild12: {
      height: "10.54%",
      width: "81.73%",
      top: "28.89%",
      right: "9.14%",
      bottom: "60.57%",
      left: "9.14%",
    },
    groupChild13: {
      top: "68.51%",
      right: "-3.68%",
      bottom: "-1.65%",
      left: "-4.55%",
    },
    groupChild14: {
      height: "13.04%",
      width: "21.19%",
      top: "101.17%",
      right: "-91.6%",
      bottom: "-14.22%",
      left: "170.41%",
    },
    bFrame: {
      top: "76.67%",
      right: "65.22%",
      bottom: "-8.83%",
      left: "3.42%",
      opacity: 0.4,
      width: "31.36%",
      height: "32.16%",
      position: "absolute",
    },
    business2: {
      top: "87.88%",
      left: "10.23%",
    },
    groupChild15: {
      top: 24,
      right: 13,
      width: 28,
    },
    groupChild16: {
      right: 17,
      bottom: 14,
      width: 48,
    },
    groupChild17: {
      marginLeft: 29.69,
      top: 28,
      width: 17,
    },
    card12: {
      height: 299,
      width: 198,
    },
    onboarding2: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      backgroundColor: GlobalStyles.Color.white,
    },
  });



export default Onboarding2Screen