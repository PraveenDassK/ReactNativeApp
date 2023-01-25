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
console.log(data)

  return (
  <ScrollView>
    <View style={styles.mainContainer}>
    <View style={styles.titleTextRow}>
            <Text style={styles.titleText}>Your Cart</Text>
        </View>

    <View style={styles.divContainer}>

        <View style={styles.cartTitle}>
            <Text style={styles.col1}>project</Text>
            <Text style={styles.col2}>Unit</Text>
            <Text style={styles.col3}>Price</Text>
        </View>

        <View style={{width: "100%", backgroundColor: "#F6F5F8", height: 2 }}></View>

        <FlatList data={data} renderItem={({item}) => (
            <View style={styles.list}>
                <Text style={styles.col1}>{item?.name}</Text>
                <Text style={styles.col2}>{item?.price.amount}</Text>
                <Text style={styles.col3}>{item?.price.price}</Text>
            </View>
        )}
        />

    </View>



    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor:  GlobalStyles.DivContainer.backgroundColor,
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

    divContainer: {
        marginTop: "5%",
        width: "80%",
        backgroundColor: "white",
        height: "100%",
        marginLeft: "10%",
        borderRadius: 15
    },

    cartTitle: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-around"
    },

    list: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-around",

    },

    col1: {
        flex: 4,
        width: "100%",
        textAlign: "center"
    },

    col2:{
        flex: 3,
        textAlign: "center"
    },

    col3: {
        flex: 3,
        textAlign: "center"
    }
});

export default CarbonCart;
