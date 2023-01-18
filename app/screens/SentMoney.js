import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const SentMoney = ({route,navigation}) => {
  console.log(route.params.amount)
  let amount = route.params.amount
  let fullname = route.params.fullname

  return (
    <Pressable
      style={styles.sentMoney}
      onPress={() => navigation.navigate("AccountMain")}
    >
      <View style={styles.groupParent}>
        <View style={[styles.helloWrapperPosition, styles.wrapperPosition]}>
          <View
            style={[
              styles.helloWrapper,
              styles.helloWrapperPosition,
              styles.wrapperPosition,
            ]}
          >
            <Text style={[styles.hello, styles.helloTypo, styles.helloTypo1]}>
              Tap anywhere to continue
            </Text>
          </View>
        </View>
        <Text style={[styles.hello1, styles.helloTypo]}>
          <Text style={styles.youveSent}>{`You've sent `}</Text>
          <Text style={styles.text}>{`£`}{amount}</Text>
          <Text style={styles.youveSent}>{` to `}</Text>
          <Text style={styles.text}>{fullname}</Text>
        </Text>
        <Image
          style={[styles.iconAwesomeCheckCircle, styles.containerPosition]}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle3.png")}
        />
        <View style={[styles.groupContainer, styles.containerPosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupItem, styles.groupPosition]} />
        </View>
        <View style={[styles.helloContainer, styles.containerPosition]}>
          <Text
            style={[
              styles.hello2,
              styles.helloTypo,
              styles.helloTypo1,
              styles.helloWrapperPosition,
            ]}
          >
            <Text style={styles.youveUsed1}>
              You've used 1 of your 100 monthly free local
            </Text>
            <Text style={styles.youveUsed1}>{`transfers allowance `}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    width:"100%",
    position: "absolute",
  },
  helloWrapperPosition: {
    top:"380%",
    width:"100%",

  },
  helloTypo: {
    textAlign: "center",
    position: "absolute",
  },
  helloTypo1: {
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
  },
  containerPosition: {
    position: "absolute",
    top: "50%",
  },
  groupPosition: {
    borderRadius: GlobalStyles.Border.br_6xs,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  hello: {
    marginTop: 302.5,
    left: "50%",
    marginLeft:-60,
    fontSize: GlobalStyles.FontSize.size_xs,
    top: "50%",
  },
  helloWrapper: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    backgroundColor: GlobalStyles.Color.white,
  },
  youveSent: {
    color: GlobalStyles.Color.indigo_100,
  },
  text: {
    color: GlobalStyles.Color.blue_100,
  },
  hello1: {
    top: "75%",
    left: "5%",
    right: "5%",
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontWeight: "700",
    textAlign: "center",
    width:"100%",

  },
  iconAwesomeCheckCircle: {
    marginTop: -218.62,
    marginLeft: -93.56,
    left: "50%",
    width: 187,
    height: 187,
    top: "50%",
  },
  groupChild: {
    backgroundColor: "#bebebe",
    right: 0,
    borderRadius: GlobalStyles.Border.br_6xs,
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.blue_100,
    width: 17,
  },
  groupContainer: {
    marginTop: 55.5,
    right: 33,
    left: 34,
    height: 5,
    top: "50%",
  },
  youveUsed1: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello2: {
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 25,
    left: 0,
    top:0,
    color: GlobalStyles.Color.gray_700,
  },
  helloContainer: {
    marginTop: 80.5,
    right: 50,
    left: 51,
    height: 39,
    top: "50%",
  },
  groupParent: {
    width: "100%",
    height: "100%",
  },
  sentMoney: {
    flex: 1,
    width: "100%",
    paddingTop: GlobalStyles.Padding.padding_xs,
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SentMoney;
