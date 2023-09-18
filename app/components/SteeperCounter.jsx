import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
const height = Dimensions.get("window").height;
const smallDevice = { height: 650 };
const isSmallDevice = height < smallDevice.height;
const StepProgress = ({ currentStep, darkMode }) => {
  //   const [currentStep, setCurrentStep] = useState(1);

  const handleStepPress = (step) => {
    currentStep;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.step, currentStep >= 1 && styles.activeStep]}
        onPress={() => handleStepPress(1)}
      >
        <Text
          style={[styles.stepText, currentStep >= 1 && styles.activeStepText]}
        >
          1
        </Text>
      </TouchableOpacity>
      <View
        style={[
          styles.viewProgress,
          currentStep > 1 && darkMode === "DARK"
            ? styles.darkactiveStepProgress
            : styles.activeStepProgress,
        ]}
      ></View>

      <TouchableOpacity
        style={[
          darkMode === "DARK" ? styles.darkstep : styles.step,
          currentStep >= 2 && styles.activeStep,
        ]}
        onPress={() => handleStepPress(2)}
      >
        <Text
          style={[
            darkMode === "DARK" ? styles.darkstepText : styles.stepText,
            currentStep >= 2 && styles.activeStepText,
          ]}
        >
          2
        </Text>
      </TouchableOpacity>
      <View
        style={[
          styles.viewProgress,
          currentStep > 1 && darkMode === "DARK"
            ? styles.darkactiveStepProgress
            : styles.activeStepProgress,
        ]}
      />

      <TouchableOpacity
        style={[
          darkMode === "DARK" ? styles.darkstep : styles.step,
          currentStep >= 3 && styles.activeStep,
        ]}
        onPress={() => handleStepPress(3)}
      >
        <Text
          style={[
            darkMode === "DARK" ? styles.darkstepText : styles.stepText,
            currentStep >= 3 && styles.activeStepText,
          ]}
        >
          3
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: isSmallDevice ? 10 : 20,
    marginHorizontal: 50,
  },
  step: {
    backgroundColor: "#ddd",
    borderRadius: 15,
    height: 30,
    width: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  darkstep: {
    backgroundColor: "black",
    borderColor: GlobalStyles.Color.gray_1000,
    borderWidth: 1,
    borderRadius: 15,
    height: 30,
    width: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stepText: {
    textAlign: "center",
  },
  darkstepText: {
    textAlign: "center",
    color: GlobalStyles.Color.gray_1000,
  },
  activeStep: {
    backgroundColor: "#212529",
  },
  darkactiveStep: {
    backgroundColor: "#212529",
  },
  activeStepText: {
    color: "#fff",
  },
  darkactiveStepText: {
    color: "#fff",
  },
  viewProgress: {
    borderWidth: 2,
    width: 100,
    height: 0,
    top: "4%",
    borderColor: "white",
  },
  activeStepProgress: {
    borderColor: "black",
    borderWidth: 2,
    width: 100,
    height: 0,
    top: "4%",
  },
  darkactiveStepProgress: {
    borderColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    borderWidth: 2,
    width: 100,
    height: 0,
    top: "4%",
  },
});

export default StepProgress;
