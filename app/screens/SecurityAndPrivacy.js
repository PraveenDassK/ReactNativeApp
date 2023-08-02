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
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import Button from "../components/AppButton";

const SecurityAndPrivacy = ({ navigation }) => {
  const [assets, error] = useAssets([
    require("../assets/icon-faceid.png"),
    require("../assets/icon-view.png"),
    require("../assets/blueMessage.png"),
  ]);

  const { setIsAuth, settings, setSettings } = useContext(AuthContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  

  useEffect(() => {
    restoreSignIn();
  }, []);

  // useEffect(() => {
  //   if (isEnabled === true) {
  //     authStorage.storeSignInSetting(
  //       JSON.stringify({ signedIn: `${isEnabled}` })
  //     );
  //     
  //     // potential authenticate()
  //   }
  //   if (isEnabled === false) {
  //     authStorage.storeSignInSetting(
  //       JSON.stringify({ signedIn: `${isEnabled}` })
  //     );
  //     
  //   }
  // }, []);

  const restoreSignIn = async () => {
    const token = await authStorage.getSignInSettings();
    if (!token) return;
    
    // setIsEnabled(token.includes("true"));
  };

  //Setts the settings when coming ot the page
  useEffect(() => {
    setToggles();
  }, []);

  const setToggles = () => {
    
    settings.hideBalance ? setIsEnabled1(true) : null;
    settings.contactAccess ? setIsEnabled3(true) : null;
    settings.transactionSharing ? setIsEnabled2(true) : null;
    settings.faceId ? setIsEnabled(true) : null;
  };

  const toggleSwitch = () => {
    if(!isEnabled){
      setIsEnabled(true);

    }else{
      setIsEnabled(false);

    }
    // setIsEnabled((previousState) => !previousState);

    setSettings((prev) => ({ ...prev, faceId: !prev.faceId }));
  };
  const toggleSwitch1 = () => {
    if(!isEnabled1){
      setIsEnabled1(true);

    }else{
      setIsEnabled1(false);

    }
    // setIsEnabled1((previousState) => !previousState);
    setSettings((prev) => ({ ...prev, hideBalance: !prev.hideBalance }));
  };
  const toggleSwitch2 = () => {
    if(!isEnabled2){
      setIsEnabled2(true);

    }else{
      setIsEnabled2(false);

    }
    // setIsEnabled2((previousState) => !previousState);
    setSettings((prev) => ({ ...prev, transactionSharing: !prev.transactionSharing }));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleTextRow}>
        <View style={styles.divRow}>
          <Image
            style={styles.icon}
            source={require("../assets/icon-faceid.png")}
          />

          <Text style={styles.divText}>Sign in with Face ID</Text>

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

          <Text style={styles.divText}>Hide Balances</Text>

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

          <Text style={styles.divText}>Allow transaction sharing</Text>

          <Switch
            style={[styles.groupChildPosition]}
            trackColor={{
              false: GlobalStyles.Color.gray_600,
              true: GlobalStyles.Color.blue_100,
            }}
            thumbColor={isEnabled2 ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
      </View>

      <View style={{ paddingHorizontal: "5%", marginBottom: "10%" }}>
        <Button
          title="Reset app passcode"
          style={styles.boxShadow}
          transform={{ textTransform: "none" }}
          onPress={() => navigation.navigate("PinSetApp")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
    justifyContent: "space-between",
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
    backgroundColor: "white",
    flexDirection: "row",
    height: 50,
    borderRadius: 15,
    marginTop: "5%",
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
  },
});

export default SecurityAndPrivacy;
