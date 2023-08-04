import React, { useEffect, useState, useContext } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/AppButton";
import apiAccount from "../api/apiAccount";
import AuthContext from "../auth/context";
import terminateCardAlert from "../utility/terminateCardAlert";
import colors from "../config/colors";
import GlobalStyles from "../../GlobalStyles";
import LinearAccountButton from "../components/LinearAccountButton";
const DeleteAccount = ({ navigation }) => {
  const { userID, darkMode } = useContext(AuthContext);

  /**
   * @dev This handles the deletion of the current account
   */
  const handleDelete = async () => {
    //apiAccount.DeleteAccount(userID)
  };

  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/dashboardDark/carbonbottom.png")
          : require("../assets/backgrounds/spendingLimit.jpg")
      }
      resizeMode="contain"
      imageStyle={{
        bottom: "-65%", // Whatever offset you want from the bottom
      }}
      style={{
        width: "100%",
        flex: 1,
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.lightTheme_bg,
      }}
    >
      <View style={styles.container}>
        <Text
          style={{
            color:
              darkMode === "DARK"
                ? GlobalStyles.Color.white
                : GlobalStyles.Color.secondaryDarkTheme_bg,
          }}
        >
          Do you wish to terminate your account?
        </Text>
        <View style={{ width: "100%", marginVertical: "5%" }}>
          <LinearAccountButton
            title="no"
            textColor="black"
            color="white"
            onPress={() => navigation.navigate("Account")}
            darkMode={darkMode}
          />
        </View>
        <Button
          title="yes"
          textColor="black"
          color="danger"
          onPress={() => terminateCardAlert(handleDelete)}
        />
      </View>
    </ImageBackground>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
  },
});
