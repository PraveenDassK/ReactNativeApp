import React, { useContext, useEffect, useState, Keyboard } from "react";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import {Text, StyleSheet, Image, View, TextInput, Pressable, TouchableOpacity} from "react-native";
import * as Yup from 'yup';
import Button from "../components/Button"
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import Form from "../components/forms/Form";

import api from "../api/api_list";

const VirtualEcoSystem = ({navigation}) => {

    const [name, setName] = useState("Your forest")
    const authContext = useContext(AuthContext)

    const [forestValue, setTrees] = useState("0");

    const treeImages = [
        "../assets/Forest/2.png"
    ]

    //Calls the API once during load
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus',  () => {
          loadData()
        })
      },[])

    const loadData = async() =>{
        const customer = await api.GetCustomer(authContext.userID)
        const data = customer.data.details
        console.log(data.name.split(" "))
        setName(data.name.split(" ")[0] + "'s Forest")

        let trees = 0
        let carbon = 0
        try{
            let respose = await api.GetUserImpacts();
            const assets = respose.data.details.assets
            
            assets.forEach(element => {
              element.type == "TREE" ? trees += element.count : null
              carbon += element.offset
            });
        }catch{
            
        }
        console.log(trees)
        setTrees(trees)
    }
    const images = [
        {
          name: 'background1',
          image: require('../assets/Forest/1.png'),
        },
        {
          name: 'background2',
          image: require('../assets/Forest/2.png'),
        },
        {
          name: 'background3',
          image: require('../assets/Forest/3.png'),
        },
        {
          name: 'background4',
          image: require('../assets/Forest/4.png'),
        },
        {
          name: 'background5',
          image: require('../assets/Forest/5.png'),
        },
        {
          name: 'background6',
          image: require('../assets/Forest/6.png'),
        },
        {
          name: 'background7',
          image: require('../assets/Forest/7.png'),
        },
        {
          name: 'background8',
          image: require('../assets/Forest/8.png'),
        },
        {
          name: 'background9',
          image: require('../assets/Forest/9.png'),
        },
        {
          name: 'background10',
          image: require('../assets/Forest/10.png'),
        },
      ];

return (
<View style={styles.mainContainer}>
    <View style={styles.titleTextRow}>
        <Text style={styles.titleText}>{name}</Text>
    </View>

    <View style={styles.subTextRow}>
        <Text style={styles.subText}>Added the trees you earned by buying your Elite Carbonyte card.</Text>
    </View>

    <View style={styles.imageBox}>
        <Image style={styles.image} source={(images[forestValue].image)}/>
    </View>
    <View style={styles.centerRow}>
        <Text style={styles.centerRowText}>Bring Your Virtual Forest To Life</Text>
    </View>

    <View style={styles.centerRow}>
        <Text style={styles.centerRowSubText}>You can plant more trees by spending on project and make your forest green, Free from carbon.</Text>
    </View>

    <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
            <Button title="Buy Projects" color="babyBlue" onPress={() => navigation.navigate("Carbon")}/>
        </TouchableOpacity>
    </View>

</View>

);};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:  GlobalStyles.DivContainer.backgroundColor,
        height: GlobalStyles.DivContainer.height,
        width: "100%",
        flex: GlobalStyles.DivContainer.flex,
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

    subText: {
        fontSize: GlobalStyles.RowText.fontSize,
        fontWeight: GlobalStyles.RowText.fontWeight,
    },

    subTextRow: {
        marginTop: GlobalStyles.RowText.marginTop,
        marginLeft: GlobalStyles.RowText.marginLeft,
        width: "80%",
        fontColor: GlobalStyles.RowText.fontColor,
    },

    divContainer: {

        height: GlobalStyles.DivContainer.height10,
        width: GlobalStyles.DivContainer.width,
        marginTop: GlobalStyles.RowText.marginTop,
        marginLeft: GlobalStyles.RowText.marginLeft,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: "5%",
    },


    imageBox: {
        width: GlobalStyles.imageBox.width,
        marginLeft: GlobalStyles.RowText.marginLeft,

    },

    image: {
         marginTop: "7.5%",
         alignSelf: 'center',
         justifyContent: 'center',
         alignItems: 'center',
         textAlignVertical: 'center',
         alignContent: 'center',
         width: GlobalStyles.imageBox.imageFit,
         resizeMode: "contain",
         position: "relative"


    },

    centerRowText: {
        width: GlobalStyles.CenterRowText.width,
        fontSize: GlobalStyles.CenterRowText.fontSize,
        fontWeight: GlobalStyles.CenterRowText.fontWeight,
        fontColor: GlobalStyles.CenterRowText.fontColor,
        textAlign: GlobalStyles.CenterRowText.textAlign,
    },

    centerRowSubText: {
        width: GlobalStyles.CenterRowSubText.width,
        fontSize: GlobalStyles.CenterRowSubText.fontSize,
        fontWeight: GlobalStyles.CenterRowSubText.fontWeight,
        fontColor: GlobalStyles.CenterRowSubText.fontColor,
        textAlign: GlobalStyles.CenterRowSubText.textAlign,
    },


    centerRow: {
        width: GlobalStyles.CenterRow.width,
        marginLeft: GlobalStyles.CenterRow.marginLeft,
        marginTop: "2.5%"
    },

    bottom: {
        bottom: "5%",
        flex: 1,
        justifyContent: 'flex-end',

    },

    button: {
        width: "80%",
        left: "10%"
    }


});

export default VirtualEcoSystem;