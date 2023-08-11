import React, {
  useEffect,
  useState,
  useContext,
  Fragment,
  useCallback,
} from "react";
import {
  RefreshControl,
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Switch,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/AppButton";
import { BlurView } from "expo-blur";
import apiDevices from "../api/apiDevices";
import AuthContext from "../auth/context";
import AppSwitch from "../components/AppSwitch";
import { LinearGradient } from "expo-linear-gradient";
import LinearAccountButton from "../components/LinearAccountButton";
const DEVICES = ["cellphone", "tablet-android"];
const COLORS = ["orange", "blue", "red"];

const Devices = ({ navigation }) => {
  const { customerDetails, darkMode } = useContext(AuthContext);
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);
  const [isTextEnabled, setIsTextEnabled] = useState(false);
  const [isSocialMediaEnabled, setIsSocialEnabled] = useState(false);

  const NOTIFICATIONS = [
    {
      id: 1,
      title: "Push Notifications",
      value: isPushEnabled,
      toggleSwitch: () => setIsPushEnabled((previousState) => !previousState),
    },
    {
      id: 2,
      title: "Email",
      value: isEmailEnabled,
      toggleSwitch: () => setIsEmailEnabled((previousState) => !previousState),
    },
    {
      id: 3,
      title: "Text",
      value: isTextEnabled,
      toggleSwitch: () => setIsTextEnabled((previousState) => !previousState),
    },
    {
      id: 4,
      title: "Social media",
      value: isSocialMediaEnabled,
      toggleSwitch: () => setIsSocialEnabled((previousState) => !previousState),
    },
  ];

  useEffect(() => {
    loadData();
  }, [customerDetails]);

  /**
   * @dev Loads the device data into devices
   * @returns Null if no customer details are present
   *          The return should only be for devlopment only
   */
  const loadData = async () => {
    setIsLoading(true);
    if (!customerDetails) return;
    const request = await apiDevices.GetDevices(customerDetails);

    const resDevices = request?.details;

    setDevices(resDevices);
    setIsLoading(false);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      loadData();
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  const handleSignout = async (deviceIndex, deviceId) => {
    const oldDevices = devices;
    setDevices(
      devices.filter((device, index) => {
        return index !== deviceIndex;
      })
    );

    // apiSignout if not setDevices to the old devices

    const signedOut = await apiDevices.DeleteDevice(customerDetails, deviceId);
    if (!signedOut) {
      alert("Sign out failed");
      setDevices(oldDevices);
    }
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : null,
        }}
      >
        <ActivityIndicator
          size="large"
          color={
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.black
          }
        />
      </View>
    );
  }

  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/backgrounds/profilepage/Devices-dark.png")
          : require("../assets/backgrounds/profilepage/Devices-white.png")
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
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.headerContainer}>
          <View style={styles.headerItem}>
            <MaterialCommunityIcons
              name="cellphone-information"
              color="blue"
              size={60}
            />
          </View>
          <View style={styles.headerItem}>
            <Text
              style={[
                darkMode === "DARK" ? styles.darkheaderText : styles.headerText,
                styles.headerTitle,
              ]}
            >
              Manage access and devices
            </Text>
          </View>
          <View style={styles.headerItem}>
            <Text
              style={
                darkMode === "DARK" ? styles.darkheaderText : styles.headerText
              }
            >
              These signed in devices have recently been active on this account.
              You can sign out any unfamiliar devices or change your password
              for added security
            </Text>
          </View>
        </View>
        <View style={styles.containerHeader}>
          <Text
            style={
              darkMode === "DARK" ? styles.darkheaderText : styles.headerText
            }
          >
            Signed-in devices
          </Text>
        </View>
        <View style={styles.mainContainer}>
          {devices &&
            devices.map((device, index) => {
              return (
                <Fragment key={device.deviceId}>
                  <Device
                    name={device.deviceName}
                    os={device.operatingSystem}
                    date={device.createdDate}
                    index={index}
                    onSignout={(index) => handleSignout(index, device.deviceId)}
                    darkMode={darkMode}
                  />
                </Fragment>
              );
            })}
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.containerHeader}>
            <Text>Notifications</Text>
          </View>
          <BlurView
            style={
              darkMode === "DARK"
                ? styles.darkdeviceContainer
                : styles.deviceContainer
            }
          >
            {NOTIFICATIONS.map((notification) => (
              <View key={notification.id} style={{ marginBottom: "2%" }}>
                <AppSwitch
                  title={notification.title}
                  onValueChange={notification.toggleSwitch}
                  value={notification.value}
                  darkMode={darkMode}
                />
              </View>
            ))}
          </BlurView>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </ImageBackground>
  );
};

const Device = ({ name, os, date, index, onSignout, darkMode }) => {
  return (
    // <View
    //   style={[
    //     darkMode === "DARK"
    //       ? styles.darkdeviceContainer
    //       : styles.deviceContainer,
    //   ]}
    // >
    <BlurView
      style={
        darkMode === "DARK"
          ? styles.darkdeviceContainer
          : styles.deviceContainer
      }
    >
      <View style={styles.deviceItemContainer}>
        <MaterialCommunityIcons
          name={DEVICES[0]}
          size={18}
          color={
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.secondaryDarkTheme_bg
          }
        />
        <View style={styles.deviceTextContainer}>
          <Text
            style={{
              fontFamily: "Montserrat-SemiBold",
              fontSize: 14,
              color:
                darkMode === "DARK"
                  ? GlobalStyles.Color.white
                  : GlobalStyles.Color.secondaryDarkTheme_bg,
            }}
          >
            {os !== "Android" ? "Apple iPhone" : "Android Phone"}{" "}
          </Text>
        </View>
      </View>
      <View style={styles.deviceItemContainer}>
        <MaterialCommunityIcons
          name="login"
          color={COLORS[index % COLORS.length]}
        />
        <View style={styles.deviceTextContainer}>
          <Text
            style={{
              fontFamily: "Montserrat-SemiBold",
              fontSize: 14,
              color:
                darkMode === "DARK"
                  ? GlobalStyles.Color.white
                  : GlobalStyles.Color.secondaryDarkTheme_bg,
            }}
          >
            {name} (Device name){" "}
          </Text>
        </View>
      </View>
      <View style={styles.deviceItemContainer}>
        <MaterialCommunityIcons
          name="clock-time-nine-outline"
          color={
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.secondaryDarkTheme_bg
          }
        />
        <View style={styles.deviceTextContainer}>
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              fontSize: 12,
              color:
                darkMode === "DARK"
                  ? GlobalStyles.Color.darkGray
                  : GlobalStyles.Color.darkGray,
            }}
          >
            {date}{" "}
          </Text>
        </View>
      </View>
      <View style={styles.deviceItemContainer1}>
        <LinearAccountButton
          title="Sign out"
          onPress={() => onSignout(index)}
          darkMode={darkMode}
        />
      </View>
    </BlurView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
  },
  containerHeader: {
    marginBottom: "2%",
  },
  deviceContainer: {
    borderRadius: 10,
    backgroundColor: "white",
    padding: "4%",
    width: "100%",
    marginBottom: "4%",
  },
  darkdeviceContainer: {
    borderRadius: 10,
    backgroundColor: "transparent",
    padding: "4%",
    width: "100%",
    marginBottom: "4%",
  },
  deviceHeaderText: {
    fontSize: 18,
    fontWeight: "500",
  },
  deviceItemContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "4%",
  },
  deviceItemContainer1: {
    marginVertical: "4%",
  },
  deviceTextContainer: {
    marginLeft: "2%",
  },
  darkdeviceTextContainer: {
    marginLeft: "2%",
    color: GlobalStyles.Color.white,
  },
  footerContainer: {
    marginBottom: "15%",
  },
  headerContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginBottom: "4%",
  },
  headerItem: {
    marginBottom: 10,
  },
  headerText: {
    textAlign: "center",
  },
  darkheaderText: {
    textAlign: "center",
    color: GlobalStyles.Color.white,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  darkheaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalStyles.Color.white,
  },
  mainContainer: {
    flex: 3,
  },
});

export default Devices;
