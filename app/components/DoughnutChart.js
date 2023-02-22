import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";


 const DoughnutChart =() => {

  return <VictoryPie
  
  style={{ labels: { fill: "black" } }}
  colorScale={["tomato", "orange", "gold", "cyan", "green" ]}
          
          innerRadius={110}
          labelRadius={120}
          
          padAngle={1}
          labels={({ datum }) => `# ${datum.y}`}
          cornerRadius={80}
          data={[
            { x: 1, y: 5, label: "H" },
            { x: 2, y: 4, label: "F & B"},
            { x: 3, y: 2, label: "S" },
            { x: 4, y: 3, label: "T" },
            { x: 5, y: 1, label: "O" }
          ]}
/>
    }
export default DoughnutChart