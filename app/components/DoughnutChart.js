import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";


 const DoughnutChart =() => {

  return <VictoryPie
  
  style={{ labels: { fill: "black" } }}
  colorScale={["tomato", "orange", "gold", "cyan", "green" ]}
          
          innerRadius={110}
          labelRadius={130}
          
          padAngle={1}
          labels={({ datum }) => `${datum.x}`}
          cornerRadius={80}
          data={[
            { x: "H", y: 5, },
            { x: "F", y: 4,},
            { x: "S", y: 2, },
            { x: "T", y: 3, },
            { x: "O", y: 1, }
          ]}
/>
    }
export default DoughnutChart