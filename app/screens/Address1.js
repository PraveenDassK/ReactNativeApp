import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";

import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"


const FindFriends = ({navigation}) => {
  

  return (
    <View style={styles.findFriends}>
      <Image
          style={styles.iconIonicIosArrowForward}
          resizeMode="cover"
          source={require("../assets/icon-whitearrow.png")}
        />
      <View style={styles.groupParent}>
      

        <View style={[styles.helloParent, styles.helloParentPosition]}>
          <Text style={styles.hello}>Find your friends</Text>
          <Text style={styles.hello1}>
            <Text style={styles.allowAccessTo}>
              Allow access to contacts to send and request
            </Text>
            <Text style={styles.allowAccessTo}>
              money from your friends more easily, split bills
            </Text>
            <Text style={styles.allowAccessTo}> and much more.</Text>
          </Text>
          <Pressable
            style={[styles.groupContainer, styles.groupPosition1]}
            onPress={() => navigation.navigate("Account3")}
          >
            <View style={[styles.helloParent, styles.helloParentPosition]}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View style={[styles.maskGroup236, styles.helloParentPosition]} />
            </View>
            <Text style={[styles.hello2, styles.helloTypo]}>Allow Access</Text>
          </Pressable>
          <Pressable
            style={[styles.groupPressable, styles.groupPosition1]}
            onPress={() => navigation.navigate("Account3")}
          >
            <View style={[styles.helloParent, styles.helloParentPosition]}>
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View style={[styles.maskGroup236, styles.helloParentPosition]} />
            </View>
            <Text style={[styles.hello3, styles.helloTypo]}>Not Now</Text>
          </Pressable>
        </View>
        <Image
          style={styles.groupInner}
          source={require("../assets/image-friendsearch.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloParentPosition: {
    left: horizontalScale(0),
    right: horizontalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  groupPosition1: {
    height: verticalScale(60),
    left: horizontalScale(0),
    right: horizontalScale(0),
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
    fontSize: GlobalStyles.FontSize.size_lg,
    alignItems: 'center',
    position: "absolute",
  },
  hello: {
    left: horizontalScale(2),
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    top: verticalScale(0),
    position: "absolute",
  },
  allowAccessTo: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    marginTop: verticalScale(-282.52),
    left: horizontalScale(3),
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: verticalScale(20),
    color: GlobalStyles.Color.gray_700,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.blue_100,
  },
  maskGroup236: {
    bottom: verticalScale(13),
  },
  helloParent: {
    bottom: verticalScale(0),
  },
  hello2: {
    top: verticalScale(20),
    left: "50%",
    marginLeft: horizontalScale(-45),
    color: GlobalStyles.Color.black,
    width: "100%",
  },
  groupContainer: {
    bottom: verticalScale(76),
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.gray_700,
  },
  hello3: {
    top: "38.33%",
    left: "50%",
    marginLeft: horizontalScale(-35),
    color: GlobalStyles.Color.black,
  },
  groupPressable: {
    bottom: verticalScale(0),
  },
  groupInner: {
    marginTop: verticalScale(-153.67),
    right: horizontalScale(22),
    left: "50%",
    marginLeft: horizontalScale(-130),
    overflow: "hidden",
    height: verticalScale(259),
    width: horizontalScale(294),
    top: "50%",
    position: "absolute",
    resizeMode:'contain',
  },
  iconIonicIosArrowForward: {
    marginTop: verticalScale(50),
    left: horizontalScale(26),
    width: horizontalScale(11),
    height: verticalScale(6),
    top: "70%",
    position: "absolute",
  },
  groupParent: {
    width: "100%",
    height: verticalScale(652),
  },
  findFriends: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_8xs,
    paddingTop: GlobalStyles.Padding.padding_8xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
  },
});


export default FindFriends;
