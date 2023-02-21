import React, {useContext, useState, useEffect} from 'react';
import { StyleSheet,  View, Text, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import GlobalStyles from "../../GlobalStyles";
import apiCall from "../api/api";
import Button from "../components/Button";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling";

const CarbonCart = ({route,navigation }) => {
  const [data, setData] = useState([])
  const [display, setshow] = useState([])
  const [amount, setAmount] = useState("0")
  const [price, setPrice] = useState("0")

  useEffect(() => {
    loadData()
  },[])

  const loadData = async () => {
    const projectList = route.params
    let projects = []

    let totalPrice = 0
    await projectList.forEach(async(element) => {

      let project = await apiCall.GetSingleProject("5f96f967a3a85800118be4d1")

      let name = project.displayName
      totalPrice = totalPrice + project.asset.displayAssetPriceWithMarkup

      let price = {
        "price" : project.asset.displayAssetPriceWithMarkup.toFixed(2),
        "item" : project.asset.name,
        "amount" : element.amount
      }
      projects.push({price,name})
      setData(projects)
    });

    let show = []
    let totalItems = 0

    data.forEach(item => {
      totalItems ++
      show.push(
        <View>
          <Text>
            {item.name}
          </Text>
          <Text>
            £{item.price.price} per {item.price.item}
          </Text>
          <Text>
            x{item.price.amount}
          </Text>
        </View>
      )
    })
    setshow(show)
    setAmount(totalItems)
    setPrice(totalPrice)
  }

  const buy = async() => {
    //setData("")
    const projectToBuy = route.params
    const purchaseObj = {
      "carbonyteUserId": "CC11875",
      "projectLists": route.params,
      "sourceAccountId": "A12274AW",
      "totalAmount": route.params.length
    }
    navigation.navigate("PinCart",purchaseObj)

  } 
  
  return (
    <View style={styles.mainContainer}>

    <View style={styles.titleTextRow}>
            <Text style={styles.titleText}>Your Cart</Text>
        </View>
    <View style={styles.divContainer}>

        <View style={styles.cartTitle}>
            <Text style={styles.heading1}>Project</Text>
            <Text style={styles.heading2}>Unit</Text>
            <Text style={styles.heading3}>Price</Text>
        </View>
        <View style={{width: "100%", backgroundColor: "#F6F5F8", height: 2 }}></View>
        <ScrollView>
        <FlatList data={data} renderItem={({item}) => (
            <View style={styles.list}>
                <Text style={styles.col1}>{item?.name}</Text>
                <Text style={styles.col2}>{1}</Text>
                <Text style={styles.col3}>£{item?.price.price}</Text>
            </View>
        )}
        />
        </ScrollView>
        <View style={{width: "100%", backgroundColor: "#F6F5F8", height: 2 , top: 49}}></View>
        <View style={{width: "100%", height: 50, top: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: "white"}}>
        <View style={styles.cartTitle}>
                     <Text style={styles.heading1}>Total</Text>
                     <Text style={styles.heading2}>{amount}</Text>
                     <Text style={styles.heading3}>£{price}</Text>
                 </View>
         </View>
    </View>

       <View style={styles.bottom}>
               <TouchableOpacity style={styles.button}>
                   <Button title="Buy Projects" color="babyBlue"onPress={()=>buy()}/>
               </TouchableOpacity>
           </View>



    </View>
  );
};

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor:  GlobalStyles.DivContainer.backgroundColor,
        width: "100%",
        flex: 1,
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

    divContainer: {
        marginTop: "5%",
        width: "90%",
        backgroundColor: "white",
        height: verticalScale(400),
        marginLeft: "5%",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    cartTitle: {
    marginTop: "2.5%",
    marginBottom: "2.5%",
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-around",

    },

    list: {
    paddingTop: "2.5%",
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-around",

    },

    heading1: {
        flex: 5,
        width: "100%",
        textAlign: "center",
        fontWeight: "700",
                fontSize: 14,

    },
    heading2: {
        flex: 2.5,
        textAlign: "center",
        fontWeight: "700",
                fontSize: 14,

    },
    heading3: {
        flex: 2.5,
        textAlign: "center",
        fontWeight: "700",
        fontSize: 14,
    },



    col1: {
        paddingLeft: "2.5%",
        flex: 5,
        width: "100%",
        textAlign: "left",
        fontWeight: "600"
    },

    col2:{
        flex: 2.5,
        textAlign: "center"
    },

    col3: {
        flex: 2.5,
        textAlign: "center"
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

export default CarbonCart;
