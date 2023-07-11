import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Tagline = () => {
  return (
    <View style={[styles.container, { marginBottom: 200 }]}>
      <Text style={styles.bottomText}>
        Your <Text style={styles.bottomTextBold}> Money </Text>• Your{" "}
        <Text style={styles.bottomTextBold}>Planet</Text> • Your{" "}
        <Text style={styles.bottomTextBold}>Choice</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  bottomText: {
    color: "#212529",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    fontWeight: "light",
  },
  bottomTextBold: {
    color: "#212529",
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
});

export default Tagline;
