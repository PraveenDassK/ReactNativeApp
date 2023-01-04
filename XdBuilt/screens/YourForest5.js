import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const YourForest5 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.yourForest5}
      onPress={() => navigation.navigate("YourForest6")}
    >
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloFlexBox1, styles.helloTypo]}>
          <Text style={styles.bringYourVirtual}>Bring your virtual Forest</Text>
          <Text style={styles.bringYourVirtual}>to life</Text>
        </Text>
        <Text style={[styles.hello1, styles.helloColor, styles.helloFlexBox1]}>
          <Text style={styles.bringYourVirtual}>
            You can plant more trees by spending on
          </Text>
          <Text style={styles.bringYourVirtual}>
            project and make your forest green,
          </Text>
          <Text style={styles.bringYourVirtual}>Free from carbon.</Text>
        </Text>
        <Image
          style={styles.layer1Icon}
          resizeMode="cover"
          source={require("../assets/layer-1.png")}
        />
        <Text style={[styles.hello2, styles.helloFlexBox, styles.helloColor]}>
          <Text style={styles.bringYourVirtual}>
            Added the trees you earned by buying your
          </Text>
          <Text style={styles.bringYourVirtual}>Elite Carbonyte card.</Text>
        </Text>
        <Text style={[styles.hello3, styles.helloFlexBox, styles.helloTypo]}>
          Hudson's forest
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  helloFlexBox1: {
    textAlign: "center",
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.indigo_100,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  helloColor: {
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  bringYourVirtual: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello: {
    marginTop: 119.5,
    marginLeft: -117.5,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 28,
    top: "50%",
  },
  hello1: {
    top: "89.17%",
    left: "7.61%",
    fontSize: GlobalStyles.FontSize.size_xl,
    lineHeight: 20,
  },
  layer1Icon: {
    marginTop: -134.83,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 219,
    top: "50%",
    position: "absolute",
  },
  hello2: {
    top: "8.12%",
    left: "3.22%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
  },
  hello3: {
    top: 0,
    left: 9,
    fontSize: GlobalStyles.FontSize.size_7xl,
  },
  helloParent: {
    width: 342,
    height: 517,
  },
  yourForest5: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_9xs,
    paddingTop: GlobalStyles.Padding.padding_6xl,
    paddingRight: GlobalStyles.Padding.padding_9xs,
    alignItems: "center",
  },
});

export default YourForest5;
