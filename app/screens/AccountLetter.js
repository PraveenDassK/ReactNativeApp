import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Screen from "../components/Screen";
import api from "../api/api_list"
import apiCall from "../api/api"
import AuthContext from "../auth/context";


const AccountLetter = ({navigation}) => {
    const [email, setemail] = useState(null);
    const authContext = useContext(AuthContext);
    useEffect(() => {
        loadData()
      },[])
      const loadData = async () => {
        const customer = await api.GetCustomer(authContext.userID)
        const data = customer.data.details
        setemail(data.associates[0].email)
      }    
  return (
    <View style={styles.mainContainer}>
        <View style={styles.titleTextRow}>
            <Text style={styles.titleText}>Account verification letter</Text>
        </View>

        <View style={styles.subTextRow}>
            <Text style={styles.subText}>
            Please click on the button below to resend your account verification letter
            </Text>
        </View>

        <View style={{width: "90%", backgroundColor: "white", height: 400, borderRadius: 15, marginLeft: "5%", marginTop: "5%"}}>
        <Image style={{height: "20%", width: "auto", resizeMode: "contain", marginTop: "15%"}}source={require("../assets/icon-zocialemail.png")} />
        <View style={{justifyContent: "space-between", alignItems: "center", height: "50%", marginTop: "5%"}}>
        <Text>Yay! your details has been verified</Text>
        <Text>We sent a confirmation email to</Text>
        <Text style={{fontWeight: "700"}}>{email}</Text>
        <Text style={{textAlign: "center", padding: "2.5%"}}>Please check your email and click on confirmation link to continue.</Text>
        <Text style={{bottom: 0}}>Resend Emails</Text>
        </View>



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
    },

});

export default AccountLetter;
