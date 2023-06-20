import { useEffect, useState } from "react";
import * as Device from "expo-device";
import { useWindowDimensions } from "react-native";



const useDevice = () => {
    const { height, width } = useWindowDimensions();
  const [device, setDevice] = useState("");

  useEffect(() => {
    const deviceType = async () => {
      const deviceSize = await Device.getDeviceTypeAsync();
      console.log("DeviceSize", deviceSize);
      setDevice(deviceSize);
    };
    deviceType();
  }, [height, width]);

  return {device };
};

export default useDevice;
