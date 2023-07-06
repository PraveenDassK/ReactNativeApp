import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import terminateCardAlert, {handleTerminate} from "../utility/terminateCardAlert";
import Button from "../components/AppButton";

const ItWasLost = ({ navigation }) => {

  
  return (
    <ScrollView>
      <View style={styles.itWasLost}>
        <View style={styles.helloParent}>
          <Text style={styles.hello}>It was lost</Text>
          <View
            style={[
              styles.rectangleParent,
              styles.groupLayout,
              styles.maskGroup236Position,
            ]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupPosition1,
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
                <Text style={styles.yourCurrentCardWillBeTerm1}>
                  <Text style={[styles.yourCurrentCard, styles.yourCardTypo]}>
                    Your current card will be terminated
                  </Text>
                </Text>
                <Text style={styles.yourCurrentCardWillBeTerm1}>
                  <Text style={styles.toKeepYour}>
                    {"\n"}To keep your account safe
                  </Text>
                </Text>
              </Text>
            </View>
            <Image
              style={styles.groupItem}
              resizeMode="cover"
              source={require("../assets/ellipse-3260.png")}
            />
            <View style={[styles.wrapper, styles.wrapperLayout]}>
              <Text
                style={[
                  styles.text,
                  styles.yourCardTypo,
                  styles.groupPosition1,
                ]}
              >
                1
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.rectangleGroup,
              styles.groupPosition1,
              styles.groupLayout,
            ]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupPosition1,
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
                <Text style={styles.yourCurrentCardWillBeTerm1}>
                  <Text style={[styles.yourCurrentCard, styles.yourCardTypo]}>
                    Order a replacement card below
                  </Text>
                </Text>
                <Text style={styles.yourCurrentCardWillBeTerm1}>
                  <Text style={styles.toKeepYour}>
                    You may be charged for the new card
                  </Text>
                </Text>
              </Text>
            </View>
            <Image
              style={styles.groupItem}
              resizeMode="cover"
              source={require("../assets/ellipse-3260.png")}
            />
            <View style={[styles.container, styles.wrapperLayout]}>
              <Text
                style={[
                  styles.text,
                  styles.yourCardTypo,
                  styles.groupPosition1,
                ]}
              >
                2
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.rectangleContainer,
              styles.groupPosition1,
              styles.groupLayout,
            ]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupPosition1,
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
              style={styles.groupItem}
              resizeMode="cover"
              source={require("../assets/ellipse-3260.png")}
            />
            <View style={[styles.container, styles.wrapperLayout]}>
              <Text
                style={[
                  styles.text,
                  styles.yourCardTypo,
                  styles.groupPosition1,
                ]}
              >
                3
              </Text>
            </View>
          </View>
          <View style={[styles.groupParent, styles.groupPosition]}>
            <Button
              title={`Terminate & Order card`}
              onPress={() => navigation.navigate("TerminatedCard")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 63,
    right: 0,
  },
  maskGroup236Position: {
    left: 0,
    position: "absolute",
  },
  groupPosition1: {
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
  },
  wrapperLayout: {
    height: 12,
    width: 7,
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_2xl,
    backgroundColor: GlobalStyles.Color.white,
  },
  yourCurrentCard: {
    fontWeight: "700",
  },
  yourCurrentCardWillBeTerm1: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  toKeepYour: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    color: GlobalStyles.Color.gray_800,
  },
  yourCurrentCardWillBeTerm: {
    marginTop: -12.5,
  },
  yourCurrentCardWillBeTermWrapper: {
    height: 25,
  },
  groupItem: {
    left: 18,
    width: 20,
    height: 20,
    marginTop: -7,
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -4,
    width: 8,
    textAlign: "left",
  },
  wrapper: {
    marginTop: -8,
    left: 23,
  },
  rectangleParent: {
    top: 44,
  },
  container: {
    marginTop: -7.5,
    left: 24,
  },
  rectangleGroup: {
    marginTop: -217.5,
  },
  startUsingYourNewCardRigh: {
    marginTop: -13,
    fontWeight: "700",
  },
  startUsingYourNewCardRighWrapper: {
    height: 26,
  },
  rectangleContainer: {
    marginTop: -144.5,
  },
  groupChild2: {
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
  groupView: {
    top: 0,
  },
  hello1: {
    top: "38.33%",
    left: "50%",
    marginLeft: -100,
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "center",
    position: "absolute",
  },
  groupParent: {
    height: 60,
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
    marginTop: "-2%",
    marginRight: "20%",
    width: "2%",
    height: "3%",
  },
  itWasLost: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_8xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default ItWasLost;
