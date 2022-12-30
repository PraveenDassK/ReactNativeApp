import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const PushNotification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pushNotification}>
      <View style={styles.pushNotificationChild} />
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt2]}
        onPress={() => navigation.navigate("Account")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.helloParent, styles.mt10, styles.ml25]}>
        <Text style={[styles.hello, styles.textPosition]}>Notify Me</Text>
        <Pressable
          style={[styles.component2085Parent, styles.parentLayout]}
          onPress={() => navigation.navigate("FindFriends")}
        >
          <View style={[styles.component2085, styles.timePosition]}>
            <View style={[styles.rectangleParent, styles.parentLayout]}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={[styles.hello1, styles.helloTypo, styles.helloTypo1]}>
            Enable Push Notifications
          </Text>
        </Pressable>
        <Text style={[styles.hello2, styles.helloTypo]}>
          <Text style={styles.getAllNotifications}>
            Get all notifications of your spending, wealth,
          </Text>
          <Text style={styles.getAllNotifications}>
            finances, carbon spending and much more...
          </Text>
        </Text>
        <View style={[styles.timePosition, styles.parentLayout]}>
          <View style={[styles.component2085, styles.timePosition]}>
            <View style={[styles.rectangleParent, styles.parentLayout]}>
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={[styles.hello3, styles.helloTypo, styles.helloTypo1]}>
            Not Now
          </Text>
        </View>
      </View>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
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
      <View style={[styles.homeIndicator, styles.mt184, styles.ml121]} />
      <Image
        style={[styles.pushNotificationItem, styles.mt_548, styles.ml53]}
        resizeMode="cover"
        source={require("../assets/group-30772.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: GlobalStyles.Margin.margin_31xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt184: {
    marginTop: GlobalStyles.Margin.margin_71xl,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt_548: {
    marginTop: -548,
  },
  ml53: {
    marginLeft: GlobalStyles.Margin.margin_22xl,
  },
  textPosition: {
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 60,
    right: 0,
  },
  timePosition: {
    bottom: 0,
    left: 0,
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
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloTypo1: {
    textTransform: "uppercase",
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
    fontFamily: GlobalStyles.FontFamily.helvetica,
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
  pushNotificationChild: {
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
  hello: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_8xl,
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
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  component2085: {
    right: 0,
    top: 0,
  },
  hello1: {
    top: "36.67%",
    left: "15.64%",
    color: GlobalStyles.Color.black,
  },
  component2085Parent: {
    bottom: 76,
    left: 0,
    position: "absolute",
  },
  getAllNotifications: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello2: {
    marginTop: -280.52,
    left: 3,
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_800,
    top: "50%",
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.gray_800,
  },
  hello3: {
    top: "35%",
    left: "38.96%",
    color: GlobalStyles.Color.white,
  },
  helloParent: {
    width: 326,
    height: 660,
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
    top: 0,
    backgroundColor: GlobalStyles.Color.white,
    bottom: 0,
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
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  pushNotificationItem: {
    width: 317,
    height: 402,
  },
  pushNotification: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default PushNotification;
