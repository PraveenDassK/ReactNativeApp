import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Screen from "../components/Screen";
import api from "../api/api_list";
import apiCall from "../api/api";
import AuthContext from "../auth/context";
import AppText from "../components/Text";
import { BlurView } from "expo-blur";

const AccountLetter = ({ navigation }) => {
  const [email, setemail] = useState(null);
  const authContext = useContext(AuthContext);
  const { darkMode } = useContext(AuthContext);

  useEffect(() => {
    loadData();
  }, []);
  
  const loadData = async () => {
    const customer = await api.GetCustomer(authContext.userID);
    const data = customer.data.details;
    setemail(data.associates[0].email);
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
      <View style={{ padding: "5%" }}>
        <View
          style={{
            width: "100%",
            backgroundColor:
              darkMode === "DARK" ? null : GlobalStyles.Color.white,
            borderRadius: 15,
            marginTop: "5%",
          }}
        >
          <BlurView style={{ borderRadius: 15 }}>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "5%",
              }}
            >
              <AppText
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 14,
                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                Account Verification letter
              </AppText>
            </View>
            <Image
              style={{
                height: "20%",
                width: "auto",
                resizeMode: "contain",
                marginVertical: "15%",
              }}
              source={require("../assets/icon-zocialemail.png")}
            />
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontWeight: "bold",
                  fontSize: 12,
                  marginVertical: "3%",
                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                {" "}
                Yay! your details has been verified
              </Text>
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontSize: 15,
                  marginVertical: "3%",
                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                We sent a confirmation email to
              </Text>
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontWeight: "bold",
                  fontSize: 15,
                  marginVertical: "3%",
                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                {email}
              </Text>
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontSize: 15,
                  marginVertical: "3%",
                  textAlign: "center",
                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                Please check your email and click{"\n"} on confirmation link to
                continue.
              </Text>
              <Text
                style={{
                  fontFamily: "Helvetica",
                  fontSize: 15,
                  marginVertical: "10%",
                  color: GlobalStyles.Color.skyblue,
                }}
              >
                Resend email
              </Text>
            </View>
          </BlurView>
        </View>
        {/* <BlurView tint="light" intensity={100} style={styles.blurView}>
         
        </BlurView> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  blurView: {
    width: "100%",
    backgroundColor: "red",
  },
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
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

  subText: {
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
  },

  subTextRow: {
    marginTop: GlobalStyles.RowText.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    fontColor: GlobalStyles.RowText.fontColor,
  },
});

export default AccountLetter;
