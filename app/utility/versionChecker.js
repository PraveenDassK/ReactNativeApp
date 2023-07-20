import apiVersion from "../api/apiVersion";
import {
    Alert, Linking, Platform
} from "react-native";
async function compareVersion(currentVersion) {
    const latestVersion = await apiVersion.GetVersion()
    if (currentVersion == latestVersion) return;

    const urlAndroid = 'https://play.google.com/apps/internaltest/4699808328535823531'
    const urlIOS = 'https://play.google.com/apps/internaltest/4699808328535823531'


    Alert.alert("Update", "New version available, please update your app", [
        {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
        },
        {
            text: "Upgrade",
            onPress: () => {
                Linking.canOpenURL(url).then((supported) => {
                    return Linking.openURL(Platform.OS === "ios" ? urlIOS : urlAndroid);
                    
                })
            },
            style: "cancel",
        }
    ]);
}

export default {
    compareVersion
}