import React, { useEffect, useState } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";
import * as Device from "expo-device";

const DoughnutChart = ({ data, children }) => {
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
    <View>
      <VictoryPie
        style={{ labels: { fill: "black" } }}
        colorScale={["tomato", "orange", "gold", "cyan", "green"]}
        innerRadius={device == 1 ? 120 : 300}
        labelRadius={device == 1 ? (isSmallDevice ? 126 : 132) : 320}
        padAngle={1}
        // labels={({ datum }) => `${datum.x[0]}`}
        labels={({ datum }) => `${datum.x[0]}`}
        cornerRadius={80}
        data={data}
      />
      <View
        style={{
          position: "absolute",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 28,
          bottom: "40%",
          left: device == 1 ? "20%" : "35%",
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default DoughnutChart;
