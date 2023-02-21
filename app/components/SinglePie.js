import React from 'react'
import { StyleSheet, View } from "react-native";
import { Svg } from 'react-native-svg';
import { VictoryPie, VictoryLabel, VictoryTheme } from "victory-native";

const SinglePie = ({ percent}) => {
    console.log('single',percent)
    return  <VictoryPie 
  
    style={{ labels: { fill: "black" } }}
    colorScale={[ "grey", "red" ]}
            innerRadius={100}
            labelRadius={120}
            padding={7}
            padAngle={0 }
            labels={({ datum }) => datum.y && (datum.x === 2) <= 0 ? null:`${ datum.y * 100}%`}
            cornerRadius={60}
            startAngle={140}
  endAngle={-140}
            data={[
                { x: 1, y: 1 - percent, },
                { x: 2, y: percent, },
             
            ]}
            width={380} height={300}
  />

}


export default SinglePie