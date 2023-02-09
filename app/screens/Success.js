import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const Success = ({route,navigation}) => {
  console.log(route?.params?.params?.successText)
  const text = route?.params?.params?.successText
  const path = route?.params?.params?.finishScreen ? route.params.finishScreen : "Account"
  console.log(path)
  return (
    <Pressable
      style={styles.requested}
      onPress={() => navigation.navigate(path)}
    >
      <View style={styles.groupParent}>
        <View style={styles.groupPosition}>
          <View style={[styles.groupChild, styles.groupPosition]} />
        </View>
        <Text style={[styles.hello, styles.helloTypo]}>
          <Text style={styles.youHaveRequested}>{text}{'\n'}</Text>
        </Text>
        <Image
          style={[styles.iconAwesomeCheckCircle, styles.hello1Position]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle.png")}
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
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
    textAlign: "center",
    width:"100%"
  },
  iconAwesomeCheckCircle: {
    marginTop: -100,
    marginLeft: -93.56,
    left: "50%",
    width: 187,
    height: 187,
  },
  hello1: {
    marginTop: 290.5,
    left: "50%",
    marginLeft: -80,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
  },
  groupParent: {
    width: "100%",
    height: "100%",
  },
  requested: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Success;
