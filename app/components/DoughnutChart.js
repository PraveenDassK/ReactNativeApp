import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";





 const DoughnutChart =() => {



  return <VictoryPie
  
  style={{ labels: { fill: "black" } }}
  colorScale={["tomato", "orange", "gold", "cyan", "green" ]}
          
          innerRadius={100}
          labelRadius={120}
          
          padAngle={3}
          labels={({ datum }) => `# ${datum.y}`}
          cornerRadius={10}
          data={[
            { x: 1, y: 5, label: "Health" },
            { x: 2, y: 4, label: "Food & Beverages"},
            { x: 3, y: 2, label: "Shopping" },
            { x: 4, y: 3, label: "Transport" },
            { x: 5, y: 1, label: "Other" }
          ]}
/>
    }
export default DoughnutChart