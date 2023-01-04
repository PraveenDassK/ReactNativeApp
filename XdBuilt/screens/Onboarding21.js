import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GlobalStyles from "../GlobalStyles";

const Onboarding21 = () => {
  return (
    <View style={styles.onboarding2}>
      <View style={styles.onboarding2Inner}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <View style={[styles.helloParent, styles.mt_686, styles.mr6]}>
        <Text style={styles.hello}>
          <Text style={styles.moneyExchange}>
            <Text style={styles.moneyExchange1}>Money Exchange</Text>
          </Text>
          <Text style={styles.moneyExchange}>
            <Text style={styles.moneyExchange1}>Simple, Safe and Secure</Text>
          </Text>
          <Text style={styles.text} />
          <Text style={styles.moneyExchange1} />
        </Text>
        <View style={styles.card1}>
          <View style={[styles.groupParent, styles.groupPosition]}>
            <View style={[styles.groupParent, styles.groupPosition]}>
              <Image
                style={[styles.path33118Icon, styles.groupChildLayout1]}
                resizeMode="cover"
                source={require("../assets/path-331186.png")}
              />
              <View style={[styles.groupParent, styles.groupPosition]}>
                <Image
                  style={[styles.groupItem, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/group-3175924.png")}
                />
                <Image
                  style={[styles.groupInner, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/group-3176024.png")}
                />
                <View
                  style={[styles.rectangleView, styles.groupChild5Layout]}
                />
                <Image
                  style={[styles.rectangleIcon, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-2620424.png")}
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
              style={[styles.groupIcon, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-3176424.png")}
            />
            <Image
              style={[styles.groupChild1, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/group-3176624.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-3176724.png")}
            />
          </View>
        </View>
        <Image
          style={styles.card1Icon}
          resizeMode="cover"
          source={require("../assets/card-1.png")}
        />
        <View style={styles.card11}>
          <View style={[styles.groupParent, styles.groupPosition]}>
            <View style={[styles.groupParent, styles.groupPosition]}>
              <Image
                style={[styles.path33118Icon1, styles.groupChildLayout1]}
                resizeMode="cover"
                source={require("../assets/path-3311825.png")}
              />
              <View style={[styles.groupParent, styles.groupPosition]}>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/group-3175925.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/group-3176025.png")}
                />
                <View style={[styles.groupChild5, styles.groupChild5Layout]} />
                <Image
                  style={[styles.groupChild6, styles.groupChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-26204.png")}
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
              style={[styles.groupChild7, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-3176425.png")}
            />
            <Image
              style={[styles.groupChild8, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/group-3176625.png")}
            />
            <Image
              style={[styles.groupChild9, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-3176725.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_686: {
    marginTop: -686,
  },
  mr6: {
    marginRight: 6,
  },
  groupPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChild5Layout: {
    backgroundColor: GlobalStyles.Color.gray_1700,
    width: "108.22%",
    height: "33.14%",
    position: "absolute",
  },
  bWrapperLayout: {
    width: "31.36%",
    height: "28.81%",
    position: "absolute",
  },
  businessTypo: {
    color: GlobalStyles.Color.white,
    letterSpacing: 0,
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    width: 28,
    position: "absolute",
  },
  groupChildLayout: {
    width: 48,
    position: "absolute",
  },
  groupChildPosition: {
    height: 22,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.gray_200,
    left: 0,
  },
  onboarding2Inner: {
    width: 375,
    height: 812,
  },
  moneyExchange1: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  moneyExchange: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  text: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  hello: {
    left: 10,
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 35,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "center",
    top: 0,
    position: "absolute",
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
  rectangleView: {
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
    top: "-2.33%",
    left: "-3.23%",
    fontSize: GlobalStyles.FontSize.size_15xl,
    letterSpacing: 5,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    position: "absolute",
  },
  bWrapper: {
    top: "81.74%",
    right: "65.67%",
    bottom: "-10.54%",
    left: "2.97%",
    opacity: 0.6,
  },
  business: {
    top: "89.5%",
    left: "8.93%",
  },
  groupParent: {
    left: 0,
  },
  groupIcon: {
    top: 19,
    right: 27,
    height: 32,
  },
  groupChild1: {
    right: 28,
    bottom: 11,
    height: 43,
  },
  groupChild2: {
    marginLeft: 19.5,
    top: 25,
    width: 16,
  },
  card1: {
    right: -6,
    bottom: 18,
    transform: [
      {
        rotateY: "340deg",
      },
    ],
    height: 299,
    width: 198,
    position: "absolute",
  },
  card1Icon: {
    bottom: 5,
    width: 186,
    height: 312,
    left: 0,
    position: "absolute",
  },
  path33118Icon1: {
    right: -60,
    bottom: -60,
    left: 0,
    top: 0,
  },
  groupChild3: {
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
  },
  groupChild4: {
    height: "10.54%",
    width: "81.73%",
    top: "28.89%",
    right: "9.14%",
    bottom: "60.57%",
    left: "9.14%",
  },
  groupChild5: {
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
  },
  groupChild6: {
    height: "13.04%",
    width: "21.19%",
    top: "101.17%",
    right: "-91.6%",
    bottom: "-14.22%",
    left: "170.41%",
  },
  bContainer: {
    top: "80.69%",
    right: "65.22%",
    bottom: "-9.5%",
    left: "3.42%",
    opacity: 0.4,
  },
  business1: {
    top: "88.55%",
    left: "10.23%",
  },
  groupChild7: {
    top: 24,
    right: 13,
    height: 30,
  },
  groupChild8: {
    right: 17,
    bottom: 14,
    height: 41,
  },
  groupChild9: {
    marginLeft: 29.69,
    top: 28,
    width: 17,
  },
  card11: {
    marginLeft: -94.08,
    left: "50%",
    height: 299,
    width: 198,
    bottom: 0,
    position: "absolute",
  },
  helloParent: {
    width: 302,
    height: 483,
  },
  onboarding2: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default Onboarding21;
