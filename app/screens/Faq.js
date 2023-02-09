import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, Pressable, Switch, Button } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage"

const Faq = ({navigation}) => {

  return (
    <View style={styles.mainContainer}>
        <View style={styles.titleTextRow}>
            <Text style={styles.titleText}>Frequently Asked Questions</Text>
        </View>

        <View style={styles.subTextRow}>
            <Text style={styles.subText}>Added the trees you earned by buying your Elite Carbonyte card.</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({

mainContainer: {
        backgroundColor:  GlobalStyles.DivContainer.backgroundColor,
        height: GlobalStyles.DivContainer.height,
        width: "100%",
        flex: GlobalStyles.DivContainer.flex,
    },

    titleTextRow: {
        marginTop: GlobalStyles.Title.marginTop,
        width: GlobalStyles.DivContainer.width,
            marginLeft: GlobalStyles.DivContainer.marginLeft,
    },

    titleText: {
        fontSize: GlobalStyles.Title.fontSize,
        fontWeight: GlobalStyles.Title.fontWeight,
    },

    subText: {
        fontSize: GlobalStyles.RowText.fontSize,
        fontWeight: GlobalStyles.RowText.fontWeight,
    },

    subTextRow: {
        marginTop: GlobalStyles.RowText.marginTop,
        width: GlobalStyles.DivContainer.width,
            marginLeft: GlobalStyles.DivContainer.marginLeft,
        fontColor: GlobalStyles.RowText.fontColor,
    },});

export default Faq;
