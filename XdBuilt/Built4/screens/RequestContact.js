import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const RequestContact = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.requestContact}>
      <View style={styles.requestContactChild} />
      <View
        style={[
          styles.requestContactItem,
          styles.mt19,
          styles.rectangleShadowBox,
        ]}
      />
      <View style={[styles.requestContactInner, styles.mt_739, styles.mr2]} />
      <View style={[styles.helloParent, styles.mt29, styles.mr13]}>
        <Text
          style={[
            styles.hello,
            styles.helloTypo1,
            styles.helloColor,
            styles.helloTypo2,
          ]}
        >
          Joined September 2022
        </Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/group-30337.png")}
        />
        <Text style={[styles.hello1, styles.helloTypo]}>Hudson Maia</Text>
        <Text style={[styles.hello2, styles.helloTypo]}>+440123456789</Text>
      </View>
      <View style={[styles.lineView, styles.mt_1, styles.lineViewBorder]} />
      <View style={[styles.helloGroup, styles.mt11, styles.ml1]}>
        <Text
          style={[
            styles.hello3,
            styles.helloTypo1,
            styles.helloColor,
            styles.helloTypo2,
          ]}
        >
          Add a note
        </Text>
        <Image
          style={[styles.iconMaterialKeyboardVoice, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.mt36, styles.ml1]} />
      <View style={[styles.groupParent, styles.mt59, styles.ml2]}>
        <View style={[styles.helloContainer, styles.groupViewPosition]}>
          <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
            £20
          </Text>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
            £50
          </Text>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-304101.png")}
          />
        </View>
        <View style={[styles.helloParent1, styles.timePosition]}>
          <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
            £100
          </Text>
          <Image
            style={[styles.groupIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/group-30410.png")}
          />
        </View>
      </View>
      <View style={[styles.helloParent2, styles.mt92, styles.ml1]}>
        <Text style={[styles.hello7, styles.helloTypo1, styles.helloColor]}>
          Request
        </Text>
        <Text style={[styles.hello8, styles.helloTypo1]}>£500</Text>
        <View style={[styles.groupChild1, styles.lineViewBorder]} />
      </View>
      <View style={[styles.statusBarBlack, styles.mt_640]}>
        <View
          style={[
            styles.rectangle,
            styles.timePosition,
            styles.rectangleShadowBox,
          ]}
        />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:41</Text>
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
      <Pressable
        style={[styles.component20825Parent, styles.mt67, styles.ml1]}
        onPress={() => navigation.navigate("Requested")}
      >
        <View style={[styles.component20825, styles.timePosition]}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupChild2} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={styles.hello9}>Request</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt19: {
    marginTop: GlobalStyles.Margin.margin_14xs,
  },
  mt_739: {
    marginTop: GlobalStyles.Margin.margin_85xs,
  },
  mr2: {
    marginRight: GlobalStyles.Margin.margin_31xs,
  },
  mt29: {
    marginTop: GlobalStyles.Margin.margin_xs,
  },
  mr13: {
    marginRight: GlobalStyles.Margin.margin_21xs,
  },
  mt_1: {
    marginTop: GlobalStyles.Margin.margin_34xs,
  },
  mt11: {
    marginTop: GlobalStyles.Margin.margin_23xs,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_6xl,
  },
  mt59: {
    marginTop: GlobalStyles.Margin.margin_27xl,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_31xs,
  },
  mt92: {
    marginTop: GlobalStyles.Margin.margin_44xl,
  },
  mt_640: {
    marginTop: -640,
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
  helloTypo1: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloColor: {
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_800,
  },
  helloTypo: {
    color: GlobalStyles.Color.indigo,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  lineViewBorder: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  statusBarPosition: {
    right: 16,
    top: "50%",
    position: "absolute",
  },
  groupViewPosition: {
    width: 42,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 17,
    width: 18,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  timePosition: {
    bottom: 0,
    top: 0,
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
  requestContactChild: {
    height: 640,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  requestContactItem: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowRadius: 20,
    elevation: 20,
    height: 749,
    width: 375,
  },
  requestContactInner: {
    borderTopWidth: 3,
    width: 52,
    height: 6,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  hello: {
    top: 156,
    left: 0,
  },
  groupChild: {
    right: 44,
    bottom: 106,
    left: 43,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: 0,
    position: "absolute",
  },
  hello1: {
    top: 97,
    left: 21,
    fontWeight: "700",
  },
  hello2: {
    top: 127,
    left: 9,
  },
  helloParent: {
    width: 154,
    height: 172,
  },
  lineView: {
    width: 311,
  },
  hello3: {
    top: 13,
    left: 13,
  },
  iconMaterialKeyboardVoice: {
    marginTop: -9.35,
    width: 14,
    height: 19,
  },
  helloGroup: {
    borderRadius: GlobalStyles.Border.br_5xl,
    width: 312,
    height: 42,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  hello4: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 22,
    top: 0,
    left: 0,
  },
  groupItem: {
    marginLeft: -7.94,
  },
  helloContainer: {
    left: 0,
  },
  groupInner: {
    marginLeft: -7.71,
  },
  groupView: {
    marginLeft: -27.5,
    left: "50%",
  },
  groupIcon: {
    marginLeft: -7.22,
  },
  helloParent1: {
    width: 56,
    right: 0,
  },
  groupParent: {
    height: 54,
    width: 311,
  },
  hello7: {
    left: 112,
    fontSize: GlobalStyles.FontSize.size_xl,
    top: 0,
  },
  hello8: {
    top: 32,
    left: 75,
    fontSize: GlobalStyles.FontSize.size_14xl,
    lineHeight: 37,
    color: GlobalStyles.Color.blue,
  },
  groupChild1: {
    bottom: -1,
    left: -1,
    right: 0,
    position: "absolute",
  },
  helloParent2: {
    width: 310,
    height: 99,
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
    fontSize: GlobalStyles.FontSize.size_4xl,
    top: 0,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    right: 0,
    top: "50%",
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
  maskGroup236: {
    bottom: 13,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    right: 0,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  component20825: {
    right: 0,
    left: 0,
  },
  hello9: {
    top: "35%",
    left: "38.96%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  component20825Parent: {
    width: 326,
    height: 60,
  },
  requestContact: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default RequestContact;
