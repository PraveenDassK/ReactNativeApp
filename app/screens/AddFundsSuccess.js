import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import GlobalStyles from "../../GlobalStyles";

const AddFundsSuccess = ({navigation}) => {
  return (
    <Pressable
    onPress={() => navigation.navigate("AccountMain")}
    >

    <View style={styles.addFundsSuccess}>
      <View style={styles.iconAwesomeCheckCircleParent}>
        <Image
          style={styles.iconAwesomeCheckCircle}
          resizeMode="cover"
          source={require("../assets/icon-bluecheck.png")}
        />
        <Text style={[styles.hello, styles.helloFlexBox]}>
          <Text style={styles.congratulations}>
            <Text style={styles.congratulations1}>Congratulations!</Text>
          </Text>
          <Text style={styles.congratulations}>
            <Text style={styles.congratulations1}> </Text>
          </Text>
          <Text style={styles.congratulations}>
            <Text style={styles.added1}>{`£500.00 added `}</Text>
          </Text>
          <Text style={styles.congratulations}>
            <Text style={styles.added1}>successfully</Text>
          </Text>
        </Text>
        <Text style={[styles.hello1, styles.helloFlexBox]}>
          Tap anywhere to continue
        </Text>
      </View>
    </View>
    </Pressable>

  );
};

const styles = StyleSheet.create({
  helloFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  iconAwesomeCheckCircle: {
    top: 0,
    right: 0,
    left: 0,
    height:"50%",
    width:"100%",
    overflow: "hidden",
    height: 180,
    position: "absolute",
  },
  congratulations1: {
    fontWeight: "700",
  },
  congratulations: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  added1: {
  },
  hello: {
    top: 219,
    left: 10,
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    color: GlobalStyles.Color.indigo_100,
  },
  hello1: {
    marginTop: 241.5,
    top: "50%",
    left: 22,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
  },
  iconAwesomeCheckCircleParent: {
    width: 180,
    height: 507,
  },
  addFundsSuccess: {
    flex: 1,
    width: "100%",
    paddingLeft: 98,
    paddingTop: GlobalStyles.Padding.padding_11xl,
    paddingRight: 97,
  },
});

export default AddFundsSuccess;
