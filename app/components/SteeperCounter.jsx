import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const StepProgress = ({ currentStep }) => {
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
        style={[styles.viewProgress, currentStep > 1 && styles.activeStepProgress]}
      ></View>

      <TouchableOpacity
        style={[styles.step, currentStep >= 2 && styles.activeStep]}
        onPress={() => handleStepPress(2)}
      >
        <Text
          style={[styles.stepText, currentStep >= 2 && styles.activeStepText]}
        >
          2
        </Text>
      </TouchableOpacity>
      <View
        style={[
          styles.viewProgress,
          currentStep > 2 && styles.activeStepProgress,
        ]}
      />

      <TouchableOpacity
        style={[styles.step, currentStep >= 3 && styles.activeStep]}
        onPress={() => handleStepPress(3)}
      >
        <Text
          style={[styles.stepText, currentStep >= 3 && styles.activeStepText]}
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
    marginVertical: 20,
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
  stepText: {
    textAlign: "center",
  },
  activeStep: {
    backgroundColor: "#212529",
  },
  activeStepText: {
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
});

export default StepProgress;
