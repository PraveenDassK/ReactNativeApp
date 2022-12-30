import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SendMoney = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendMoney}>
      <View style={styles.sendMoneyChild} />
      <Pressable
        style={[styles.sendMoneyInner, styles.mt18]}
        onPress={() => navigation.navigate("Account")}
      >
        <View style={[styles.groupParent, styles.rectangle3Position]}>
          <View style={styles.iconIonicIosArrowForwardWrapper}>
            <Image
              style={[styles.iconIonicIosArrowForward, styles.hello9Position]}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward10.png")}
            />
          </View>
          <Text style={[styles.sendMoney1, styles.textTypo]}>Send Money</Text>
        </View>
      </Pressable>
      <Text style={[styles.helloTypo2, styles.mt24, styles.ml25]}>Recent</Text>
      <Text style={[styles.helloTypo2, styles.mt24, styles.ml25]}>
        Contacts
      </Text>
      <View
        style={[
          styles.iconAwesomeSearchParent,
          styles.mt60,
          styles.iconLayout1,
        ]}
      >
        <Image
          style={[styles.iconAwesomeSearch, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-awesomesearch.png")}
        />
        <Image
          style={[
            styles.iconMaterialKeyboardVoice,
            styles.statusBarPosition,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.rectangle, styles.mt12, styles.ml25]} />
      <View style={[styles.helloParent, styles.mt_54, styles.ml36]}>
        <Text style={[styles.hello2, styles.helloTypo1]}>
          Konopelski Mitchel
        </Text>
        <Text style={[styles.hello3, styles.helloTypo]}>+440123456789</Text>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.timePosition,
          ]}
          resizeMode="cover"
          source={require("../assets/group-303373.png")}
        />
      </View>
      <View style={[styles.rectangle, styles.mt21, styles.ml25]} />
      <View style={[styles.helloGroup, styles.mt_54, styles.ml36]}>
        <Text style={[styles.hello4, styles.helloTypo1]}>Bogan Hubert</Text>
        <Text style={[styles.hello5, styles.helloTypo]}>+440123456789</Text>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.timePosition,
          ]}
          resizeMode="cover"
          source={require("../assets/group-303374.png")}
        />
      </View>
      <View style={[styles.rectangle, styles.mt21, styles.ml25]} />
      <View style={[styles.helloGroup, styles.mt_54, styles.ml36]}>
        <Text style={[styles.hello6, styles.helloTypo1]}>Fisher Judy</Text>
        <Text style={[styles.hello5, styles.helloTypo]}>+440123456789</Text>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.timePosition,
          ]}
          resizeMode="cover"
          source={require("../assets/group-303375.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.mt187, styles.ml121]} />
      <View
        style={[
          styles.iconAwesomeSearchGroup,
          styles.mt_42,
          styles.iconLayout1,
        ]}
      >
        <Image
          style={[styles.iconAwesomeSearch, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-awesomesearch.png")}
        />
        <Image
          style={[
            styles.iconMaterialKeyboardVoice,
            styles.statusBarPosition,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.sendMoneyItem, styles.mt_739, styles.ml161]} />
      <Image
        style={[styles.groupIcon, styles.mt12, styles.ml25]}
        resizeMode="cover"
        source={require("../assets/group-30456.png")}
      />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle3, styles.rectangle3Position]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition]}
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
      <View style={[styles.rectangle, styles.mt12, styles.ml25]}>
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-30474.png")}
        />
        <Pressable
          style={[styles.groupWrapper, styles.helloFramePosition]}
          onPress={() => navigation.navigate("SendContact")}
        >
          <View style={[styles.helloWrapper, styles.timePosition]}>
            <Text style={styles.hello8}>Pay</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.helloFrame, styles.helloFramePosition]}
          onPress={() => navigation.navigate("RequestContact")}
        >
          <Text
            style={[styles.hello9, styles.helloTypo2, styles.hello9Position]}
          >
            Request
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt18: {
    marginTop: GlobalStyles.Margin.margin_15xs,
  },
  mt24: {
    marginTop: GlobalStyles.Margin.margin_8xs,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt60: {
    marginTop: 60,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  mt_54: {
    marginTop: GlobalStyles.Margin.margin_65xs,
  },
  ml36: {
    marginLeft: GlobalStyles.Margin.margin_6xl,
  },
  mt21: {
    marginTop: GlobalStyles.Margin.margin_11xs,
  },
  mt187: {
    marginTop: GlobalStyles.Margin.margin_72xl,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt_42: {
    marginTop: GlobalStyles.Margin.margin_58xs,
  },
  mt_739: {
    marginTop: GlobalStyles.Margin.margin_85xs,
  },
  ml161: {
    marginLeft: GlobalStyles.Margin.margin_65xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  rectangle3Position: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello9Position: {
    left: 1,
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
    position: "absolute",
  },
  iconLayout1: {
    alignSelf: "center",
    height: 42,
    width: 327,
    borderRadius: GlobalStyles.Border.br_5xl,
  },
  iconLayout: {
    height: 19,
    marginTop: -9.35,
  },
  statusBarPosition: {
    right: 16,
    top: "50%",
    position: "absolute",
  },
  helloTypo1: {
    top: 3,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    position: "absolute",
  },
  helloTypo: {
    bottom: 6,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    width: 45,
    position: "absolute",
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
  },
  networkPosition: {
    width: 17,
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
  helloFramePosition: {
    top: 2,
    position: "absolute",
  },
  helloTypo2: {
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
  },
  sendMoneyChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconIonicIosArrowForward: {
    marginTop: -3.73,
    width: 11,
    height: 6,
  },
  iconIonicIosArrowForwardWrapper: {
    top: 11,
    right: 18,
    left: 24,
    height: 27,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  sendMoney1: {
    marginLeft: -58.5,
    top: 30,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
    left: "50%",
  },
  groupParent: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderBottomLeftRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowRadius: 20,
    elevation: 20,
  },
  sendMoneyInner: {
    height: 750,
    width: 375,
  },
  iconAwesomeSearch: {
    left: 14,
    width: 19,
    top: "50%",
    height: 19,
    marginTop: -9.35,
    position: "absolute",
  },
  iconMaterialKeyboardVoice: {
    width: 14,
  },
  iconAwesomeSearchParent: {
    backgroundColor: GlobalStyles.Color.gray_200,
  },
  rectangle: {
    borderRadius: GlobalStyles.Border.br_4xl,
    width: 326,
    height: 64,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello2: {
    right: -1,
  },
  hello3: {
    right: 25,
  },
  groupChild: {
    maxHeight: "100%",
    left: 0,
  },
  helloParent: {
    width: 187,
    height: 45,
  },
  hello4: {
    right: 8,
  },
  hello5: {
    right: -1,
  },
  helloGroup: {
    width: 161,
    height: 45,
  },
  hello6: {
    right: 22,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  iconAwesomeSearchGroup: {
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  sendMoneyItem: {
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  groupIcon: {
    width: 385,
    height: 45,
  },
  rectangle3: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
  },
  text: {
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
    left: 0,
    top: 0,
  },
  time: {
    width: 40,
    left: 0,
    position: "absolute",
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    top: "50%",
    right: 0,
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    left: "50%",
    height: 6,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
    left: "50%",
  },
  rectangleView: {
    right: 0,
    top: 0,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
  },
  network: {
    right: 68,
    height: 11,
  },
  statusBar: {
    marginTop: -15,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  groupChild1: {
    marginLeft: -22,
    bottom: 9,
    height: 45,
    left: "50%",
  },
  hello8: {
    marginTop: -6,
    marginLeft: 18.5,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  helloWrapper: {
    borderRadius: GlobalStyles.Border.br_md,
    left: 0,
    right: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupWrapper: {
    right: 10,
    bottom: 4,
    width: 127,
  },
  hello9: {
    marginTop: -7,
  },
  helloFrame: {
    bottom: 2,
    left: 10,
    borderRadius: 22,
    width: 107,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  sendMoney: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SendMoney;
