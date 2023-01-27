import React, { useContext, useEffect, useState, Keyboard } from "react";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import {Text, StyleSheet, Image, View, TextInput, Pressable, TouchableOpacity, ScrollView} from "react-native";
import Screen from "../components/Screen";

import * as Yup from 'yup';
import Button from "../components/Button"
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import Form from "../components/forms/Form";


const VirtualEcoSystem = () => {
return (
        <Screen>
            <ScrollView>


<View style={styles.mainContainer}>
    <View style={styles.NavBarTop}>

        <Text style={styles.navBarTopText, styles.blueOverwrite}>Personal</Text>
        <Text style={styles.navBarTopText}>Business</Text>

    </View>

    <View style={styles.lineSeparatorDiv}>

        <View style={styles.blueLine}></View>
        <View style={styles.blackLine}></View>

    </View>

    <View style={styles.NavBarBottom}>
        <Text style={styles.NavBarBottomText}>Account</Text>
        <Text style={styles.NavBarBottomText}>Analysis</Text>
        <Text style={styles.NavBarBottomText}>Carbon</Text>
        <Text style={styles.NavBarBottomText}>Profile</Text>
    </View>

    <View style={styles.divContainer}>
        <View style={styles.congratulationsContainer}>

            <View style={styles.progressDiv}>
                <Image style={styles.progressIcon} resizeMode="contain" source={require("../assets/blueCircle.png")} />

            </View>

            <View style={styles.congratulationsDiv}>

                <Text style={styles.congratulationsText}>Congratulations!</Text>
                <Text style={styles.congratulationsSubText}>You are almost ready with your account, Avail more benefits by choosing our card plans</Text>
                <Text style={styles.applyNowText}>Apply Now</Text>

            </View>

        </View>

        <View style={styles.totalWalletBalanceContainer}>

                <Text style={styles.totalWalletBalanceText}>Total Wallet Balance</Text>
                <Text style={styles.BalanceText}>£0.00</Text>
                <Text style={styles.dateText}>July 19, 2022</Text>

        </View>

        <View style={styles.buttonContainer}>

                    <View style={styles.inputBox}>
                        <View style={styles.inputBoxDiv}>
                            <Image style={styles.inputIcon} resizeMode="contain" source={require("../assets/add.png")}/>
                            <Text style={styles.inputBoxText}>Add Funds</Text>
                        </View>
                    </View>
                    <View style={styles.inputBox}>
                        <View style={styles.inputBoxDiv}>
                            <Image style={styles.inputIcon} resizeMode="contain" source={require("../assets/send-1.png")}/>
                            <Text style={styles.inputBoxText}>Send Money</Text>
                        </View>
                    </View>
                    <View style={styles.inputBox}>
                        <View style={styles.inputBoxDiv}>
                            <Image style={styles.inputIcon} resizeMode="contain" source={require("../assets/blueCardIcon.png")}/>
                            <Text style={styles.inputBoxText}>My Cards</Text>
                        </View>
                    </View>
        </View>



    </View>

     <View style={styles.carbonSpendingDiv}>
                <View style={styles.carbonSpendingTitleDiv}>
                        <Image style={styles.carbonIcon} source={require("../assets/blackco2icon.png")}/>
                        <Text style={styles.carbonSpendingText}>Carbon Spending</Text>
                </View>

                <View style={styles.carbonItemDiv}>
                <Text>1</Text>
                            <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>5</Text>
                <Text>6</Text>
                <Text>7</Text>
                <Text>8</Text>
                <Text>9</Text>
                <Text>10</Text>

                </View>


            </View>



</View>
    </ScrollView>
    </Screen>

);};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "yellow",
        flex: GlobalStyles.DivContainer.flex,
    },

    NavBarTop: {
        marginTop: GlobalStyles.Title.marginTop,
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-around"
    },

    navBarTopText: {
        fontSize: GlobalStyles.NavBar.fontSize,
        fontWeight: GlobalStyles.NavBar.fontWeight,
        Color: GlobalStyles.NavBar.fontColor,
    },

    lineSeparatorDiv: {
    marginTop: "1.5%",
        flexDirection: 'row',
        width: "95%",
        justifyContent: "space-around",
        marginLeft: "2.5%"
    },

    blueLine: {
        height: 2.5,
        backgroundColor: "#0101FD",
        width: "50%",
        borderRadius: 25,
    },

    blackLine: {
        height: 2.5,
        backgroundColor: "#707070",
        width: "50%"
    },

    blueOverwrite: {
        color: "blue",
        fontWeight: "700",
    },

    NavBarBottom: {
        marginTop: "4%",
        flexDirection: 'row',
        width: "85%",
        justifyContent: "space-around",
        marginLeft: "7.5%"

    },

    NavBarBottomText: {
        fontSize: GlobalStyles.NavBarBottomText.fontSize,
        fontWeight: GlobalStyles.NavBarBottomText.fontWeight,
        Color: GlobalStyles.NavBarBottomText.fontColor,
    },


    DivContainer: {
        width: GlobalStyles.DivContainer.width,
        height: "100%",
        backgroundColor: "red"
    },

    congratulationsContainer: {
        marginTop: "4.5%",
        width: "80%",
        backgroundColor: "#E4E4FF",
        height: "25%",
        marginLeft: "10%",
        borderRadius: 15,
        flexDirection: 'row',
        padding: "2.5%",
    },

    progressDiv: {
        flex: 3.75,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

    },

    congratulationsDiv: {
        flex: 6.25,
        justifyContent: "center"
    },

    progressIcon: {
        height: "100%",
        width: 75,
        justifyContent: "center"
    },

    congratulationsText: {
        fontSize: 14,
        fontWeight: "700"
    },

    congratulationsSubText: {
        marginTop: "2.5%",
        fontSize: 12,
        fontWeight: "400"

    },

    applyNowText: {
        marginTop: "2.5%",
        fontSize: 12,
        fontWeight: "400",
        color: "blue",
    },

    totalWalletBalanceContainer: {
        marginTop: "2.5%",
        width: "80%",
        backgroundColor: "#FFFFFF",
        height: verticalScale(75),
        marginLeft: "10%",
        borderRadius: 15,
        flexDirection: 'column',
        padding: "2.5%",
        justifyContent: "center"

    },

    totalWalletBalanceText: {
        textAlign: "center",
        fontSize: 14,
    },

    BalanceText: {
        fontSize: 26,
        textAlign: "center",
    },

    dateText: {
        textAlign: "center",
        fontSize: 14,
    },

    buttonContainer: {
        marginTop: "2.5%",
        width: GlobalStyles.DivContainer.width,
        marginLeft: GlobalStyles.RowText.marginLeft,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBox: {
        backgroundColor: "white",
        width: "32%",
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,

    },

    inputBoxDiv: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },

    inputIcon: {
        resizeMode: "contain",
        height: verticalScale(25)
    },

    inputBoxText: {
        fontSize: 10,
        textAlign: "center",
    },

    carbonSpendingDiv: {
        width: "80%",
        marginLeft: "10%",
        marginTop: "2.5%",
    },

    carbonIcon: {
        height: 25,
        width: 25,
        resizeMode: "contain",
    },

    carbonSpendingTitleDiv: {
        width: "100%",
        height: 30,
        display: 'flex',
        flexDirection: 'row',
    },

    carbonSpendingText: {
        top: 2,
        left: 10,
        fontSize: 18,
        fontWeight: "700",

    }




});

export default VirtualEcoSystem;