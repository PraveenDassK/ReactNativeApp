import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const FindFriends = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.findFriends}>
      <View style={styles.findFriendsChild} />
      <Pressable
        style={styles.iconFeatherArrowLeftWrapper}
        onPress={() => navigation.navigate("Account")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.homeIndicator, styles.mt268, styles.ml121]} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={[styles.text, styles.textPosition]}>9:41</Text>
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
      <View style={[styles.helloParent, styles.mt12, styles.ml25]}>
        <Text style={[styles.hello, styles.textPosition]}>
          Find your friends
        </Text>
        <Text style={styles.hello1}>
          <Text style={styles.allowAccessTo}>
            Allow access to contacts to send and request
          </Text>
          <Text style={styles.allowAccessTo}>
            money from your friends more easily, split bills
          </Text>
          <Text style={styles.allowAccessTo}>and much more.</Text>
        </Text>
        <Pressable
          style={[styles.component20817Parent, styles.parentPosition]}
          onPress={() => navigation.navigate("Account")}
        >
          <View style={styles.component20817}>
            <View style={[styles.rectangleParent, styles.parentPosition]}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={[styles.hello2, styles.helloTypo]}>Allow Access</Text>
        </Pressable>
        <Pressable
          style={[styles.component20818Parent, styles.parentPosition]}
          onPress={() => navigation.navigate("Account")}
        >
          <View style={styles.component20817}>
            <View style={[styles.rectangleParent, styles.parentPosition]}>
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={[styles.hello3, styles.helloTypo]}>Not Now</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.findFriendsItem, styles.mt_480]}
        resizeMode="cover"
        source={require("../assets/group-30777.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt268: {
    marginTop: 268,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt_480: {
    marginTop: -480,
  },
  textPosition: {
    textAlign: "left",
    top: 0,
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
  parentPosition: {
    height: 60,
    left: 0,
    right: 0,
    position: "absolute",
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
    textTransform: "uppercase",
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  findFriendsChild: {
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
    top: 0,
    position: "absolute",
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
  },
  time: {
    width: 40,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
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
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  hello: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
  },
  allowAccessTo: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello1: {
    marginTop: -280.52,
    left: 3,
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.gray_500,
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    top: "50%",
  },
  component20817: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  hello2: {
    top: "36.67%",
    left: "31.9%",
    color: GlobalStyles.Color.black,
  },
  component20817Parent: {
    bottom: 76,
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.gray_800,
  },
  hello3: {
    top: "35%",
    left: "38.96%",
    color: GlobalStyles.Color.white,
  },
  component20818Parent: {
    bottom: 0,
  },
  helloParent: {
    width: 326,
    height: 660,
  },
  findFriendsItem: {
    width: 283,
    height: 249,
    alignSelf: "center",
  },
  findFriends: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default FindFriends;
