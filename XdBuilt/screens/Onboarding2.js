import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Onboarding2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.onboarding2}
      onPress={() => navigation.navigate("Onboarding3")}
    >
      <View style={styles.helloParent}>
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
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-306271.png")}
        />
        <View style={[styles.card1, styles.cardPosition]}>
          <View style={[styles.groupParent, styles.path33118IconPosition]}>
            <View style={[styles.groupParent, styles.path33118IconPosition]}>
              <Image
                style={[
                  styles.path33118Icon,
                  styles.groupChildLayout3,
                  styles.path33118IconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/path-331186.png")}
              />
              <View style={[styles.groupParent, styles.path33118IconPosition]}>
                <Image
                  style={[styles.groupItem, styles.groupChildLayout3]}
                  resizeMode="cover"
                  source={require("../assets/group-317599.png")}
                />
                <Image
                  style={[styles.groupInner, styles.groupLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317609.png")}
                />
                <View
                  style={[styles.rectangleView, styles.groupChildLayout2]}
                />
                <Image
                  style={[styles.rectangleIcon, styles.groupChildLayout3]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262049.png")}
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
              source={require("../assets/group-317649.png")}
            />
            <Image
              style={styles.groupChild1}
              resizeMode="cover"
              source={require("../assets/group-317669.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-317679.png")}
            />
          </View>
        </View>
        <View style={[styles.card11, styles.cardPosition]}>
          <View style={[styles.groupParent, styles.path33118IconPosition]}>
            <View style={[styles.groupParent, styles.path33118IconPosition]}>
              <Image
                style={[
                  styles.path33118Icon,
                  styles.groupChildLayout3,
                  styles.path33118IconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/path-3311810.png")}
              />
              <View style={[styles.groupParent, styles.path33118IconPosition]}>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout3]}
                  resizeMode="cover"
                  source={require("../assets/group-3175910.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-3176010.png")}
                />
                <View style={[styles.groupChild5, styles.groupChildLayout2]} />
                <Image
                  style={[styles.groupChild6, styles.groupChildLayout3]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-2620410.png")}
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
              style={[styles.groupChild7, styles.groupChildLayout1]}
              resizeMode="cover"
              source={require("../assets/group-3176410.png")}
            />
            <Image
              style={[styles.groupChild8, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/group-3176610.png")}
            />
            <Image
              style={[styles.groupChild9, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-3176710.png")}
            />
          </View>
        </View>
        <Pressable
          style={styles.card12}
          onPress={() => navigation.navigate("Onboarding1")}
        >
          <View style={[styles.groupParent, styles.path33118IconPosition]}>
            <View style={[styles.groupParent, styles.path33118IconPosition]}>
              <Image
                style={[
                  styles.path33118Icon2,
                  styles.groupChildLayout3,
                  styles.path33118IconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/path-3311811.png")}
              />
              <View style={[styles.groupParent, styles.path33118IconPosition]}>
                <Image
                  style={[styles.groupChild10, styles.groupChildLayout3]}
                  resizeMode="cover"
                  source={require("../assets/group-3175911.png")}
                />
                <Image
                  style={[styles.groupChild11, styles.groupChildLayout3]}
                  resizeMode="cover"
                  source={require("../assets/group-3176011.png")}
                />
                <View style={[styles.groupChild12, styles.groupChildLayout2]} />
                <Image
                  style={[styles.groupChild13, styles.groupChildLayout3]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-26204.png")}
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
              style={[styles.groupChild14, styles.groupChildLayout1]}
              resizeMode="cover"
              source={require("../assets/group-3176411.png")}
            />
            <Image
              style={[styles.groupChild15, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/group-3176611.png")}
            />
            <Image
              style={[styles.groupChild16, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-3176711.png")}
            />
          </View>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
    transform: [
      {
        rotateY: "340deg",
      },
    ],
    marginTop: -128.09,
    height: 299,
    width: 198,
    top: "50%",
    position: "absolute",
  },
  path33118IconPosition: {
    left: 0,
    top: 0,
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
    backgroundColor: GlobalStyles.Color.gray_1700,
    width: "108.22%",
    height: "33.14%",
    position: "absolute",
  },
  bWrapperLayout: {
    opacity: 0.6,
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
  groupChild: {
    marginLeft: -44.73,
    width: 96,
    height: 10,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  path33118Icon: {
    right: 12,
    bottom: -13,
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
  },
  business: {
    top: "89.5%",
    left: "8.93%",
  },
  groupParent: {
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  groupIcon: {
    top: 19,
    right: 27,
    height: 32,
    width: 28,
    position: "absolute",
  },
  groupChild1: {
    right: 28,
    bottom: 11,
    height: 43,
    width: 48,
    position: "absolute",
  },
  groupChild2: {
    marginLeft: 19.5,
    top: 25,
    width: 16,
  },
  card1: {
    right: -6,
  },
  groupChild3: {
    height: "9.17%",
    width: "48.62%",
    top: "-65.2%",
    right: "54.65%",
    bottom: "156.03%",
    left: "-3.27%",
  },
  groupChild4: {
    height: "11.03%",
    right: "13.82%",
    bottom: "58.63%",
    left: "9.29%",
  },
  groupChild5: {
    top: "69.91%",
    right: "-3.55%",
    bottom: "-3.05%",
    left: "-4.68%",
  },
  groupChild6: {
    height: "12.58%",
    width: "16.14%",
    top: "97.91%",
    right: "-67.9%",
    bottom: "-10.49%",
    left: "151.76%",
  },
  bContainer: {
    top: "83.3%",
    right: "65.15%",
    bottom: "-12.1%",
    left: "3.49%",
  },
  business1: {
    top: "90.93%",
    left: "10.39%",
  },
  groupChild7: {
    top: 27,
    right: 25,
    width: 25,
  },
  groupChild8: {
    right: 26,
    bottom: 17,
    width: 43,
  },
  groupChild9: {
    marginLeft: 26.6,
    top: 29,
    width: 15,
  },
  card11: {
    left: -6,
  },
  path33118Icon2: {
    right: -60,
    bottom: -60,
  },
  groupChild10: {
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
  },
  groupChild11: {
    height: "10.54%",
    width: "81.73%",
    top: "28.89%",
    right: "9.14%",
    bottom: "60.57%",
    left: "9.14%",
  },
  groupChild12: {
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
  },
  groupChild13: {
    height: "13.04%",
    width: "21.19%",
    top: "101.17%",
    right: "-91.6%",
    bottom: "-14.22%",
    left: "170.41%",
  },
  bFrame: {
    top: "80.69%",
    right: "65.22%",
    bottom: "-9.5%",
    left: "3.42%",
    opacity: 0.4,
    width: "31.36%",
    height: "28.81%",
    position: "absolute",
  },
  business2: {
    top: "88.55%",
    left: "10.23%",
  },
  groupChild14: {
    top: 24,
    right: 13,
    width: 28,
  },
  groupChild15: {
    right: 17,
    bottom: 14,
    width: 48,
  },
  groupChild16: {
    marginLeft: 29.69,
    top: 28,
    width: 17,
  },
  card12: {
    marginTop: -110,
    marginLeft: -94.08,
    height: 299,
    width: 198,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  helloParent: {
    width: 302,
    height: 589,
  },
  onboarding2: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
    paddingLeft: 34,
    paddingTop: GlobalStyles.Padding.padding_8xl,
    paddingRight: 39,
  },
});

export default Onboarding2;
