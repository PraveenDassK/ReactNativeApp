import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const YourForest6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yourForest6}>
      <View style={styles.layer1Parent}>
        <Image
          style={styles.layer1Icon}
          resizeMode="cover"
          source={require("../assets/layer-11.png")}
        />
        <Text style={styles.hello}>Hudson's forest</Text>
        <Pressable
          style={[styles.groupParent, styles.parentPosition]}
          onPress={() => navigation.navigate("Carbon")}
        >
          <View style={[styles.parentPosition, styles.maskGroup236Position]}>
            <View style={styles.groupChild} />
            <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
          </View>
          <Text style={styles.hello1}>Buy Projects</Text>
        </Pressable>
        <Text style={[styles.hello2, styles.helloFlexBox, styles.helloColor]}>
          <Text style={styles.youCanPlant}>
            You can plant more trees by spending on
          </Text>
          <Text style={styles.youCanPlant}>
            project and make your forest green,
          </Text>
          <Text style={styles.youCanPlant}>Free from carbon.</Text>
        </Text>
        <Text style={[styles.hello3, styles.helloFlexBox]}>
          <Text style={styles.youCanPlant}>Bring your virtual Forest</Text>
          <Text style={styles.youCanPlant}>to life</Text>
        </Text>
        <Text style={[styles.hello4, styles.helloColor]}>
          <Text style={styles.youCanPlant}>
            Added the trees you earned by buying your
          </Text>
          <Text style={styles.youCanPlant}>Elite Carbonyte card.</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    bottom: 0,
    position: "absolute",
  },
  maskGroup236Position: {
    top: 0,
    left: 0,
    right: 0,
  },
  helloFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  helloColor: {
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  layer1Icon: {
    marginTop: -193.08,
    maxWidth: "100%",
    overflow: "hidden",
    height: 237,
    left: 0,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
    textTransform: "capitalize",
    left: 9,
    top: 0,
    position: "absolute",
  },
  groupChild: {
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
    position: "absolute",
  },
  hello1: {
    top: "38.33%",
    left: "32.52%",
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    right: 8,
    height: 60,
    left: 9,
    bottom: 0,
  },
  youCanPlant: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello2: {
    top: "76.96%",
    left: "7.61%",
    fontSize: GlobalStyles.FontSize.size_xl,
    lineHeight: 20,
  },
  hello3: {
    marginTop: 78.5,
    marginLeft: -117.5,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 28,
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
    textTransform: "capitalize",
    textAlign: "center",
    top: "50%",
  },
  hello4: {
    top: "7.01%",
    left: "3.22%",
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    position: "absolute",
  },
  layer1Parent: {
    width: 342,
    height: 599,
  },
  yourForest6: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_9xs,
    paddingTop: GlobalStyles.Padding.padding_6xl,
    paddingRight: GlobalStyles.Padding.padding_9xs,
    alignItems: "center",
    width: "100%",
  },
});

export default YourForest6;
