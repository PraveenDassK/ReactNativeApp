import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Switch,
  Button,
  Linking,
  Platform,
  Alert,
  ImageBackground,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import { BlurView } from "expo-blur";
const AboutUs = ({ navigation }) => {
  const { setIsAuth, settings, setSettings, darkMode } =
    useContext(AuthContext);

  const navigateAlert = (onPress) =>
    Alert.alert(null, "You are about to navigate away from the application", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: onPress },
    ]);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  console.log(settings);

  useEffect(() => {
    restoreSignIn();
  }, []);

  useEffect(() => {
    if (isEnabled === true) {
      authStorage.storeSignInSetting(
        JSON.stringify({ signedIn: `${isEnabled}` })
      );
      console.log("isEnabled", isEnabled);
      // potential authenticate()
    }
    if (isEnabled === false) {
      authStorage.storeSignInSetting(
        JSON.stringify({ signedIn: `${isEnabled}` })
      );
      console.log("isNotEnabled", isEnabled);
    }
  }, [isEnabled]);

  const restoreSignIn = async () => {
    console.log("trying for signIn in security");
    const token = await authStorage.getSignInSettings();
    if (!token) return;
    console.log("restore token found in security", token.includes("true"));
    setIsEnabled(token.includes("true"));
  };

  //Setts the settings when coming ot the page
  useEffect(() => {
    setToggles();
  }, []);

  const setToggles = () => {
    console.log(settings);

    settings.hideBalance ? setIsEnabled1(true) : null;
    settings.contactAccess ? setIsEnabled2(true) : null;
    settings.transactionSharing ? setIsEnabled3(true) : null;
  };

  const urlFacebook = "https://m.facebook.com/#!/Carbonyte-111640987687669/";
  const urlTwitter = "https://twitter.com/carbonyte_io/";
  const urlAppStore = "https://www.apple.com/uk/app-store/";
  const urlAndroid = "https://play.google.com/";
  const urlImprove = "https://play.google.com/";
  const urlBlog = "https://carbonyte.io/";

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
    setSettings((prev) => ({ ...prev, hideBalance: !prev.hideBalance }));
  };
  const toggleSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
    setSettings((prev) => ({ ...prev, contactAccess: !prev.contactAccess }));
  };
  const toggleSwitch3 = () => {
    setIsEnabled3((previousState) => !previousState);
    setSettings((prev) => ({
      ...prev,
      transactionSharing: !prev.transactionSharing,
    }));
  };

  const handlePress = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      return Linking.openURL(url);
    });
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
      <View>
        <View
          style={{
            width: "90%",
            backgroundColor: darkMode === "DARK" ? "transparent" : "white",
            height: "auto",
            borderRadius: 15,
            marginTop: "5%",
            marginLeft: "5%",
          }}
        >
          <BlurView style={{ borderRadius: 15 }}>
            <TouchableOpacity
              onPress={() =>
                navigateAlert(() =>
                  handlePress(Platform.OS === "ios" ? urlAppStore : urlAndroid)
                )
              }
            >
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={require("../assets/blueStar.png")}
                />
                <Text
                  style={
                    darkMode === "DARK" ? styles.darkiconText : styles.iconText
                  }
                >{`Rate us on the ${
                  Platform.OS === "ios" ? "App" : "Google Play"
                } Store`}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigateAlert(() => handlePress(urlImprove))}
            >
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={require("../assets/blueImprove.png")}
                />
                <Text
                  style={
                    darkMode === "DARK" ? styles.darkiconText : styles.iconText
                  }
                >
                  Tell us how to improve
                </Text>
              </View>
            </TouchableOpacity>
          </BlurView>
        </View>

        <View
          style={{
            width: "90%",
            backgroundColor: darkMode === "DARK" ? "transparent" : "white",
            height: "auto",
            borderRadius: 15,
            marginTop: "5%",
            marginLeft: "5%",
          }}
        >
          <BlurView style={{ borderRadius: 15 }}>
            <TouchableOpacity
              onPress={() => navigateAlert(() => handlePress(urlBlog))}
            >
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={require("../assets/blueBlog.png")}
                />
                <Text
                  style={
                    darkMode === "DARK" ? styles.darkiconText : styles.iconText
                  }
                >
                  Our blog
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateAlert(() => handlePress(urlTwitter))}
            >
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={require("../assets/blueTwitter.png")}
                />
                <Text
                  style={
                    darkMode === "DARK" ? styles.darkiconText : styles.iconText
                  }
                >
                  Follow us on Twitter
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateAlert(() => handlePress(urlFacebook))}
            >
              <View style={styles.row}>
                <Image
                  style={styles.icon}
                  resizeMode="contain"
                  source={require("../assets/blueFacebook.png")}
                />
                <Text
                  style={
                    darkMode === "DARK" ? styles.darkiconText : styles.iconText
                  }
                >
                  Like us on Facebook
                </Text>
              </View>
            </TouchableOpacity>
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

  row: {
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    flex: 2,
    resizeMode: "contain",
    height: "70%",
    width: "auto",
  },

  iconText: {
    flex: 8,
  },
  darkiconText: {
    flex: 8,
    color: GlobalStyles.Color.white,
  },
});

export default AboutUs;
