import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Tagline = () => {
    return (
        <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={styles.bottomText}>
                Your <Text style={styles.bottomTextBold}> Money </Text>• Your{" "}
                <Text style={styles.bottomTextBold}>Planet</Text> • Your{" "}
                <Text style={styles.bottomTextBold}>Choice</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomText: {
        color: "#212529",
        fontSize: 14,
        fontFamily: "Montserrat",
        fontWeight: "regular",
    },
    bottomTextBold: {
        color: "#212529",
        fontSize: 16,
        fontFamily: "Montserrat",
        fontWeight: "bold",
    },
});

export default Tagline;