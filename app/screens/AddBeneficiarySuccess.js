import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";

const AddBeneficiarySuccess = () => {
  

  return (
    <Screen>
    <Pressable
      style={styles.addBeneficiarySuccess}
      onPress={() => navigation.navigate("BankTransfer")}
    >
      <View style={styles.groupParent}>
        <View style={styles.groupPosition}>
          <View style={[styles.groupChild, styles.groupPosition]} />
        </View>
        <Text style={[styles.hello, styles.helloTypo]}>
          <Text style={styles.yourTransferTo}>
            Your Transfer to Ortiz Tyrese
          </Text>
          <Text style={styles.yourTransferTo}>{"\n"}is on its way!</Text>
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
    </Screen>
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
  yourTransferTo: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello: {
    top: 458,
    marginTop: -18.06,
    marginLeft: -133.56,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  iconAwesomeCheckCircle: {
    marginTop: -188.06,
    marginLeft: -93.56,
    left: "50%",
    width: 187,
    height: 187,
  },
  hello1: {
    marginTop: 250.06,
    marginLeft: -53.56,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
  },
  groupParent: {
    width: "100%",
    height: "100%",
  },
  addBeneficiarySuccess: {
    flex: 1,
    width: "100%",
    paddingTop: GlobalStyles.Padding.padding_12xs,
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default AddBeneficiarySuccess;
