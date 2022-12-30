import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SendContact = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendContact}>
      <View style={styles.sendContactChild} />
      <Pressable
        style={[
          styles.sendContactInner,
          styles.mt19,
          styles.rectangleShadowBox,
        ]}
        onPress={() => navigation.navigate("SendMoney")}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.lineViewBorder,
          ]}
        />
      </Pressable>
      <View style={[styles.helloParent, styles.mt_705]}>
        <Text style={[styles.hello, styles.helloFlexBox, styles.helloTypo2]}>
          Hudson Maia
        </Text>
        <Text style={[styles.hello1, styles.helloFlexBox, styles.helloTypo2]}>
          +440123456789
        </Text>
        <Text style={[styles.hello2, styles.helloTypo, styles.helloTypo1]}>
          Joined September 2022
        </Text>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-30337.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.mt_31, styles.ml2]}>
        <View style={[styles.helloGroup, styles.helloPosition]}>
          <Text style={[styles.hello3, styles.helloTypo]}>£20</Text>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
        <View style={[styles.helloContainer, styles.helloPosition]}>
          <Text style={[styles.hello3, styles.helloTypo]}>£50</Text>
          <Image
            style={[styles.groupIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-304101.png")}
          />
        </View>
        <View style={[styles.groupView, styles.timePosition]}>
          <Text style={[styles.hello3, styles.helloTypo]}>£100</Text>
          <Image
            style={[styles.groupChild1, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
      </View>
      <View style={[styles.helloParent1, styles.mt92, styles.ml1]}>
        <Text style={[styles.hello6, styles.helloTypo]}>Pay</Text>
        <Text style={[styles.hello7, styles.helloFlexBox, styles.helloTypo3]}>
          £500
        </Text>
        <View style={[styles.lineView, styles.lineViewBorder]} />
      </View>
      <View style={[styles.helloParent2, styles.mt12, styles.ml1]}>
        <Text style={[styles.hello8, styles.helloTypo, styles.helloTypo1]}>
          Add a note
        </Text>
        <Image
          style={[styles.iconMaterialKeyboardVoice, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.maskGroup236, styles.mt43, styles.ml1]} />
      <View style={[styles.homeIndicator, styles.mt36, styles.ml1]} />
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View
          style={[
            styles.rectangle,
            styles.timePosition,
            styles.rectangleShadowBox,
          ]}
        />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.helloFlexBox]}>9:41</Text>
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
            <View
              style={[
                styles.networkItem,
                styles.networkLayout,
                styles.groupChildLayout,
              ]}
            />
            <View style={[styles.networkInner, styles.networkLayout]} />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.component20824Parent, styles.mt67, styles.ml1]}
        onPress={() => navigation.navigate("AddBeneficiarySchedulePayment1")}
      >
        <View style={[styles.component20824, styles.timePosition]}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupChild2} />
            <View style={styles.maskGroup2361} />
          </View>
        </View>
        <Text style={[styles.hello9, styles.helloFlexBox, styles.helloTypo3]}>
          Send
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt19: {
    marginTop: GlobalStyles.Margin.margin_14xs,
  },
  mt_705: {
    marginTop: GlobalStyles.Margin.margin_84xs,
  },
  mt_31: {
    marginTop: GlobalStyles.Margin.margin_50xs,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_31xs,
  },
  mt92: {
    marginTop: GlobalStyles.Margin.margin_44xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt12: {
    marginTop: GlobalStyles.Margin.margin_22xs,
  },
  mt43: {
    marginTop: GlobalStyles.Margin.margin_14xl,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt67: {
    marginTop: GlobalStyles.Margin.margin_31xl,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    backgroundColor: GlobalStyles.Color.white,
  },
  groupChildLayout: {
    height: 6,
    left: "50%",
  },
  lineViewBorder: {
    borderColor: "#707070",
    borderStyle: "solid",
    position: "absolute",
  },
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  helloTypo2: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_800,
  },
  helloPosition: {
    width: 42,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 17,
    width: 18,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  timePosition: {
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo3: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  statusBarPosition: {
    right: 16,
    top: "50%",
    position: "absolute",
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
  sendContactChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupChild: {
    marginLeft: -27,
    top: 10,
    borderTopWidth: 3,
    width: 52,
  },
  sendContactInner: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowRadius: 20,
    elevation: 20,
    height: 749,
    width: 375,
  },
  hello: {
    top: 97,
    left: 12,
    fontWeight: "700",
  },
  hello1: {
    top: 127,
    left: 0,
  },
  hello2: {
    top: 156,
    left: 0,
  },
  groupItem: {
    right: 39,
    bottom: 106,
    left: 43,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: 0,
    position: "absolute",
  },
  helloParent: {
    width: 149,
    height: 172,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 22,
    top: 0,
    left: 0,
  },
  groupInner: {
    marginLeft: -7.94,
  },
  helloGroup: {
    left: 0,
  },
  groupIcon: {
    marginLeft: -7.71,
  },
  helloContainer: {
    marginLeft: -27.5,
    left: "50%",
  },
  groupChild1: {
    marginLeft: -7.22,
  },
  groupView: {
    width: 56,
    right: 0,
  },
  groupParent: {
    width: 311,
    height: 54,
  },
  hello6: {
    left: 142,
    fontSize: GlobalStyles.FontSize.size_xl,
    top: 0,
  },
  hello7: {
    top: 32,
    left: 75,
    fontSize: GlobalStyles.FontSize.size_14xl,
    lineHeight: 37,
    color: GlobalStyles.Color.blue,
  },
  lineView: {
    bottom: -1,
    left: -1,
    borderTopWidth: 1,
    height: 2,
    right: 0,
  },
  helloParent1: {
    height: 99,
    width: 310,
  },
  hello8: {
    top: 13,
    left: 13,
  },
  iconMaterialKeyboardVoice: {
    marginTop: -9.35,
    width: 14,
    height: 19,
  },
  helloParent2: {
    borderRadius: GlobalStyles.Border.br_5xl,
    width: 312,
    height: 42,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  maskGroup236: {
    height: 47,
    width: 310,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    right: 0,
    left: 0,
  },
  text: {
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    top: 0,
    left: 0,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
  },
  time: {
    width: 40,
    left: 0,
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
  groupChild2: {
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
  maskGroup2361: {
    bottom: 13,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    top: "50%",
    right: 0,
    left: 0,
    position: "absolute",
  },
  component20824: {
    right: 0,
    left: 0,
  },
  hello9: {
    top: "36.67%",
    left: "43.56%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  component20824Parent: {
    width: 326,
    height: 60,
  },
  sendContact: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SendContact;
