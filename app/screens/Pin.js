import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
//import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../../GlobalStyles";

const Pin = () => {
  //const navigation = useNavigation();

  return (
    <View style={styles.pin}>
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Setup Your Pin</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/icon-progress14.png")}
        />
        <Text style={[styles.hello1, styles.helloTypo2]}>1</Text>
        <Text style={[styles.hello2, styles.helloTypo2]}>4</Text>
        <Text style={[styles.hello3, styles.helloTypo2]}>7</Text>
        <Text style={[styles.hello4, styles.helloTypo1]}>2</Text>
        <Text style={[styles.hello5, styles.helloTypo1]}>5</Text>
        <Text style={[styles.hello6, styles.helloTypo1]}>8</Text>
        <Text style={[styles.hello7, styles.helloTypo1]}>0</Text>
        <Text style={[styles.hello8, styles.helloTypo]}>3</Text>
        <Text style={[styles.hello9, styles.helloTypo]}>6</Text>
        <Text style={[styles.hello10, styles.helloTypo]}>9</Text>
        <Image
          style={styles.iconIonicMdBackspace}
          resizeMode="cover"
          source={require("../assets/icon-backspace.png")}
        />
        <Pressable
          style={[
            styles.groupParent,
            styles.groupParentPosition,
            styles.parentPosition,
          ]}
          onPress={() => navigation.navigate("Success")}
        >
          <View
            style={[
              styles.rectangleParent,
              styles.groupParentPosition,
              styles.parentPosition,
            ]}
          >
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup236, styles.groupParentPosition]} />
          </View>
          <Text style={styles.hello11}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    height: 65,
    width: 66,
    left: 21,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition1: {
    width: 65,
    marginLeft: -34,
    height: 65,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    right: 22,
    height: 65,
    width: 66,
    top: "50%",
    position: "absolute",
  },
  helloTypo2: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_9xl,
    left: 45,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloTypo1: {
    left: 153,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_9xl,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloTypo: {
    left: 262,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_9xl,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  groupParentPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  parentPosition: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  hello: {
    left: 10,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -77,
    top: 105,
    width: 142,
    height: 13,
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    marginTop: -130,
  },
  groupInner: {
    marginTop: -50,
  },
  ellipseIcon: {
    marginTop: 31,
  },
  groupChild1: {
    marginTop: -130,
  },
  groupChild2: {
    marginTop: -50,
  },
  groupChild3: {
    marginTop: 31,
  },
  groupChild4: {
    marginTop: 111,
  },
  groupChild5: {
    marginTop: -130,
  },
  groupChild6: {
    marginTop: -50,
  },
  groupChild7: {
    marginTop: 31,
  },
  hello1: {
    top: 217,
  },
  hello2: {
    top: 297,
  },
  hello3: {
    top: 377,
  },
  hello4: {
    top: 217,
  },
  hello5: {
    top: 297,
  },
  hello6: {
    top: 377,
  },
  hello7: {
    top: 458,
  },
  hello8: {
    top: 217,
  },
  hello9: {
    top: 297,
  },
  hello10: {
    top: 377,
  },
  iconIonicMdBackspace: {
    right: 41,
    bottom: 173,
    width: 28,
    height: 21,
    position: "absolute",
  },
  rectangleView: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
  },
  rectangleParent: {
    top: 0,
    bottom: 0,
  },
  hello11: {
    top: "40%",
    left: "40.8%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    height: 60,
  },
  helloParent: {
    width: 326,
    height: 654,
  },
  pin: {
    backgroundColor: "#f3f0f4",
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
  },
});

export default Pin;
