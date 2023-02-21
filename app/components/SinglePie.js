import React from 'react'
import { StyleSheet, View } from "react-native";
import { Svg } from 'react-native-svg';
import { VictoryPie, VictoryLabel, VictoryTheme } from "victory-native";

const SinglePie = ({ percent}) => {
    console.log('single',percent)
    return  <VictoryPie 
  
    style={{ labels: { fill: "black" } }}
    colorScale={[ "#F8F8F8", "blue" ]}
            innerRadius={100}
            labelRadius={120}
            padding={7}
            padAngle={0 }
            labels={({ datum }) => ``}
            cornerRadius={60}
            startAngle={140}
  endAngle={-140}
            data={[
                { x: 1, y: percent > 1 ? 1 : 1 - percent, label: ""},
                { x: 2, y: percent > 1 ? 0 : percent, label:"" },
             
            ]}
            width={380} height={300}
  />

}


export default SinglePie