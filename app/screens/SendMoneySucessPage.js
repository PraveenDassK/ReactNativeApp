import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";

const SendMoneySuccessPage = ({ route, navigation }) => {
  
  const text =
    "You have sent £" +
    route.params.successObject.amount +
    " to " +
    route.params.successObject.name;
  const path = route?.params?.params?.finishScreen
    ? route.params.finishScreen
    : "Account";
  
  const { darkMode } = React.useContext(AuthContext);
  return (
    <Pressable
      style={darkMode === "DARK" ? styles.darkrequested : styles.requested}
      onPress={() => navigation.navigate(path, { reload: true })}
    >
      <View
        style={
          darkMode === "DARK" ? styles.darkmainContainer : styles.mainContainer
        }
      >
        <View style={styles.titleTextRow}>
          <Text
            style={
              darkMode === "DARK" ? styles.darktitleText : styles.titleText
            }
          >
            Success
          </Text>
        </View>

        <View style={styles.subTextRow}>
          <Text
            style={darkMode === "DARK" ? styles.darksubText : styles.subText}
          >
            Transaction has completed successfully
          </Text>
        </View>

        <Image
          style={styles.image}
          source={require("../assets/babyblueCircle.png")}
        />

        <Text
          style={{
            fontSize: 20,
            width: "100%",
            fontWeight: "700",
            textAlign: "center",
            marginTop: "15%",
            color:
              darkMode === "DARK"
                ? GlobalStyles.Color.white
                : GlobalStyles.Color.secondaryDarkTheme_bg,
          }}
        >
          {text}
          {"\n"}
        </Text>

        <Text
          style={{
            bottom: 0,
            textAlign: "center",
            position: "absolute",
            width: "100%",
            marginBottom: "5%",
            color: darkMode === "DARK" ? GlobalStyles.Color.darkGray : null,
          }}
        >
          Tap anywhere to continue
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },
  darkmainContainer: {
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },
  darktitleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
    color: GlobalStyles.Color.white,
  },

  subText: {
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
  },
  darksubText: {
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
    color: GlobalStyles.Color.white,
  },
  subTextRow: {
    marginTop: GlobalStyles.RowText.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    fontColor: GlobalStyles.RowText.fontColor,
  },
  requested: {
    width: "100%",
    height: "100%",
  },
  darkrequested: {
    width: "100%",
    height: "100%",
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },

  image: {
    width: "90%",
    resizeMode: "contain",
    marginLeft: "5%",
    height: "25%",
    marginTop: "50%",
  },
});

export default SendMoneySuccessPage;
