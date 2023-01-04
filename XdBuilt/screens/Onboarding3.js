import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Onboarding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding3}>
      <View style={styles.helloParent}>
        <Text style={styles.hello}>
          <Text style={styles.theNextGenOfYour}>
            <Text style={styles.theNextGen}>The Next Gen of your</Text>
          </Text>
          <Text style={styles.theNextGenOfYour}>
            <Text style={styles.futureInvestments1}>Future Investments</Text>
          </Text>
        </Text>
        <Text style={styles.hello1}>Swipe to Get Started</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-30627.png")}
        />
        <View style={[styles.orangeCard, styles.cardLayout]}>
          <View style={[styles.groupParent, styles.path33118IconPosition]}>
            <View style={[styles.groupParent, styles.path33118IconPosition]}>
              <Image
                style={[
                  styles.path33118Icon,
                  styles.groupChildLayout,
                  styles.path33118IconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/path-331186.png")}
              />
              <View style={[styles.groupParent, styles.path33118IconPosition]}>
                <Image
                  style={[styles.groupItem, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317596.png")}
                />
                <Image
                  style={[styles.groupInner, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317606.png")}
                />
                <View
                  style={[styles.rectangleView, styles.groupChild5Layout]}
                />
                <Image
                  style={[styles.rectangleIcon, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262046.png")}
                />
                <View style={[styles.bWrapperLayout, styles.bFramePosition]}>
                  <Text style={[styles.b, styles.bTypo]}>B</Text>
                </View>
                <Text style={[styles.business, styles.businessTypo]}>
                  BUSINESS
                </Text>
              </View>
            </View>
            <Image
              style={[styles.groupIcon, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-317646.png")}
            />
            <Image
              style={styles.groupChild1}
              resizeMode="cover"
              source={require("../assets/group-317666.png")}
            />
            <Image
              style={styles.groupChild2}
              resizeMode="cover"
              source={require("../assets/group-317676.png")}
            />
            <Text style={[styles.expDate1224, styles.bTypo]}>
              EX<Text style={styles.p}>P</Text> D<Text style={styles.p}>A</Text>
              TE 12 / 24
            </Text>
          </View>
        </View>
        <View style={[styles.yellowCard, styles.cardLayout]}>
          <View style={[styles.groupParent, styles.path33118IconPosition]}>
            <View style={[styles.groupParent, styles.path33118IconPosition]}>
              <Image
                style={[
                  styles.path33118Icon1,
                  styles.groupChildLayout,
                  styles.path33118IconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/path-331187.png")}
              />
              <View style={[styles.groupParent, styles.path33118IconPosition]}>
                <Image
                  style={[styles.groupChild3, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317597.png")}
                />
                <Image
                  style={[styles.groupChild4, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317607.png")}
                />
                <View style={[styles.groupChild5, styles.groupChild5Layout]} />
                <Image
                  style={[styles.groupChild6, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262047.png")}
                />
                <View style={[styles.bContainer, styles.bWrapperLayout]}>
                  <Text style={[styles.b, styles.bTypo]}>B</Text>
                </View>
                <Text style={[styles.business1, styles.businessTypo]}>
                  BUSINESS
                </Text>
              </View>
            </View>
            <Image
              style={[styles.groupChild7, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-317647.png")}
            />
            <Image
              style={styles.groupChild8}
              resizeMode="cover"
              source={require("../assets/group-317667.png")}
            />
            <Image
              style={styles.groupChild9}
              resizeMode="cover"
              source={require("../assets/group-317677.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.greenCard, styles.cardLayout]}
          onPress={() => navigation.navigate("Onboarding2")}
        >
          <View style={[styles.groupParent, styles.path33118IconPosition]}>
            <View style={[styles.groupParent, styles.path33118IconPosition]}>
              <Image
                style={[
                  styles.path33118Icon2,
                  styles.groupChildLayout,
                  styles.path33118IconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/path-331188.png")}
              />
              <View style={[styles.groupParent, styles.path33118IconPosition]}>
                <Image
                  style={[styles.groupItem, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317598.png")}
                />
                <Image
                  style={[styles.groupInner, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-317608.png")}
                />
                <View
                  style={[styles.rectangleView, styles.groupChild5Layout]}
                />
                <Image
                  style={[styles.rectangleIcon, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-262048.png")}
                />
                <View style={[styles.bFrame, styles.bFramePosition]}>
                  <Text style={[styles.b, styles.bTypo]}>B</Text>
                </View>
                <Text style={[styles.business, styles.businessTypo]}>
                  BUSINESS
                </Text>
              </View>
            </View>
            <Image
              style={[styles.groupIcon, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/group-317648.png")}
            />
            <Image
              style={styles.groupChild1}
              resizeMode="cover"
              source={require("../assets/group-317668.png")}
            />
            <Image
              style={styles.groupChild2}
              resizeMode="cover"
              source={require("../assets/group-317678.png")}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    transform: [
      {
        rotateY: "340deg",
      },
    ],
    height: 299,
    width: 198,
    top: "50%",
    position: "absolute",
  },
  path33118IconPosition: {
    left: 0,
    top: 0,
  },
  groupChildLayout: {
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
  bFramePosition: {
    left: "2.97%",
    bottom: "-10.54%",
    right: "65.67%",
    top: "81.74%",
  },
  bTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  businessTypo: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    letterSpacing: 0,
    fontWeight: "700",
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
    height: "28.81%",
    position: "absolute",
  },
  theNextGen: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  theNextGenOfYour: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  futureInvestments1: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  hello: {
    left: 37,
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 35,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  hello1: {
    marginLeft: -65.5,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    letterSpacing: 0,
    left: "50%",
    bottom: 0,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -47.5,
    bottom: 56,
    width: 96,
    height: 10,
    left: "50%",
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
    fontWeight: "700",
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
    right: 27,
    height: 32,
  },
  groupChild1: {
    right: 28,
    bottom: 11,
    width: 48,
    height: 43,
    position: "absolute",
  },
  groupChild2: {
    marginLeft: 19.49,
    top: 25,
    width: 16,
    height: 22,
    left: "50%",
    position: "absolute",
  },
  p: {
    letterSpacing: 0,
  },
  expDate1224: {
    marginTop: 31.9,
    left: 16,
    fontSize: GlobalStyles.FontSize.size_8xs,
    color: GlobalStyles.Color.gray_1700,
    top: "50%",
    textAlign: "left",
  },
  orangeCard: {
    marginTop: -209.86,
    right: -6,
  },
  path33118Icon1: {
    right: 7,
    bottom: -22,
  },
  groupChild3: {
    height: "9.09%",
    width: "45.28%",
    top: "-61.09%",
    right: "57.53%",
    bottom: "152.01%",
    left: "-2.82%",
  },
  groupChild4: {
    height: "11.27%",
    width: "78.99%",
    top: "31.21%",
    right: "12.85%",
    bottom: "57.53%",
    left: "8.16%",
  },
  groupChild5: {
    top: "71.84%",
    right: "-4.21%",
    bottom: "-4.98%",
    left: "-4.02%",
  },
  groupChild6: {
    height: "16.51%",
    width: "26.04%",
    top: "112.39%",
    right: "-102.09%",
    bottom: "-28.9%",
    left: "176.05%",
  },
  bContainer: {
    top: "83.99%",
    right: "65.6%",
    bottom: "-12.8%",
    left: "3.04%",
  },
  business1: {
    top: "91.97%",
    left: "9.15%",
  },
  groupChild7: {
    right: 22,
    height: 33,
  },
  groupChild8: {
    right: 23,
    bottom: 3,
    width: 49,
    height: 45,
    position: "absolute",
  },
  groupChild9: {
    marginLeft: 22.62,
    top: 26,
    width: 17,
    height: 23,
    left: "50%",
    position: "absolute",
  },
  yellowCard: {
    marginTop: -115.58,
    left: -6,
  },
  path33118Icon2: {
    right: -48,
    bottom: -73,
  },
  bFrame: {
    opacity: 0.4,
    width: "31.36%",
    height: "28.81%",
    bottom: "-10.54%",
    right: "65.67%",
    top: "81.74%",
    position: "absolute",
  },
  greenCard: {
    marginTop: -151.54,
    marginLeft: -98.25,
    left: "50%",
  },
  helloParent: {
    width: 321,
    height: 648,
  },
  onboarding3: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_6xs,
    paddingTop: 123,
    paddingRight: GlobalStyles.Padding.padding_6xs,
    alignItems: "center",
  },
});

export default Onboarding3;
