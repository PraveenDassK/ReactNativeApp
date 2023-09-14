import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import apiReferral from "../api/apiReferral";

const VerifyReferralCode = () => {
    const [code, setCode] = useState("");

    // Function to handle onBlur event
    const handleBlur = async() => {
        const referralCheck = await apiReferral.getVerifyReferralCode(code)
        console.log(referralCheck)
    };

    return (
        <View style={styles.container}>
            <Text>Referral code</Text>
            <TextInput
                value={code}
                keyboardType="numeric"
                onChangeText={(text) => setCode(text.replace(/^£/, ""))}
                onBlur={handleBlur} // Call handleBlur when the TextInput loses focus
                style={[styles.childBorder, { padding: 10 }]}
            />
        </View>
    );
};

export default VerifyReferralCode;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
        paddingVertical: 20,
    },
    sendButton: {
        height: 60,
        width: "50%",
        backgroundColor: GlobalStyles.Color.lightBlack,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
    },
    sendButtonText: {
        color: GlobalStyles.Color.white,
        fontSize: 16,
        fontFamily: "Montserrat-Medium",
    },
    childBorder: {
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "#D3D3D3",
        opacity: 1,
        height: 50,
        marginTop: "2.5%",
        marginBottom: "5%",
    },
});
