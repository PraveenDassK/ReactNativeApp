import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const Settings = ({navigation}) => {
  

  return (
    <View style={styles.settings}>
      <View style={styles.path33370Parent}>
        <Image
          style={[
            styles.path33370Icon,
            styles.groupLayout,
            styles.groupChildLayout,
            styles.path33370IconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/path-33370.png")}
        />
        <Text style={styles.hello}>Full Name</Text>
        <Text style={styles.hello1}>Standard</Text>
        <Image
          style={[
            styles.groupChild,
            styles.groupLayout,
            styles.groupChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-3158.png")}
        />
        <View style={styles.helloParent}>
          <Text style={styles.hello2}>Log out</Text>
          <Image
            style={styles.iconOpenAccountLogout}
            resizeMode="cover"
            source={require("../assets/icon-openaccountlogout.png")}
          />
        </View>
        <Text style={styles.hello3}>{`Terms & Conditions`}</Text>
        <Text style={styles.hello4}>{`Accounts details `}</Text>
        <View style={styles.groupItem} />
        <Text style={[styles.hello5, styles.helloPosition1]}>Currency</Text>
        <Text style={[styles.hello6, styles.helloPosition1]}>Account</Text>
        <Text style={[styles.hello7, styles.helloPosition1]}>Sort Code</Text>
        <View style={[styles.britishPoundsWrapper, styles.wrapperPosition]}>
          <Text
            style={[
              styles.britishPounds,
              styles.textTypo,
              styles.textSpaceBlock,
            ]}
          >
          British Pounds
          </Text>
        </View>
        <View style={[styles.wrapper, styles.wrapperPosition]}>
          <Text style={[styles.text, styles.textTypo, styles.textSpaceBlock]}>
            12345678
          </Text>
        </View>
        <Image
          style={[styles.maskGroup241, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group-241.png")}
        />
        <Image
          style={[
            styles.iconMaterialContentCopy,
            styles.iconContentLayout,
            styles.iconContentPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-materialcontentcopy.png")}
        />
        <Image
          style={[
            styles.iconMaterialContentCopy1,
            styles.iconContentLayout,
            styles.iconContentPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-materialcontentcopy.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>12-34-56</Text>
        <View style={[styles.historyParent, styles.iconContentLayout]}>
          <Text style={[styles.history, styles.historyTypo]}>Account</Text>
          <Text style={[styles.history1, styles.historyTypo]}>Analysis</Text>
          <Text style={[styles.history2, styles.historyTypo]}>Carbon</Text>
          <Text style={styles.history3}>Profile</Text>
        </View>
        <Pressable
          style={[styles.groupParent, styles.groupParentPosition]}
          onPress={() => navigation.navigate("Plan")}
        >
          <View style={[styles.rectangleParent, styles.path33370IconPosition]}>
            <View style={styles.groupInner} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello8, styles.helloTypo, styles.helloPosition]}>
            My Plan
          </Text>
        </Pressable>
        <Pressable
          style={[styles.groupContainer, styles.groupParentPosition]}
          onPress={() => navigation.navigate("Account")}
        >
          <View style={[styles.rectangleParent, styles.path33370IconPosition]}>
            <View style={styles.groupInner} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello8, styles.helloTypo, styles.helloPosition]}>
            Account
          </Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.groupParentPosition]}
          onPress={() => navigation.navigate("SecurityAndPrivacy")}
        >
          <View style={[styles.rectangleParent, styles.path33370IconPosition]}>
            <View style={styles.groupInner} />
            <View style={styles.maskGroup236} />
          </View>
          <Text
            style={[styles.hello10, styles.helloTypo, styles.helloPosition]}
          >{`Security & Privacy`}</Text>
        </Pressable>
        <Pressable
          style={[styles.groupParent1, styles.groupParentPosition]}
          onPress={() => navigation.navigate("SecurityAndPrivacy1")}
        >
          <View style={[styles.rectangleParent, styles.path33370IconPosition]}>
            <View style={styles.groupInner} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello11, styles.helloTypo]}>About us</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  groupChildLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  path33370IconPosition: {
    bottom: 0,
    right: 0,
    top: 0,
  },
  helloPosition1: {
    marginLeft: -127,
    top: "50%",
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  wrapperPosition: {
    height: 12,
    right: 60,
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    left: "50%",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  textSpaceBlock: {
    marginTop: -6,
    textAlign: "right",
  },
  iconContentLayout: {
    height: 16,
    position: "absolute",
  },
  iconContentPosition: {
    marginLeft: 68.35,
    height: 16,
    top: "50%",
    width: 14,
    left: "50%",
  },
  historyTypo: {
    opacity: 0.3,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  groupParentPosition: {
    height: 60,
    left: 54,
    right: 24,
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_lg,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloPosition: {
    top: "40%",
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  path33370Icon: {
    left: 29,
  },
  hello: {
    top: 108,
    fontSize: GlobalStyles.FontSize.size_8xl,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    left: 59,
    position: "absolute",
  },
  hello1: {
    top: 140,
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    left: 59,
    position: "absolute",
  },
  groupChild: {
    height: "7.76%",
    width: "15.59%",
    top: "12.07%",
    right: "5.94%",
    bottom: "80.17%",
    left: "78.47%",
  },
  hello2: {
    left: "33.76%",
    color: GlobalStyles.Color.blue_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "0%",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  iconOpenAccountLogout: {
    bottom: 2,
    width: 14,
    left: 0,
    maxHeight: "100%",
    top: 0,
    position: "absolute",
  },
  helloParent: {
    marginLeft: -21,
    bottom: 99,
    width: 71,
    height: 14,
    left: "50%",
    position: "absolute",
  },
  hello3: {
    top: "94.09%",
    left: "40.84%",
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.blue_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  hello4: {
    marginTop: -195,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: 59,
    position: "absolute",
  },
  groupItem: {
    marginTop: -173,
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 111,
    left: 54,
    right: 24,
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello5: {
    marginTop: -154,
  },
  hello6: {
    marginTop: -123,
  },
  hello7: {
    marginTop: -93,
  },
  britishPounds: {
    marginLeft: -38.5,
  },
  britishPoundsWrapper: {
    marginTop: -153,
    width: 88,
  },
  text: {
    marginLeft: -26.5,
  },
  wrapper: {
    width: 53,
    marginTop: -123,
  },
  maskGroup241: {
    top: 250,
    bottom: 546,
    left: 239,
    width: 17,
  },
  iconMaterialContentCopy: {
    marginTop: -126,
  },
  iconMaterialContentCopy1: {
    marginTop: -95,
  },
  text1: {
    marginTop: -92,
    marginLeft: 94,
  },
  history: {
    left: 0,
  },
  history1: {
    marginLeft: -66,
    left: "50%",
  },
  history2: {
    marginLeft: 19,
    left: "50%",
  },
  history3: {
    right: -1,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  historyParent: {
    top: 58,
    width: 300,
    left: 0,
  },
  groupInner: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blue_100,
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    position: "absolute",
  },
  hello8: {
    left: "41.72%",
  },
  groupParent: {
    marginTop: -46,
  },
  groupContainer: {
    marginTop: 27,
  },
  hello10: {
    left: "31.29%",
  },
  groupPressable: {
    marginTop: 100,
  },
  hello11: {
    top: "36.67%",
    left: "41.1%",
  },
  groupParent1: {
    marginTop: 173,
  },
  path33370Parent: {
    width: 404,
    height: 812,
  },
  settings: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default Settings;
