import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";


 const DoughnutChart =({data}) => {
  
  return <VictoryPie
  
  style={{ labels: { fill: "black" } }}
  colorScale={["tomato", "orange", "gold", "cyan", "green" ]}
          
          innerRadius={110}
          labelRadius={130}
          
          padAngle={1}
          labels={({ datum }) => `${datum.x[0]}`}
          cornerRadius={80}
          data={data}
/>
    }
export default DoughnutChart