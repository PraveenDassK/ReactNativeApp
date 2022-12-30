import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.onboarding1}
      onPress={() => navigation.navigate("Onboarding2")}
    >
      <Image
        style={[styles.maskGroup261, styles.mt9]}
        resizeMode="cover"
        source={require("../assets/mask-group-261.png")}
      />
      <Pressable
        style={[styles.onboarding1Inner, styles.mt74]}
        onPress={() => navigation.navigate("Onboarding2")}
      >
        <View style={[styles.groupChild, styles.groupPosition]} />
      </Pressable>
      <View style={[styles.statusBarBlack, styles.mt_812]}>
        <View style={[styles.rectangle, styles.groupPosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.groupPosition]}>
            <Text style={styles.text}>9:41</Text>
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
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt84, styles.ml1]} />
      <Image
        style={[styles.onboarding1Child, styles.mt_107, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/group-306272.png")}
      />
      <Text style={[styles.hello, styles.mt74, styles.ml1]}>
        <Text style={styles.manageYourFinances}>
          <Text style={styles.manageYourFinances1}>Manage your Finances</Text>
        </Text>
        <Text style={styles.manageYourFinances}>
          <Text style={styles.withYourPocket1}>With Your Pocket</Text>
        </Text>
      </Text>
      <View style={[styles.card1, styles.mt_297, styles.ml3]}>
        <View style={[styles.groupParent, styles.groupPosition]}>
          <View style={[styles.groupParent, styles.groupPosition]}>
            <Image
              style={[
                styles.path33118Icon,
                styles.groupIconLayout,
                styles.groupPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/path-3311819.png")}
            />
            <View style={[styles.groupParent, styles.groupPosition]}>
              <Image
                style={[styles.groupItem, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-3175918.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-3176019.png")}
              />
              <View style={styles.groupChild1} />
              <Image
                style={[styles.rectangleIcon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-262042.png")}
              />
              <View style={[styles.bWrapper, styles.bFramePosition]}>
                <Text style={[styles.b, styles.bTypo]}>B</Text>
              </View>
              <Text style={[styles.business, styles.bTypo]}>BUSINESS</Text>
            </View>
          </View>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-3176419.png")}
          />
          <Image
            style={[styles.groupChild2, styles.statusBarPosition]}
            resizeMode="cover"
            source={require("../assets/group-3176618.png")}
          />
          <Image
            style={[styles.groupChild3, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/group-3176719.png")}
          />
          <Text style={[styles.xxxx, styles.xxxxPosition]}>
            4234 1234 1424 XXXX
          </Text>
          <Text style={[styles.expDate1224, styles.xxxxPosition]}>
            EX<Text style={styles.p}>P</Text> D<Text style={styles.p}>A</Text>TE
            12 / 24
          </Text>
        </View>
      </View>
      <View style={[styles.card1, styles.mt109, styles.ml2]}>
        <View style={[styles.groupParent, styles.groupPosition]}>
          <View style={[styles.groupParent, styles.groupPosition]}>
            <Image
              style={[
                styles.path33118Icon,
                styles.groupIconLayout,
                styles.groupPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/path-3311820.png")}
            />
            <View style={[styles.groupParent, styles.groupPosition]}>
              <Image
                style={[styles.groupItem, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-3175918.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-3176020.png")}
              />
              <View style={styles.groupChild1} />
              <Image
                style={[styles.rectangleIcon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-262042.png")}
              />
              <View style={[styles.bWrapper, styles.bFramePosition]}>
                <Text style={[styles.b, styles.bTypo]}>B</Text>
              </View>
              <Text style={[styles.business, styles.bTypo]}>BUSINESS</Text>
            </View>
          </View>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-3176420.png")}
          />
          <Image
            style={[styles.groupChild2, styles.statusBarPosition]}
            resizeMode="cover"
            source={require("../assets/group-3176618.png")}
          />
          <Image
            style={[styles.groupChild3, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/group-3176719.png")}
          />
          <Text style={[styles.xxxx, styles.xxxxPosition]}>
            4234 1234 1424 XXXX
          </Text>
          <Text style={[styles.expDate1224, styles.xxxxPosition]}>
            EX<Text style={styles.p}>P</Text> D<Text style={styles.p}>A</Text>TE
            12 / 24
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.card1, styles.mt_299, styles.ml2]}
        onPress={() => navigation.navigate("Onboarding2")}
      >
        <View style={[styles.groupParent, styles.groupPosition]}>
          <View style={[styles.groupParent, styles.groupPosition]}>
            <Image
              style={[styles.path33118Icon2, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../assets/path-3311821.png")}
            />
            <View style={[styles.groupParent, styles.groupPosition]}>
              <Image
                style={[styles.groupItem, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-3175918.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/group-3176018.png")}
              />
              <View style={styles.groupChild1} />
              <Image
                style={[styles.rectangleIcon, styles.groupIconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-262042.png")}
              />
              <View style={[styles.bFrame, styles.bFramePosition]}>
                <Text style={[styles.b, styles.bTypo]}>B</Text>
              </View>
              <Text style={[styles.business, styles.bTypo]}>BUSINESS</Text>
            </View>
          </View>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-3176420.png")}
          />
          <Image
            style={[styles.groupChild2, styles.statusBarPosition]}
            resizeMode="cover"
            source={require("../assets/group-3176618.png")}
          />
          <Image
            style={[styles.groupChild3, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/group-3176718.png")}
          />
        </View>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt9: {
    marginTop: GlobalStyles.Margin.margin_25xs,
  },
  mt74: {
    marginTop: GlobalStyles.Margin.margin_35xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_90xs,
  },
  mt84: {
    marginTop: GlobalStyles.Margin.margin_42xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_32xs,
  },
  mt_107: {
    marginTop: -107,
  },
  mt_297: {
    marginTop: -297,
  },
  ml3: {
    marginLeft: GlobalStyles.Margin.margin_30xs,
  },
  mt109: {
    marginTop: 109,
  },
  ml2: {
    marginLeft: GlobalStyles.Margin.margin_31xs,
  },
  mt_299: {
    marginTop: GlobalStyles.Margin.margin_81xs,
  },
  groupPosition: {
    bottom: 0,
    left: 0,
    top: 0,
  },
  statusBarPosition: {
    right: 16,
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
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  bFramePosition: {
    left: "3.42%",
    bottom: "-8.83%",
    right: "65.22%",
    top: "76.67%",
    width: "31.36%",
    height: "32.16%",
    position: "absolute",
  },
  bTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  xxxxPosition: {
    color: GlobalStyles.Color.gray_1600,
    left: 18,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  maskGroup261: {
    height: 132,
    width: 375,
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    left: 0,
    right: 0,
    position: "absolute",
  },
  onboarding1Inner: {
    height: 812,
    width: 375,
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
    right: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  time: {
    width: 40,
    left: 0,
    position: "absolute",
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
    top: 0,
    position: "absolute",
  },
  network: {
    right: 68,
    width: 17,
  },
  statusBar: {
    marginTop: -15,
    left: 15,
    height: 26,
    top: "50%",
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
  onboarding1Child: {
    width: 96,
    height: 10,
  },
  manageYourFinances1: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
  },
  manageYourFinances: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  withYourPocket1: {
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 35,
    color: GlobalStyles.Color.indigo,
    textAlign: "center",
  },
  path33118Icon: {
    left: 0,
    right: 0,
  },
  groupItem: {
    height: "6.35%",
    width: "49.25%",
    top: "-62.13%",
    right: "53.94%",
    bottom: "155.78%",
    left: "-3.18%",
  },
  groupInner: {
    height: "10.54%",
    width: "81.73%",
    top: "28.89%",
    right: "9.14%",
    bottom: "60.57%",
    left: "9.14%",
  },
  groupChild1: {
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: GlobalStyles.Color.gray_1600,
    position: "absolute",
  },
  rectangleIcon: {
    height: "13.04%",
    width: "21.19%",
    top: "101.17%",
    right: "-91.6%",
    bottom: "-14.22%",
    left: "170.41%",
  },
  b: {
    top: "-2.08%",
    left: "-3.23%",
    fontSize: GlobalStyles.FontSize.size_16xl,
    letterSpacing: 5,
    color: GlobalStyles.Color.gray_1700,
  },
  bWrapper: {
    opacity: 0.6,
  },
  business: {
    top: "87.88%",
    left: "10.23%",
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.white,
    letterSpacing: 0,
  },
  groupParent: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  groupIcon: {
    top: 17,
    right: 15,
    width: 28,
    height: 30,
    position: "absolute",
  },
  groupChild2: {
    bottom: 21,
    width: 48,
    height: 41,
  },
  groupChild3: {
    marginLeft: 30.69,
    top: 21,
    height: 22,
    width: 17,
  },
  xxxx: {
    fontSize: GlobalStyles.FontSize.size_2xs,
    marginTop: -3,
    letterSpacing: 0,
  },
  p: {
    letterSpacing: 0,
  },
  expDate1224: {
    marginTop: 25.18,
    fontSize: GlobalStyles.FontSize.size_10xs,
  },
  card1: {
    width: 198,
    height: 299,
  },
  path33118Icon2: {
    right: -150,
    bottom: -150,
    left: 0,
    top: 0,
  },
  bFrame: {
    opacity: 0.4,
  },
  onboarding1: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Onboarding1;
