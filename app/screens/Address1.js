import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";

import GlobalStyles from "../../GlobalStyles";

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
            <Text style={styles.allowAccessTo}>and much more.</Text>
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
          resizeMode="cover"
          source={require("../assets/image-friendsearch.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloParentPosition: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition1: {
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
    fontSize: GlobalStyles.FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  hello: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  allowAccessTo: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    marginTop: -282.52,
    left: 3,
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_700,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.blue_100,
  },
  maskGroup236: {
    bottom: 13,
  },
  helloParent: {
    bottom: 0,
  },
  hello2: {
    top: "40%",
    left: "31.9%",
    color: GlobalStyles.Color.black,
  },
  groupContainer: {
    bottom: 76,
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.gray_700,
  },
  hello3: {
    top: "38.33%",
    left: "38.96%",
    color: GlobalStyles.Color.white,
  },
  groupPressable: {
    bottom: 0,
  },
  groupInner: {
    marginTop: -153.67,
    right: 22,
    left: 21,
    maxWidth: "100%",
    overflow: "hidden",
    height: 249,
    top: "50%",
    position: "absolute",
  },
  iconIonicIosArrowForward: {
    marginTop: 50,
    left: 26,
    width: 11,
    height: 6,
    top: "70%",
    position: "absolute",
  },
  groupParent: {
    width: "100%",
    height: 652,
  },
  findFriends: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_2xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
  },
});

export default FindFriends;
