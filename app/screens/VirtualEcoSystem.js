import React, { useContext, useEffect, useState, Keyboard } from "react";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"
import {Text, StyleSheet, Image, View, TextInput, Pressable, TouchableOpacity} from "react-native";
import * as Yup from 'yup';
import Button from "../components/Button"
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import Form from "../components/forms/Form";

import apiCall from "../api/apiCall";

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
  {
      name: 'background11',
      image: require('../assets/Forest/11.png'),
    },
    {
      name: 'background12',
      image: require('../assets/Forest/12.png'),
    },
            {
    name: 'background13',
    image: require('../assets/Forest/13.png'),
  },
  {
  name: 'background14',
  image: require('../assets/Forest/14.png'),
  },
  {
  name: 'background15',
  image: require('../assets/Forest/15.png'),
  },
  {
  name: 'background16',
  image: require('../assets/Forest/16.png'),
  },
  {
  name: 'background17',
  image: require('../assets/Forest/17.png'),
  },
  {
  name: 'background18',
  image: require('../assets/Forest/18.png'),
  },
  {
  name: 'background19',
  image: require('../assets/Forest/19.png'),
  },
  {
  name: 'background20',
  image: require('../assets/Forest/20.png'),
  },
  {
  name: 'background21',
  image: require('../assets/Forest/21.png'),
  },
  {
  name: 'background22',
  image: require('../assets/Forest/22.png'),
  },
  {
  name: 'background23',
  image: require('../assets/Forest/23.png'),
  },
  {
  name: 'background24',
  image: require('../assets/Forest/24.png'),
  },
  {
  name: 'background25',
  image: require('../assets/Forest/25.png'),
  },
  {
  name: 'background26',
  image: require('../assets/Forest/26.png'),
  },
  {
  name: 'background27',
  image: require('../assets/Forest/27.png'),
  },
  {
  name: 'background28',
  image: require('../assets/Forest/28.png'),
  },
  {
  name: 'background29',
  image: require('../assets/Forest/29.png'),
  },
  {
  name: 'background30',
  image: require('../assets/Forest/30.png'),
  },
  {
  name: 'background31',
  image: require('../assets/Forest/31.png'),
  },
  {
  name: 'background32',
  image: require('../assets/Forest/32.png'),
  },
  {
  name: 'background33',
  image: require('../assets/Forest/33.png'),
  },
  {
  name: 'background34',
  image: require('../assets/Forest/34.png'),
  },
  {
  name: 'background35',
  image: require('../assets/Forest/35.png'),
  },
  {
  name: 'background36',
  image: require('../assets/Forest/36.png'),
  },
  {
  name: 'background37',
  image: require('../assets/Forest/37.png'),
  },
  {
  name: 'background38',
  image: require('../assets/Forest/38.png'),
  },
  {
  name: 'background39',
  image: require('../assets/Forest/39.png'),
  },
  {
  name: 'background40',
  image: require('../assets/Forest/40.png'),
  },
  {
  name: 'background41',
  image: require('../assets/Forest/41.png'),
  },
  {
  name: 'background42',
  image: require('../assets/Forest/42.png'),
  },
  {
  name: 'background43',
  image: require('../assets/Forest/43.png'),
  },
  {
  name: 'background44',
  image: require('../assets/Forest/44.png'),
  },
  {
  name: 'background45',
  image: require('../assets/Forest/45.png'),
  },
  {
  name: 'background46',
  image: require('../assets/Forest/46.png'),
  },
  {
  name: 'background47',
  image: require('../assets/Forest/47.png'),
  },
  {
  name: 'background48',
  image: require('../assets/Forest/48.png'),
  },
  {
  name: 'background49',
  image: require('../assets/Forest/49.png'),
  },
  {
  name: 'background50',
  image: require('../assets/Forest/50.png'),
  }
];

const VirtualEcoSystem = ({navigation}) => {

    const [name, setName] = useState("Your forest")
    const [forestValue, setTrees] = useState("0");

    const { accountID } = useContext(AuthContext)

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
        const customer = await apiCall.GetCustomerDetails(accountID);
        setName(customer.name.split(" ")[0] + "'s Forest")

        let trees = 0
        try{
    const response = await apiCall.GetUserImpact("CC11875");
            trees = response.totalAssets
        }catch{
            
        }
        setTrees(trees)
    }
    

return (
<View style={styles.mainContainer}>
    <View style={styles.titleTextRow}>
        <Text style={styles.titleText}>{name}</Text>
    </View>

    <View style={styles.subTextRow}>
        <Text style={styles.subText}>Added the trees you earned by buying your Elite Carbonyte card.</Text>
    </View>

    <View style={styles.imageBox}>
        <Image style={styles.image} source={(images[forestValue > 49 ? 49 : forestValue].image)}/>
    </View>
    <View style={styles.centerRow}>
        <Text style={styles.centerRowText}>Bring Your Virtual Forest To Life</Text>
    </View>

    <View style={styles.centerRow}>
        <Text style={styles.centerRowSubText}>You can plant more trees by spending on project and make your forest green, Free from carbon.</Text>
        <View style={{height: 10}}/>
        <Text style={styles.centerRowSubText}>You have planted {forestValue} trees, thank you for helping and fixing the environment</Text>
    </View>

    <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Button title="Buy Projects" color="babyBlue" onPress={() => navigation.navigate("Account", { screen: "CarbonTab"})}/>
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

    divContainer: {

        height: GlobalStyles.DivContainer.height10,
        width: GlobalStyles.DivContainer.width,
            marginLeft: GlobalStyles.DivContainer.marginLeft,
        marginTop: GlobalStyles.RowText.marginTop,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: "5%",
    },


    imageBox: {
        width: GlobalStyles.DivContainer.width,
            marginLeft: GlobalStyles.DivContainer.marginLeft,

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
        width: "100%",
        fontSize: GlobalStyles.CenterRowSubText.fontSize,
        fontWeight: GlobalStyles.CenterRowSubText.fontWeight,
        fontColor: GlobalStyles.CenterRowSubText.fontColor,
        textAlign: GlobalStyles.CenterRowSubText.textAlign,
    },


    centerRow: {
        width: "90%",
        marginLeft: "5%",
        marginTop: "2.5%"
    },

    bottom: {
        bottom: "5%",
        flex: 1,
        justifyContent: 'flex-end',

    },

    button: {
        width: "90%",
        left: "5%"
    }


});

export default VirtualEcoSystem;