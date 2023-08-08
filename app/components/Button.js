import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import * as Device from "expo-device";
import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  color = "black",
  style,
  textColor,
  transform,
}) {
  const { height, width } = useWindowDimensions();
  const [device, setDevice] = useState("");
  const smallDevice = { height: 650 };
  useEffect(() => {
    const deviceType = async () => {
      const deviceSize = await Device.getDeviceTypeAsync();

      setDevice(deviceSize);
    };
    deviceType();
  }, [height, width]);
  const isSmallDevice = height < smallDevice.height;
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={[isSmallDevice ? styles.smallText : styles.text, transform]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "100%",
    height: 70,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  smallText: {
    color: colors.white,
    fontSize: 10,
    textTransform: "uppercase",
    fontWeight: "700",
  },
});

export default AppButton;
