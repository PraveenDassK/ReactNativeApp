import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Terminate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.terminate}>
      <View style={styles.terminateChild} />
      <View style={[styles.statusBarBlack, styles.mt_815]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.rectanglePosition]}>
            <Text style={[styles.text, styles.textPosition]}>9:41</Text>
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
            <View style={[styles.networkChild, styles.networkLayout]} />
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
            <View
              style={[
                styles.rectangleView,
                styles.networkLayout,
                styles.rectanglePosition,
              ]}
            />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("CardSettings")}
      >
        <Image
          style={[styles.iconFeatherArrowLeft, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt274, styles.ml121]} />
      <View style={[styles.helloParent, styles.mt191, styles.ml27]}>
        <Text style={[styles.hello, styles.textPosition]}>
          <Text style={styles.areYouSure}>Are you sure you want to</Text>
          <Text style={styles.areYouSure}>terminate your card?</Text>
        </Text>
        <View
          style={[
            styles.component208115Parent,
            styles.parentLayout,
            styles.parentLayout1,
          ]}
        >
          <View style={[styles.component208115, styles.rectanglePosition]}>
            <View style={[styles.rectangleParent, styles.parentLayout]}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View style={[styles.maskGroup236, styles.rectanglePosition]} />
            </View>
          </View>
          <Text style={[styles.hello1, styles.helloTypo]}>No</Text>
        </View>
        <View
          style={[
            styles.component208116Parent,
            styles.parentLayout,
            styles.parentLayout1,
          ]}
        >
          <Pressable
            style={[styles.component208115, styles.rectanglePosition]}
            onPress={() => navigation.navigate("TerminatedCard")}
          >
            <View style={[styles.rectangleParent, styles.parentLayout]}>
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View style={[styles.maskGroup236, styles.rectanglePosition]} />
            </View>
          </Pressable>
          <Text style={[styles.hello2, styles.helloTypo]}>Yes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_815: {
    marginTop: GlobalStyles.Margin.margin_91xs,
  },
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt274: {
    marginTop: 274,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt191: {
    marginTop: 191,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  rectanglePosition: {
    top: 0,
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
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
  parentLayout: {
    height: 60,
    position: "absolute",
  },
  parentLayout1: {
    width: 146,
    marginLeft: -70.5,
    height: 60,
    left: "50%",
  },
  groupPosition: {
    borderRadius: GlobalStyles.Border.br_lg,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  helloTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textTransform: "uppercase",
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
    top: "35%",
    position: "absolute",
  },
  terminateChild: {
    height: 815,
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
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
  },
  time: {
    width: 40,
    left: 0,
    bottom: 0,
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
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  areYouSure: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.gray_500,
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
  },
  rectangleParent: {
    marginTop: -30,
    top: "50%",
    left: 0,
    right: 0,
  },
  component208115: {
    left: 0,
    bottom: 0,
    right: 0,
  },
  hello1: {
    left: "42.47%",
    color: GlobalStyles.Color.black,
  },
  component208115Parent: {
    bottom: 0,
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.white,
  },
  hello2: {
    left: "39.73%",
    color: GlobalStyles.Color.blue,
  },
  component208116Parent: {
    marginTop: -17.5,
    top: "50%",
  },
  helloParent: {
    width: 295,
    height: 243,
  },
  terminate: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Terminate;
