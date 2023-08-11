import React, { useContext, useEffect, useState } from "react";
import { AppState } from "react-native";
import { Asset, useAssets } from "expo-asset";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Switch,
  ImageBackground,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import Button from "../components/AppButton";
import { BlurView } from "expo-blur";
const CarbonyteLabs = ({ navigation }) => {
  const [assets, error] = useAssets([
    require("../assets/icon-faceid.png"),
    require("../assets/icon-view.png"),
    require("../assets/blueMessage.png"),
  ]);

  const { setIsAuth, settings, setSettings, darkMode } =
    useContext(AuthContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  useEffect(() => {
    restoreSignIn();
  }, []);

  useEffect(() => {
    if (isEnabled === true) {
      authStorage.storeSignInSetting(
        JSON.stringify({ signedIn: `${isEnabled}` })
      );

      // potential authenticate()
    }
    if (isEnabled === false) {
      authStorage.storeSignInSetting(
        JSON.stringify({ signedIn: `${isEnabled}` })
      );
    }
  }, [isEnabled]);

  const restoreSignIn = async () => {
    const token = await authStorage.getSignInSettings();
    if (!token) return;

    setIsEnabled(token.includes("true"));
  };

  //Setts the settings when coming ot the page
  useEffect(() => {
    setToggles();
  }, []);

  const setToggles = () => {
    settings.hideBalance ? setIsEnabled1(true) : null;
    settings.contactAccess ? setIsEnabled2(true) : null;
    settings.transactionSharing ? setIsEnabled3(true) : null;
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
    setSettings((prev) => ({ ...prev, hideBalance: !prev.hideBalance }));
  };
  const toggleSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
    setSettings((prev) => ({ ...prev, contactAccess: !prev.contactAccess }));
  };

  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/backgrounds/profilepage/CarbonyteLab-dark.png")
          : require("../assets/backgrounds/profilepage/CarbonyteLab-white.png")
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
        <View style={{ marginLeft: GlobalStyles.DivContainer.marginLeft }}>
          <Text style={{ color: "red", fontSize: 13 }}>
            Warning these are test functions that will be added into a later
            version
          </Text>
        </View>
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
            <View style={styles.divRow}>
              <Image
                style={styles.icon}
                source={require("../assets/icon-faceid.png")}
              />

              <Text
                style={
                  darkMode === "DARK" ? styles.darkdivText : styles.divText
                }
              >
                Show Joint Business Accounts
              </Text>

              <Switch
                style={[styles.groupChildPosition]}
                trackColor={{
                  false: GlobalStyles.Color.gray_600,
                  true: GlobalStyles.Color.blue_100,
                }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <View style={styles.divRow}>
              <Image
                style={styles.icon}
                source={require("../assets/icon-view.png")}
              />

              <Text
                style={
                  darkMode === "DARK" ? styles.darkdivText : styles.divText
                }
              >
                Tag each TX
              </Text>

              <Switch
                style={[styles.groupChildPosition]}
                trackColor={{
                  false: GlobalStyles.Color.gray_600,
                  true: GlobalStyles.Color.blue_100,
                }}
                thumbColor={isEnabled1 ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={toggleSwitch1}
                value={isEnabled1}
              />
            </View>

            <View style={styles.divRow}>
              <Image
                style={styles.icon}
                source={require("../assets/blueMessage.png")}
              />

              <Text
                style={
                  darkMode === "DARK" ? styles.darkdivText : styles.divText
                }
              >
                Auto Tree Populate
              </Text>

              <Switch
                style={[styles.groupChildPosition]}
                trackColor={{
                  false: GlobalStyles.Color.gray_600,
                  true: GlobalStyles.Color.blue_100,
                }}
                thumbColor={isEnabled3 ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
          </BlurView>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  divRow: {
    width: "90%",
    marginLeft: "5%",
    // backgroundColor: "white",
    flexDirection: "row",
    height: 50,
    borderRadius: 15,
    marginVertical: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    resizeMode: "contain",
    height: "70%",
    flex: 1,
    marginLeft: "2.5%",
  },

  divText: {
    flex: 5,
    marginLeft: "5%",
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  darkdivText: {
    flex: 5,
    marginLeft: "5%",
    color: GlobalStyles.Color.white,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
});

export default CarbonyteLabs;
