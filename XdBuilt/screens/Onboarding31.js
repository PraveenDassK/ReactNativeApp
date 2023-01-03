import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import GlobalStyles from "../GlobalStyles";

const Onboarding31 = () => {
  return (
    <View style={styles.onboarding3}>
      <View style={styles.onboarding3Inner}>
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <View style={[styles.helloParent, styles.mt_688]}>
        <Text style={styles.hello}>
          <Text style={styles.theNextGenOfYour}>
            <Text style={styles.theNextGen}>The Next Gen of your</Text>
          </Text>
          <Text style={styles.theNextGenOfYour}>
            <Text style={styles.futureInvestments1}>Future Investments</Text>
          </Text>
        </Text>
        <Text style={styles.hello1}>Swipe to Get Started</Text>
        <View style={[styles.orangeCard, styles.cardLayout]}>
          <View style={[styles.groupParent, styles.groupPosition]}>
            <View style={[styles.groupParent, styles.groupPosition]}>
              <Image
                style={[
                  styles.path33118Icon,
                  styles.groupIconLayout,
                  styles.path33118IconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/path-3311822.png")}
              />
              <View style={[styles.groupParent, styles.groupPosition]}>
                <Image
                  style={[styles.groupItem, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-3175922.png")}
                />
                <Image
                  style={[styles.groupInner, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-3176022.png")}
                />
                <View style={styles.rectangleView} />
                <Image
                  style={[styles.rectangleIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-2620422.png")}
                />
                <View style={[styles.bWrapper, styles.bWrapperPosition]}>
                  <Text style={[styles.b, styles.bTypo]}>B</Text>
                </View>
                <Text style={[styles.business, styles.bTypo]}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-3176422.png")}
            />
            <Image
              style={styles.groupChild1}
              resizeMode="cover"
              source={require("../assets/group-3176622.png")}
            />
            <Image
              style={styles.groupChild2}
              resizeMode="cover"
              source={require("../assets/group-3176722.png")}
            />
            <Text style={[styles.expDate1224, styles.bTypo]}>
              EX<Text style={styles.p}>P</Text> D<Text style={styles.p}>A</Text>
              TE 12 / 24
            </Text>
          </View>
        </View>
        <Image
          style={styles.yellowCardIcon}
          resizeMode="cover"
          source={require("../assets/yellow-card.png")}
        />
        <View style={[styles.greenCard, styles.cardLayout]}>
          <View style={[styles.groupParent, styles.groupPosition]}>
            <View style={[styles.groupParent, styles.groupPosition]}>
              <Image
                style={[
                  styles.path33118Icon1,
                  styles.groupIconLayout,
                  styles.path33118IconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/path-331188.png")}
              />
              <View style={[styles.groupParent, styles.groupPosition]}>
                <Image
                  style={[styles.groupItem, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-3175923.png")}
                />
                <Image
                  style={[styles.groupInner, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-3176023.png")}
                />
                <View style={styles.rectangleView} />
                <Image
                  style={[styles.rectangleIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-2620423.png")}
                />
                <View style={[styles.bContainer, styles.bWrapperPosition]}>
                  <Text style={[styles.b, styles.bTypo]}>B</Text>
                </View>
                <Text style={[styles.business, styles.bTypo]}>BUSINESS</Text>
              </View>
            </View>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-3176423.png")}
            />
            <Image
              style={styles.groupChild1}
              resizeMode="cover"
              source={require("../assets/group-3176623.png")}
            />
            <Image
              style={styles.groupChild2}
              resizeMode="cover"
              source={require("../assets/group-3176723.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_688: {
    marginTop: -688,
  },
  groupPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
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
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  path33118IconPosition: {
    top: 0,
    overflow: "hidden",
    maxWidth: "100%",
    left: 0,
  },
  bWrapperPosition: {
    left: "2.97%",
    bottom: "-10.54%",
    right: "65.67%",
    top: "81.74%",
    width: "31.36%",
    height: "28.81%",
    position: "absolute",
  },
  bTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.gray_200,
    left: 0,
  },
  onboarding3Inner: {
    width: 375,
    height: 812,
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
    textAlign: "center",
    bottom: 0,
    position: "absolute",
  },
  path33118Icon: {
    right: 12,
    bottom: -13,
    left: 0,
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
    height: "33.14%",
    width: "108.22%",
    top: "69.9%",
    right: "-4.3%",
    bottom: "-3.04%",
    left: "-3.92%",
    backgroundColor: GlobalStyles.Color.gray_1700,
    position: "absolute",
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
  bWrapper: {
    opacity: 0.6,
  },
  business: {
    top: "89.5%",
    left: "8.93%",
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.white,
    letterSpacing: 0,
    fontWeight: "700",
  },
  groupParent: {
    left: 0,
  },
  groupIcon: {
    top: 19,
    right: 27,
    width: 28,
    height: 32,
    position: "absolute",
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
  },
  orangeCard: {
    marginTop: -209.86,
    right: -6,
  },
  yellowCardIcon: {
    marginTop: -115.58,
    width: 191,
    height: 321,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  path33118Icon1: {
    right: -48,
    bottom: -73,
    left: 0,
  },
  bContainer: {
    opacity: 0.4,
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
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default Onboarding31;
