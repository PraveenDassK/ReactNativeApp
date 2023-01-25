import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet,  View, Text, Image, ScrollView, FlatList} from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import GlobalStyles from "../../GlobalStyles";

import carbonApi from "../api/api_list"

const CarbonCart = ({route,navigation }) => {
  const [data, setData] = useState([])
  const [display, setshow] = useState([])

  useEffect(() => {
    loadData()
  },[])

  const loadData = async () => {
    const projectList = route.params

    let projects = []
    await projectList.forEach(async(element) => {

      let project = await carbonApi.GetProjectByID(element.projectId)
      console.log(project)

      let name = project.data.details.displayName
      let price = {
        "price" : project.data.details.asset.assetPrice,
        "item" : project.data.details.asset.name,
        "amount" : element.amount
      }
      projects.push({price,name})
      setData(projects) 
    });

    let show = []

    data.forEach(item => {
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
  }

  return (
    <View style={styles.CarbonCart}>
      <View style={styles.cartTitle}>
        <Text style={styles.cartTitleText}>Order Summary</Text>
      </View>

      <View style={styles.cartItems}>
        <Text>
          Project
        </Text>
        <Text>
          Unit
        </Text>
        <Text>
          Price
        </Text>
        {display}

        <Text>
          Total
        </Text>

        <Text>
          {display.length}
        </Text>
        <Text>
          
        </Text>

      </View>
      <Pressable >
        <View style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>
            Proceed to payment
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  CarbonCart:{
    width:"100%",
    height:"100%",
    backgroundColor:"aliceblue"
  },
  cartTitle:{
    width:"100%",
    height:"10%",


  },
  cartTitleText:{
    width:"100%",
    color: "black",
    fontSize: GlobalStyles.FontSize.size_8xl,  
    textAlign:"left",
    top:"5%",
    left :"10%",
  },
  cartItems:{
    width:"80%",
    height:"70%",
    backgroundColor:"white",
    left: "10%",
    borderRadius:10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    
    elevation: 11,
  },
  paymentButton:{
    backgroundColor:GlobalStyles.Color.blue_100,
    width:"80%",
    height:60,
    top :"80%",
    left: "10%",
    borderRadius:10,
  },
  paymentButtonText:{
    color: "black",
    fontSize: GlobalStyles.FontSize.size_4xl,  
    textAlign:"center",
    top:"25%",
  }
});

export default CarbonCart;
