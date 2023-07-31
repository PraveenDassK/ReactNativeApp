import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import AuthContext from "../auth/context";

const AddBeneficiarySuccess = ({ navigation }) => {
  const user = "Ortiz Tyrese";
  const { darkMode } = React.useContext(AuthContext);
  return (
    // <Pressable
    //   style={styles.addBeneficiarySuccess}
    //   onPress={() => navigation.navigate("SendMoney")}
    // >
    <View
      style={darkMode === "DARK" ? styles.darkgroupParent : styles.groupParent}
    >
      <View
        style={
          darkMode === "DARK"
            ? styles.darksucessContainer
            : styles.sucessContainer
        }
      >
        <Text
          style={
            darkMode === "DARK" ? styles.darksuccessText : styles.successText
          }
        >
          Beneficiary added {"\n"} successfully!!
        </Text>

        <Image
          style={{ width: "50%", height: "50%" }}
          resizeMode="contain"
          source={require("../assets/icon-awesomecheckcircle.png")}
        />
        <Pressable
          style={styles.bottomButton}
          onPress={() => navigation.navigate("SendMoney")}
        >
          <Text style={styles.buttontext}>Send Money</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParent: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  darkgroupParent: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  sucessContainer: {
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
    alignItems: "center",
    flex: 0.7,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  darksucessContainer: {
    width: "100%",
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    alignItems: "center",
    flex: 0.7,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  successText: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.black,
  },
  darksuccessText: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.white,
  },
  bottomButton: {
    backgroundColor: GlobalStyles.Color.lightBlack,
    paddingVertical: 20,
    width: "80%",
    borderRadius: 15,
    alignItems: "center",
  },
  buttontext: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
});

export default AddBeneficiarySuccess;
