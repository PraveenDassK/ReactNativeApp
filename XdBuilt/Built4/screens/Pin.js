import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Pin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pin}>
      <View style={styles.pinChild} />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("Biometrix")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt36, styles.ml121]} />
      <Text style={[styles.hello, styles.mt10, styles.ml35]}>
        Setup Your Pin
      </Text>
      <Image
        style={[styles.pinItem, styles.mt78, styles.ml111]}
        resizeMode="cover"
        source={require("../assets/group-30766.png")}
      />
      <View style={[styles.ellipseParent, styles.mt79]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[
            styles.groupItem,
            styles.groupChildPosition1,
            styles.groupChildPosition2,
            styles.groupChildLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[
            styles.groupInner,
            styles.groupChildPosition,
            styles.groupChildLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[
            styles.groupChildLayout,
            styles.groupChildPosition1,
            styles.groupChildPosition2,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.groupChildLayout, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.timePosition, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[
            styles.groupChild5,
            styles.groupChildPosition1,
            styles.groupChildPosition2,
            styles.groupChildLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[
            styles.groupChild6,
            styles.groupChildPosition,
            styles.groupChildLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Text style={[styles.hello1, styles.helloTypo2]}>1</Text>
        <Text style={[styles.hello2, styles.helloTypo2]}>4</Text>
        <Text style={[styles.hello3, styles.helloTypo2]}>7</Text>
        <Text style={[styles.hello4, styles.helloTypo1]}>2</Text>
        <Text style={[styles.hello5, styles.helloTypo1]}>5</Text>
        <Text style={[styles.hello6, styles.helloTypo1]}>8</Text>
        <Text style={[styles.hello7, styles.helloTypo1]}>0</Text>
        <Text style={[styles.hello8, styles.helloTypo]}>3</Text>
        <Text style={[styles.hello9, styles.helloTypo]}>6</Text>
        <Text style={[styles.hello10, styles.helloTypo]}>9</Text>
        <Image
          style={styles.iconIonicMdBackspace}
          resizeMode="cover"
          source={require("../assets/icon-ionicmdbackspace.png")}
        />
      </View>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={[styles.statusBar, styles.groupChildPosition1]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
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
            <View style={[styles.networkItem, styles.networkLayout]} />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.component20816Parent, styles.mt91, styles.ml25]}
        onPress={() => navigation.navigate("Success")}
      >
        <View style={[styles.component20816, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.groupChildPosition1]}>
            <View style={styles.groupChild7} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello11}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml35: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  mt78: {
    marginTop: GlobalStyles.Margin.margin_38xl,
  },
  ml111: {
    marginLeft: GlobalStyles.Margin.margin_50xl,
  },
  mt79: {
    marginTop: GlobalStyles.Margin.margin_39xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt91: {
    marginTop: 91,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  groupChildLayout1: {
    height: 65,
    width: 66,
  },
  groupChildPosition1: {
    top: "50%",
    position: "absolute",
  },
  groupChildPosition2: {
    marginTop: -73,
    top: "50%",
  },
  groupChildPosition: {
    marginTop: 8,
    top: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    width: 65,
    marginLeft: -33.5,
    height: 65,
    left: "50%",
  },
  helloTypo2: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_10xl,
    left: 24,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo,
    position: "absolute",
  },
  helloTypo1: {
    left: 132,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_10xl,
    color: GlobalStyles.Color.indigo,
    position: "absolute",
  },
  helloTypo: {
    left: 241,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_10xl,
    color: GlobalStyles.Color.indigo,
    position: "absolute",
  },
  timePosition: {
    bottom: 0,
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
    position: "absolute",
  },
  pinChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    height: 17,
    width: 17,
    left: "50%",
    position: "absolute",
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
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  pinItem: {
    width: 142,
    height: 13,
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 0,
  },
  ellipseIcon: {
    top: 0,
    position: "absolute",
  },
  groupChild4: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupChild5: {
    right: 0,
  },
  groupChild6: {
    right: 0,
  },
  hello1: {
    top: 16,
  },
  hello2: {
    top: 96,
  },
  hello3: {
    top: 176,
  },
  hello4: {
    top: 16,
  },
  hello5: {
    top: 96,
  },
  hello6: {
    top: 176,
  },
  hello7: {
    top: 257,
  },
  hello8: {
    top: 16,
  },
  hello9: {
    top: 96,
  },
  hello10: {
    top: 176,
  },
  iconIonicMdBackspace: {
    right: 19,
    bottom: 22,
    width: 28,
    height: 21,
    position: "absolute",
  },
  ellipseParent: {
    width: 283,
    height: 306,
    alignSelf: "center",
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
    left: 0,
    top: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    left: 0,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
    top: 0,
  },
  batteryIcon: {
    width: 22,
    right: 0,
  },
  wifiIcon: {
    right: 37,
    height: 12,
    marginTop: -3,
    top: "50%",
    width: 17,
    position: "absolute",
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
    left: "50%",
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
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
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  groupChild7: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    right: 0,
    left: 0,
  },
  component20816: {
    right: 0,
    left: 0,
    top: 0,
  },
  hello11: {
    top: "36.67%",
    left: "40.8%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  component20816Parent: {
    width: 326,
    height: 60,
  },
  pin: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Pin;
