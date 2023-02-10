import React, { useEffect, useState, useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView,Modal } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/Button";

import apiCall from "../api/api"
import AuthContext from "../auth/context";

const SwitchAccounts = ({navigation,route}) => {
    const [userData, setUserData] = useState([])
    const authContext = useContext(AuthContext)
    
    //Calls the API once during load
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus',  () => {
            loadData()
        })
    },[])

    const loadData = async () => {
        const response = await apiCall.GetCustomersAccounts(authContext.userID);
        const data = response.content
        console.log(data)
        setUserData(data)
    }

    const showUserAccounts = () => {
        console.log(userData)

        let accounts = []
        userData.forEach((element,i) => {
            accounts.push(
                <Pressable 
                    key={i} 
                    style={styles.accountContainter} 
                    onPress={() => switchAccount(element.id)}
                >
                    <Text>
                        {element.id}
                    </Text>
                </Pressable>
            )
        })
        return(
            <View>
                {accounts}
            </View>
        )
    }

    const switchAccount = (Id) => {
        console.log("Switch to " +Id)
        authContext.setAccountID(Id)
    }

    return (
        <View style={styles.page}>
            <Text>Current Account</Text>
            <Text>{authContext.accountID}</Text>
            <Text>Switch Accounts</Text>
            {showUserAccounts()}
            <Button title="continue" onPress={() => navigation.navigate("Account")} />
        </View>
    )
};

const styles = StyleSheet.create({
    page:{
        width:"80%",
        left:"10%",
        marginTop:"2.5%",
    },
    accountContainter:{
        width:"100%",
        height:"20%",
        backgroundColor:"white",
        borderRadius:20,
        marginTop:"2.5%",
        padding:"2%",
    }
});

export default SwitchAccounts;
