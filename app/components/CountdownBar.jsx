import React from "react";
import { View, StyleSheet } from "react-native";

import ButtonIcon from "./ButtonIcon";
import { addScreenshotListener } from "expo-screen-capture";

const CountdownBar = ({ pageCount = 3, currentPage = 1 }) => {
  const renderButtonIcons = () => {
    const buttonIcons = [];
    for (let i = 1; i <= pageCount; i++) {
      const isCurrentPage = i === currentPage;
      console.log(isCurrentPage);
      if (isCurrentPage) {
        buttonIcons.push(
          <ButtonIcon
            key={i}
            name={""}
            image={`numeric-${i}-circle`}
            onPress={() => console.log("!")}
            colour="light-grey"
          />
        );
      } else {
        buttonIcons.push(
          <ButtonIcon
            key={i}
            name={""}
            image={`numeric-${i}-circle-outline`}
            onPress={() => console.log("!")}
            colour="light-grey"
          />
        );
      }
    }

    return buttonIcons;
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>{renderButtonIcons()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default CountdownBar;
