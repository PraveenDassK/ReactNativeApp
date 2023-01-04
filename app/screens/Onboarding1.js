import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const Onboarding1 = () => {
  return (
    <Pressable
      style={styles.onboarding1}
      onPress={() => navigation.navigate("Onboarding2")}
    >
      <View style={styles.maskGroup261Parent}>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/image-progress13.png")}
        />
        <Text style={styles.hello}>
          <Text style={styles.manageYourFinances}>
            <Text style={styles.manageYourFinances1}>Manage your Finances With Your Pocket</Text>
          </Text>
        </Text>
        <View style={[styles.card1, styles.cardPosition]}>
          <View
            style={[
              styles.groupParent,
              styles.path33118IconPosition,
              styles.groupParentPosition,
            ]}
          >
            <View
              style={[
                styles.groupParent,
                styles.path33118IconPosition,
                styles.groupParentPosition,
              ]}
            >
              <Image
                style={[
                  styles.path33118Icon,
                  styles.groupIconLayout,
                  styles.path33118IconPosition,
                  styles.groupParentPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/image-orangetilt.png")}
              />
              <View
                style={[
                  styles.groupParent,
                  styles.path33118IconPosition,
                  styles.groupParentPosition,
                ]}
              >
                <Image
                  style={[styles.groupItem, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/logo-carbonytetext.png")}
                />
                <Image
                  style={[styles.groupInner, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/logo-carbonytetext.png")}
                />
                <View style={styles.rectangleView} />
                <Image
                  style={[styles.rectangleIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/image-card.png")}
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
              source={require("../assets/image-chip.png")}
            />
            <Image
              style={styles.groupChild1}
              resizeMode="cover"
              source={require("../assets/logo-visa.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/icon-contactless.png")}
            />
            <Text style={[styles.xxxx, styles.xxxxPosition]}>
              4234 1234 1424 XXXX
            </Text>
            <Text style={[styles.expDate1224, styles.xxxxPosition]}>
              EX<Text style={styles.p}>P</Text> D<Text style={styles.p}>A</Text>
              TE 12 / 24
            </Text>
          </View>
        </View>
        <View style={[styles.card11, styles.cardPosition]}>
          <View
            style={[
              styles.groupParent,
              styles.path33118IconPosition,
              styles.groupParentPosition,
            ]}
          >
            <View
              style={[
                styles.groupParent,
                styles.path33118IconPosition,
                styles.groupParentPosition,
              ]}
            >
              <Image
                style={[
                  styles.path33118Icon,
                  styles.groupIconLayout,
                  styles.path33118IconPosition,
                  styles.groupParentPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/image-orange.png")}
              />
              <View
                style={[
                  styles.groupParent,
                  styles.path33118IconPosition,
                  styles.groupParentPosition,
                ]}
              >
                <Image
                  style={[styles.groupItem, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/logo-carbonytetext.png")}
                />
                <Image
                  style={[styles.groupInner, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/logo-carbonytetext.png")}
                />
                <View style={styles.rectangleView} />
                <Image
                  style={[styles.rectangleIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/image-orange.png")}
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
              source={require("../assets/logo-visa.png")}
            />
            <Image
              style={styles.groupChild1}
              resizeMode="cover"
              source={require("../assets/logo-visa.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/logo-visa.png")}
            />
            <Text style={[styles.xxxx, styles.xxxxPosition]}>
              4234 1234 1424 XXXX
            </Text>
            <Text style={[styles.expDate1224, styles.xxxxPosition]}>
              EX<Text style={styles.p}>P</Text> D<Text style={styles.p}>A</Text>
              TE 12 / 24
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.card11, styles.cardPosition]}
          onPress={() => navigation.navigate("Onboarding2")}
        >
          <View
            style={[
              styles.groupParent,
              styles.path33118IconPosition,
              styles.groupParentPosition,
            ]}
          >
            <View
              style={[
                styles.groupParent,
                styles.path33118IconPosition,
                styles.groupParentPosition,
              ]}
            >
              <Image
                style={[
                  styles.path33118Icon2,
                  styles.groupIconLayout,
                  styles.path33118IconPosition,
                ]}
                resizeMode="cover"
                source={require("../assets/image-orange.png")}
              />
              <View
                style={[
                  styles.groupParent,
                  styles.path33118IconPosition,
                  styles.groupParentPosition,
                ]}
              >
                <Image
                  style={[styles.groupItem, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/logo-carbonytetext.png")}
                />
                <Image
                  style={[styles.groupInner, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/logo-carbonytetext.png")}
                />
                <View style={styles.rectangleView} />
                <Image
                  style={[styles.rectangleIcon, styles.groupIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/image-orange.png")}
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
              source={require("../assets/logo-carbonytetext.png")}
              />
            <Image
              style={styles.groupChild1}
              resizeMode="cover"
              source={require("../assets/logo-carbonytetext.png")}
              />
            <Image
              style={[styles.groupChild2, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/logo-carbonytetext.png")}
              />
          </View>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: "50%",
    position: "absolute",
  },
  cardPosition: {
    height: 299,
    width: 198,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  path33118IconPosition: {
    left: 0,
    top: 0,
  },
  groupParentPosition: {
    bottom: 0,
    right: 0,
    left: 0,
  },
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  bFramePosition: {
    left: "3.42%",
    bottom: "-9.5%",
    right: "65.22%",
    top: "80.69%",
    width: "31.36%",
    height: "28.81%",
    position: "absolute",
  },
  bTypo: {
    textAlign: "left",

    fontWeight: "700",
    position: "absolute",
  },
  xxxxPosition: {
    color: GlobalStyles.Color.gray_1700,
    left: 18,
    textAlign: "left",

    top: "50%",
    position: "absolute",
  },
  maskGroup261: {
    height: 132,
    overflow: "hidden",
    maxWidth: "100%",
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -47.5,
    bottom: 97,
    width: 96,
    height: 10,
  },
  manageYourFinances1: {


    fontWeight: "700",
  },
  manageYourFinances: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  withYourPocket1: {


  },
  hello: {
    left: 48,
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 35,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  path33118Icon: {
    top: 0,
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
  rectangleView: {
    height: "33.14%",
    width: "108.22%",
    top: "68.51%",
    right: "-3.68%",
    bottom: "-1.65%",
    left: "-4.55%",
    backgroundColor: GlobalStyles.Color.gray_1700,
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
    top: "-2.33%",
    left: "-3.23%",
    fontSize: GlobalStyles.FontSize.size_15xl,
    letterSpacing: 5,
    color: GlobalStyles.Color.gray_1900,
  },
  bWrapper: {
    opacity: 0.6,
  },
  business: {
    top: "88.55%",
    left: "10.23%",
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.white,
    letterSpacing: 0,
  },
  groupParent: {
    top: 0,
    position: "absolute",
  },
  groupIcon: {
    top: 17,
    right: 15,
    width: 28,
    height: 30,
    position: "absolute",
  },
  groupChild1: {
    right: 16,
    bottom: 21,
    width: 48,
    height: 41,
    position: "absolute",
  },
  groupChild2: {
    marginLeft: 30.69,
    top: 21,
    width: 17,
    height: 22,
  },
  xxxx: {
    marginTop: -1,
    fontSize: GlobalStyles.FontSize.size_2xs,
    letterSpacing: 0,
  },
  p: {
    letterSpacing: 0,
  },
  expDate1224: {
    marginTop: 26.18,
    fontSize: GlobalStyles.FontSize.size_8xs,
  },
  card1: {
    marginTop: -171,
    marginLeft: -97.5,
  },
  card11: {
    marginTop: -172.5,
    marginLeft: -97.85,
  },
  path33118Icon2: {
    right: -150,
    bottom: -150,
    top: 0,
  },
  bFrame: {
    opacity: 0.4,
  },
  maskGroup261Parent: {
    width: 375,
    height: 686,
  },
  onboarding1: {
    backgroundColor: GlobalStyles.Color.gray_300,
    flex: 1,
    width: "100%",
    paddingTop: GlobalStyles.Padding.padding_8xl,
  },
});

export default Onboarding1;
