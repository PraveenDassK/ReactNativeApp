import apiVersion from "../api/apiVersion";
import {
    Alert, Linking
} from "react-native";
async function compareVersion(currentVersion) {
    const latestVersion = await apiVersion.GetVersion()
    if (currentVersion == latestVersion) return;
    const url = 'https://play.google.com/apps/internaltest/4699808328535823531'
    Alert.alert("Update", "New version avalible, please update your app", [
        {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
        },
        {
            text: "Upgrade",
            onPress: () => {
                Linking.canOpenURL(url).then((supported) => {
                    return Linking.openURL(url);
                })
            },
            style: "cancel",
        }
    ]);
}

export default {
    compareVersion
}