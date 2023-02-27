import React from "react";
import { LineChart, BarChart } from "react-native-chart-kit";

import { Dimensions, Text, View } from "react-native";

function ChartComponent(props) {
  return (

      <View
        style={{
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
      
       {
        props.type ==="line" &&  <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#000",
            backgroundGradientFrom: "#000",
            backgroundGradientTo: "#444",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 4,
              paddingHorizontal: 0,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "0",
              stroke: "#000",
            },
          }}
          bezier
          style={{
            marginVertical: 0,
            borderRadius: 4,
          }}
        />
       }
        {
        props.type ==="bar" &&  <BarChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#000",
            backgroundGradientFrom: "#000",
            backgroundGradientTo: "#444",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 4,
              paddingHorizontal: 0,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "0",
              stroke: "#000",
            },
          }}
          bezier
          style={{
            marginVertical: 0,
            borderRadius: 4,
          }}
        />
       }
      </View>

  );
}

export default ChartComponent;
