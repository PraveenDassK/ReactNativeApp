import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SuccessScheduledPayment = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.successScheduledPayment}
      onPress={() => navigation.navigate("SchedulePayment")}
    >
      <View style={styles.path23664Parent}>
        <Image
          style={styles.path23664Icon}
          resizeMode="cover"
          source={require("../assets/path-23664.png")}
        />
        <Text style={styles.hello}>
          <Text style={styles.youHaveScheduled}>
            You have scheduled payment
          </Text>
          <Text style={styles.youHaveScheduled}>to Xyz *1234</Text>
        </Text>
        <Image
          style={styles.iconAwesomeCheckCircle}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle164.png")}
        />
        <Text style={[styles.hello1, styles.helloPosition]}>
          <Text style={styles.youHaveScheduled}>
            We'll send your next £500 transfer on
          </Text>
          <Text style={styles.youHaveScheduled}>16 September 2022</Text>
        </Text>
        <Text style={[styles.hello2, styles.helloPosition]}>
          Tap anywhere to continue
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  helloPosition: {
    color: GlobalStyles.Color.gray_700,
    top: "50%",
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  path23664Icon: {
    top: 0,
    right: -60,
    bottom: -60,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  youHaveScheduled: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello: {
    top: 412,
    left: 48,
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
    position: "absolute",
  },
  iconAwesomeCheckCircle: {
    marginTop: -179.5,
    marginLeft: -89.5,
    left: "50%",
    width: 180,
    height: 180,
    top: "50%",
    position: "absolute",
  },
  hello1: {
    marginTop: 99.5,
    left: 47,
    fontSize: GlobalStyles.FontSize.size_xl,
    lineHeight: 20,
    fontWeight: "700",
    color: GlobalStyles.Color.gray_700,
  },
  hello2: {
    marginTop: 332.5,
    left: 120,
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  path23664Parent: {
    width: 375,
    height: 749,
  },
  successScheduledPayment: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    paddingTop: GlobalStyles.Padding.padding_md,
  },
});

export default SuccessScheduledPayment;
