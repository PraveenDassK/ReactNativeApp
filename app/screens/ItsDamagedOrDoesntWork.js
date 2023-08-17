import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";

import terminateCardAlert, {
  handleTerminate,
} from "../utility/terminateCardAlert";
import Button from "../components/AppButton";
import AuthContext from "../auth/context";
import LinearAccountButton from "../components/LinearAccountButton";
const ItsDamagedOrDoesntWork = ({ navigation }) => {
  const { darkMode } = React.useContext(AuthContext);

  return (
    <ScrollView
      style={{
        backgroundColor:
          darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : null,
      }}
    >
      <Screen>
        <View
          style={
            darkMode === "DARK"
              ? styles.darkitsDamagedOrDoesntWork
              : styles.itsDamagedOrDoesntWork
          }
        >
          <View style={styles.helloParent}>
            <Text style={darkMode === "DARK" ? styles.darkhello : styles.hello}>
              {"It's damaged or doesn't work"}
            </Text>
            <View
              style={[
                styles.groupParent,
                styles.groupParentPosition,
                styles.parentPosition,
              ]}
            >
              <LinearAccountButton
                title={`Terminate & Order card`}
                onPress={() => navigation.navigate("TerminatedCard")}
                darkMode={darkMode}
              />
            </View>

            <View
              style={[
                styles.rectangleGroup,
                styles.groupLayout,
                styles.groupParentPosition,
              ]}
            >
              <View
                style={[
                  styles.groupItem,
                  styles.groupPosition,
                  styles.groupLayout,
                ]}
              />
              <View
                style={[
                  styles.yourCurrentCardWillBeTermWrapper,
                  styles.yourCardPosition1,
                ]}
              >
                <Text
                  style={[
                    styles.yourCurrentCardWillBeTerm,
                    styles.yourCardPosition,
                  ]}
                >
                  <Text style={styles.itsDamagedOr}>
                    <Text style={[styles.yourCurrentCard, styles.yourCardTypo]}>
                      Your current card will be terminated
                    </Text>
                  </Text>
                  <Text style={styles.itsDamagedOr}>
                    <Text style={styles.toKeepYour}>
                      {"\n"}To keep your account safe
                    </Text>
                  </Text>
                </Text>
              </View>
              <Image
                style={styles.groupInner}
                resizeMode="cover"
                source={require("../assets/ellipse-3260.png")}
              />
              <View style={[styles.wrapper, styles.wrapperLayout]}>
                <Text
                  style={[
                    styles.text,
                    styles.yourCardTypo,
                    styles.groupPosition,
                  ]}
                >
                  1
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.rectangleContainer,
                styles.groupPosition,
                styles.groupLayout,
              ]}
            >
              <View
                style={[
                  styles.groupItem,
                  styles.groupPosition,
                  styles.groupLayout,
                ]}
              />
              <View
                style={[
                  styles.yourCurrentCardWillBeTermWrapper,
                  styles.yourCardPosition1,
                ]}
              >
                <Text
                  style={[
                    styles.yourCurrentCardWillBeTerm,
                    styles.yourCardPosition,
                  ]}
                >
                  <Text style={styles.itsDamagedOr}>
                    <Text style={[styles.yourCurrentCard, styles.yourCardTypo]}>
                      Order a replacement card below
                    </Text>
                  </Text>
                  <Text style={styles.itsDamagedOr}>
                    <Text style={styles.toKeepYour}>
                      {"\n"}You may be charged for the new card
                    </Text>
                  </Text>
                </Text>
              </View>
              <Image
                style={styles.groupInner}
                resizeMode="cover"
                source={require("../assets/ellipse-3260.png")}
              />
              <View style={[styles.container, styles.wrapperLayout]}>
                <Text
                  style={[
                    styles.text,
                    styles.yourCardTypo,
                    styles.groupPosition,
                  ]}
                >
                  2
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.groupView,
                styles.groupPosition,
                styles.groupLayout,
              ]}
            >
              <View
                style={[
                  styles.groupItem,
                  styles.groupPosition,
                  styles.groupLayout,
                ]}
              />
              <View
                style={[
                  styles.startUsingYourNewCardRighWrapper,
                  styles.yourCardPosition1,
                ]}
              >
                <Text
                  style={[
                    styles.startUsingYourNewCardRigh,
                    styles.yourCardTypo,
                    styles.yourCardPosition,
                  ]}
                >
                  Start using your new card right away with Apple Pay
                </Text>
              </View>
              <Image
                style={styles.groupInner}
                resizeMode="cover"
                source={require("../assets/ellipse-3260.png")}
              />
              <View style={[styles.container, styles.wrapperLayout]}>
                <Text
                  style={[
                    styles.text,
                    styles.yourCardTypo,
                    styles.groupPosition,
                  ]}
                >
                  3
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  groupLayout: {
    height: 63,
    right: 0,
  },
  groupPosition: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  yourCardPosition1: {
    left: 48,
    right: 22,
    marginTop: -11.5,
    top: "50%",
    position: "absolute",
  },
  yourCardPosition: {
    width: 257,
    lineHeight: 14,
    top: "50%",
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  yourCardTypo: {
    color: GlobalStyles.Color.gray_1400,
    fontSize: GlobalStyles.FontSize.size_xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  wrapperLayout: {
    height: 12,
    width: 7,
    top: "50%",
    position: "absolute",
  },
  itsDamagedOr: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello: {
    marginRight: -30,
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 30,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  darkhello: {
    marginRight: -30,
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 30,
    color: GlobalStyles.Color.white,
    textAlign: "left",
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blue_100,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
    left: 0,
    top: 0,
  },
  rectangleParent: {
    top: 0,
  },
  hello1: {
    top: "38.33%",
    left: "40%",
    marginLeft: -30,
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  groupParent: {
    height: 60,
  },
  groupItem: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_2xl,
    backgroundColor: GlobalStyles.Color.white,
  },
  yourCurrentCard: {
    fontWeight: "700",
  },
  toKeepYour: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.gray_800,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  yourCurrentCardWillBeTerm: {
    marginTop: -12.5,
  },
  yourCurrentCardWillBeTermWrapper: {
    height: 25,
  },
  groupInner: {
    left: 16,
    width: 22,
    height: 22,
    marginTop: -11.5,
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -6,
    width: 8,
    textAlign: "left",
  },
  wrapper: {
    marginTop: -8,
    left: 23,
  },
  rectangleGroup: {
    top: 69,
  },
  container: {
    marginTop: -7.5,
    left: 24,
  },
  rectangleContainer: {
    marginTop: -192.5,
  },
  startUsingYourNewCardRigh: {
    marginTop: -13,
    fontWeight: "700",
  },
  startUsingYourNewCardRighWrapper: {
    height: 26,
  },
  groupView: {
    marginTop: -119.5,
  },
  helloParent: {
    width: "100%",
    height: 669,
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: -10.11,
    marginRight: 303.54,
    width: 15,
    height: 15,
  },
  itsDamagedOrDoesntWork: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
  darkitsDamagedOrDoesntWork: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
});

export default ItsDamagedOrDoesntWork;
