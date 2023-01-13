import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const Requested = () => {
  
  return (
    <Pressable
      style={styles.requested}
      onPress={() => navigation.navigate("SendMoney")}
    >
      <View style={styles.groupParent}>
        <View style={styles.groupPosition}>
          <View style={[styles.groupChild, styles.groupPosition]} />
        </View>
        <Text style={[styles.hello, styles.helloTypo]}>
          <Text style={styles.youHaveRequested}>You have requested £500{'\n'}</Text>
          <Text style={styles.youHaveRequested}>from Hudson Maia</Text>
        </Text>
        <Image
          style={[styles.iconAwesomeCheckCircle, styles.hello1Position]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle@3x.png")}
        />
        <Text style={[styles.hello1, styles.hello1Position, styles.helloTypo]}>
          Tap anywhere to continue
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello1Position: {
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: GlobalStyles.Color.white,
  },
  youHaveRequested: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello: {
    top: 458,
    left: 69,
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  iconAwesomeCheckCircle: {
    marginTop: -138.06,
    marginLeft: -93.56,
    left: "50%",
    width: 187,
    height: 187,
  },
  hello1: {
    marginTop: 332.5,
    left: 120,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
  },
  groupParent: {
    width: 375,
    height: 749,
  },
  requested: {
    flex: 1,
    width: "100%",
    paddingTop: GlobalStyles.Padding.padding_xs,
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Requested;
