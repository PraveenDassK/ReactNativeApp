import React, {
  useEffect,
  useState,
  useContext,
  Fragment,
  useCallback,
} from "react";
import {
  RefreshControl,
  FlatList,
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  ScrollView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import GlobalStyles from "../../GlobalStyles";

import Button from "../components/AppButton";
import colors from "../config/colors";

import apiDevices from "../api/apiDevices";
import AuthContext from "../auth/context";

const DEVICES = ["cellphone", "tablet-android"];
const COLORS = ["orange", "blue", "red"];

const Devices = ({ navigation }) => {
  const { customerDetails, } = useContext(AuthContext);
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

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
    console.log("request");

    const resDevices = request?.details;

    setDevices(resDevices);
    setIsLoading(false);
  };

  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid
  ) => {
    if (Platform.OS === "ios") {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: { width: xOffset, height: yOffset },
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === "android") {
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

  generateBoxShadowStyle(-2, 4, "#171717", 0.2, 3, 4, "#171717");

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

    const signedOut = await apiDevices.DeleteDevice(customerDetails, deviceId)
    if (!signedOut) {
      alert("Sign out failed")
      setDevices(oldDevices)}
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
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
            name="security"
            color={colors.babyBlue}
            size={60}
          />
        </View>
        <View style={styles.headerItem}>
          <Text style={[styles.headerText, styles.headerTitle]}>
            Manage access and devices
          </Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.headerText}>
            These signed in devices have recently been active on this account.
            You can sign out any unfamiliar devices or change your password for
            added security
          </Text>
        </View>
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
                />
              </Fragment>
            );
          })}
      </View>
    </ScrollView>
  );
};

const Device = ({ name, os, date, index, onSignout }) => {
  return (
    <View style={[styles.deviceContainer, styles.boxShadow]}>
      <View style={styles.deviceItemContainer}>
        <MaterialCommunityIcons name={DEVICES[0]} size={18} />
        <View style={styles.deviceTextContainer}>
          <Text style={styles.deviceHeaderText}>
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
          <Text>{name} (Device name) </Text>
        </View>
      </View>
      <View style={styles.deviceItemContainer}>
        <MaterialCommunityIcons name="clock-time-nine-outline" />
        <View style={styles.deviceTextContainer}>
          <Text>{date} </Text>
        </View>
      </View>
      <View style={styles.deviceItemContainer}>
        <Button
          title="Sign out"
          textColor="black"
          onPress={() => onSignout(index)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxShadow: {},
  container: {
    flex: 1,
    padding: "5%",
  },
  deviceContainer: {
    borderRadius: 10,
    backgroundColor: "white",
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
  deviceTextContainer: {
    marginLeft: "2%",
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainContainer: {
    flex: 3,
  },
});

export default Devices;
