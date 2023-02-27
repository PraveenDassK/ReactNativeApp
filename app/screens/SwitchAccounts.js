import React, { useEffect, useState, useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView,Modal } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/Button";

import apiCall from "../api/api"
import AuthContext from "../auth/context";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

const SwitchAccounts = ({navigation,route}) => {
    const [userData, setUserData] = useState([])
    const authContext = useContext(AuthContext)
    
  //Calls the API once during load
  useEffect(() => {
    loadData();
  }, []);

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
                    onPress={() => switchAccount(element.id)}
                >
                    <View style = {styles.benBoxCon}>
                        <View style={styles.accountTextDiv}>
                            <Text style={styles.accountName}>{element.id}</Text>
                        </View>
                    </View>
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
        navigation.navigate("Account")
    }

    return (
        <View style={styles.page}>
            {/* <View style={styles.titleTextRow}>
                <Text style={styles.titleText}>Switch Account</Text>
            </View>             */}
            
            <View style={styles.subTextDiv}>
                <Text style={styles.subText}>Current Account: {authContext.accountID}</Text>
            </View>


            <View style={styles.subTextDiv}>
                <Text style={styles.subText}>Accounts:</Text>
            </View>

            {showUserAccounts()}
            <Button title="Return" onPress={() => navigation.navigate("Account")} />
        </View>
    )
};

const styles = StyleSheet.create({
    accountName: {
        fontSize: 14,
        fontWeight: "700"
      },
    accountTextDiv: {
        flex: 6,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      
        },
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
    },
    benBoxCon: {
        marginTop: "2.5%",
        width: "80%",
        marginLeft: "10%",
        backgroundColor: "#F6F5F8",
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: "space-around",
        height: verticalScale(65)
    },
    subTextDiv: {
        width: "80%",
        marginLeft: "10%",
        marginTop: "2.5%",
    
      },
    
      subText: {
        fontSize: 14,
        color: "rgba(153, 153, 153, 0.75)"
      },

      titleTextRow: {
        marginTop: GlobalStyles.Title.marginTop,
        marginLeft: GlobalStyles.Title.marginLeft,
        width: GlobalStyles.Title.width,
      },
    
      titleText: {
        fontSize: GlobalStyles.Title.fontSize,
        fontWeight: GlobalStyles.Title.fontWeight,
      },
});

export default SwitchAccounts;
