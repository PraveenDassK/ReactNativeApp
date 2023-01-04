import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const PushNotification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pushNotification}>
      <View style={styles.groupParent}>
        <View style={[styles.helloParent, styles.parentPosition]}>
          <Text style={styles.hello}>Notify Me</Text>
          <Pressable
            style={[styles.groupContainer, styles.groupPosition1]}
            onPress={() => navigation.navigate("FindFriends")}
          >
            <View style={[styles.rectangleParent, styles.parentPosition]}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <View style={[styles.maskGroup236, styles.parentPosition]} />
            </View>
            <Text style={[styles.hello1, styles.helloTypo, styles.helloTypo1]}>
              Enable Push Notifications
            </Text>
          </Pressable>
          <Text
            style={[styles.hello2, styles.hello2Position, styles.helloTypo]}
          >
            <Text style={styles.getAllNotifications}>
              Get all notifications of your spending, wealth,
            </Text>
            <Text style={styles.getAllNotifications}>
              finances, carbon spending and much more...
            </Text>
          </Text>
          <View style={[styles.groupView, styles.groupPosition1]}>
            <View style={[styles.rectangleParent, styles.parentPosition]}>
              <View style={[styles.groupItem, styles.groupPosition]} />
              <View style={[styles.maskGroup236, styles.parentPosition]} />
            </View>
            <Text style={[styles.hello3, styles.helloTypo, styles.helloTypo1]}>
              Not Now
            </Text>
          </View>
        </View>
        <Image
          style={[styles.groupInner, styles.hello2Position]}
          resizeMode="cover"
          source={require("../assets/group-30772.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition1: {
    height: 60,
    right: 0,
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
  },
  helloTypo1: {
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_lg,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  hello2Position: {
    top: "50%",
    position: "absolute",
  },
  hello: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.gray_500,
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
  },
  rectangleParent: {
    right: 0,
    bottom: 0,
  },
  hello1: {
    top: "40%",
    left: "15.64%",
    color: GlobalStyles.Color.black,
  },
  groupContainer: {
    bottom: 76,
  },
  getAllNotifications: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello2: {
    marginTop: -282.52,
    left: 3,
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 20,
    color: GlobalStyles.Color.gray_700,
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.gray_700,
  },
  hello3: {
    top: "38.33%",
    left: "38.96%",
    color: GlobalStyles.Color.white,
  },
  groupView: {
    bottom: 0,
  },
  helloParent: {
    right: 19,
    bottom: 0,
  },
  groupInner: {
    marginTop: -221.89,
    left: 28,
    maxWidth: "100%",
    overflow: "hidden",
    height: 402,
    right: 0,
  },
  groupParent: {
    width: 345,
    height: 652,
  },
  pushNotification: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: 5,
    width: "100%",
  },
});

export default PushNotification;
