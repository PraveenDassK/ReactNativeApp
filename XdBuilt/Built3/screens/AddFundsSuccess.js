import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AddFundsSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addFundsSuccess}>
      <Pressable
        style={styles.addFundsSuccessChild}
        onPress={() => navigation.navigate("Account3")}
      />
      <Image
        style={[styles.iconAwesomeCheckCircle, styles.mt_537, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/icon-awesomecheckcircle3.png")}
      />
      <Text style={[styles.hello, styles.mt36, styles.ml1]}>
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
      <Text style={[styles.hello1, styles.mt183, styles.ml1]}>
        Tap anywhere to continue
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_537: {
    marginTop: -537,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  mt36: {
    marginTop: GlobalStyles.Margin.margin_14xl,
  },
  mt183: {
    marginTop: 183,
  },
  addFundsSuccessChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    width: 375,
    height: 812,
  },
  iconAwesomeCheckCircle: {
    width: 180,
    height: 180,
  },
  congratulations1: {
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  congratulations: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  added1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    lineHeight: 24,
    color: GlobalStyles.Color.indigo,
    textAlign: "center",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_2xs,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "center",
  },
  addFundsSuccess: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default AddFundsSuccess;
