import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet,  View, Image, FlatList} from 'react-native'
import GlobalStyles from "../../GlobalStyles";

import { horizontalScale, moderateScale, verticalScale } from '../config/metrics'
import carbonApi from "../api/carbon"
import Button from '../components/Button'
import Text from "../components/Text"
import Screen from '../components/Screen'
import AuthContext from '../auth/context'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Carbon = ({route,navigation }) => {

    const [data, setData] = useState(null)
 const { setUser } = useContext(AuthContext)

  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await carbonApi.getListings();
   
    setData(response.data.details.data)
  }

  const capitalized =(words)=>{
 
   return  words.split("").map((word, index) => {
        if(index === 0){
            return word
        }
        return word.toLowerCase()
    })
  }

  const [cart,setCart] = useState([])
  let amount = 0
  //Buy functions
  const addToCart = (ID) => {
    let arrobj = {
      "projectId": ID,
      "amount": 1
    }
    setCart(prevArray => [...prevArray, arrobj])
    amount++;
    console.log(arrobj)
    checkout()
  }

  const checkout = () => {
    let obj = {
      "userId": "A121BXVM",
      "projectLists": cart,
      "sourceAccountId": "A121BXVM",
      "totalAmount": amount
    }
    console.log(obj)

  }
  console.log(cart)
  return (
    <Screen style={{backgroundColor: "#F6F5F8"}}>

        <View style={styles.mainContainer}>
            <FlatList
                ListHeaderComponent={
                    <View
            style={styles.container}>
            <View style={styles.titleTextRow}>
                    <Text style={styles.titleText}>Remove Carbon,</Text>
                    <Text style={styles.titleText}>Restore Nature</Text>

                </View>
            <View style={styles.treeContainer}>
            </View>
            {/* <Text>
                At Carbonyte we help you to track, reduce and calvulate your C0<Text style={{fontSize: 15, lineHeight: 37}}>2</Text>emission from your daily transcation
            </Text> */}

        
            <Button title="CALCULATE CARBON FOOTPRINT" color="babyBlue" onPress={() => console.log("Calulate carbon footprint")}/>
            <View style={styles.subContainer}>
                    <Text numberOflines={3}
                    style={styles.text}
                    >
                        At Carbonyte we help you track, reduce and calculate your C02 emission from your daily transcation
                    </Text>
            </View>
            <View style={[styles.subTitle, { marginTop: verticalScale(100)}]}>
                <View style={styles.investNature} >
                    <Text style={styles.titleText}>Invest in</Text>
                    <Text style={styles.titleText}>Nature</Text>
                </View>
                <View style={{alignItems:"flex-start", justifyContent: 'center'}}>
                    <Image 
                        resizeMode='contain'
                        style={{width: horizontalScale(120), height: verticalScale(120), marginLeft: horizontalScale(100)}}
                        source={require('../assets/image-twotrees.png')}
                    />
                </View>
            </View>
            <View style={{marginTop: verticalScale(20)}}>
                <View style={styles.doubleButtonDiv}>
                <Button style={{width: "49%", borderColor: "#D8EBF9", borderWidth: horizontalScale(1.5)}} title="VISIT YOUR VIRTUAL FOREST" color='none' fontColor={{color: 'blue'}} onPress={()=> navigation.navigate("VirtualEcoSystem")}/>
                <Button style={{width: "49%", borderColor: '#D8EBF9', borderWidth: horizontalScale(1.5)}} title="VISIT YOUR ECO SUMMARY" color='none' fontColor={{color: 'blue'}} onPress={()=> navigation.navigate("ChooseCardsStandard5")}/>
                </View>
            </View>

            <View style={{marginBottom: "5%", textAlign: "center"}}>
                <Text style={styles.description}>Remove your carbon footprint and restore nature in seconds with our revolutionary instant purchase platform. Just choose what you want to balance - personal, business or travel impact - then go climate positive</Text>
                <Text style={styles.description}>We only profile high-quality projects that meet our minimum standards in relation to carbon + biodiversity + social benefits</Text>
            </View>
                <Button title="VISIT YOUR CART" color='babyBlue' onPress={()=> navigation.navigate("CarbonCart",cart)}/>


                <Text style={[styles.textSub, {marginTop: verticalScale(50)}]}>Select your project</Text>
           
            </View>

                }
                data={data} 
                keyExtractor={data => data.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.listItems}>
                        
                        <Image
                        resizeMode={item.image !== "" ? 'contain': 'contain'}
                        style={[styles.listImage, {
                            width: horizontalScale(300),
                            height: verticalScale(180),
                            resizeMode: 'stretch'
                        }]}
                        source={
                            
                            item.image != "" ? {uri:item.image} : require("../assets/icon-bluecheck.png")
                        } />
                    
                        <View style={styles.subTitle}>{console.log(item.asset.type)}
                            <View style={styles.subTitleText}>
                                <Text
                                    style={styles.textSub}
                                >{item.displayName}</Text>
                            </View>
                            <View style={styles.subTitlePrice}>
                                <Text
                                style={styles.priceSub}
                                >£{item.asset.displayAssetPrice}
                                </Text>
                                <Text style={styles.tree}>
                                    /{(item.asset.type == "LAND" ? "tCO2e" : item.asset.type)}
                                </Text>
                            </View>
                        </View>
                        <View style={{width: '100%',alignItems: "flex-start"}}>
                            <Text
                                style={styles.description}
                            >{item.description.replace(/<[^>]*>/g, "").substring(0,200).trim()}...</Text>
                        </View>
                        <View style={styles.doubleButtonDiv}>
                        <Button style={{width: "49%"}} title="ADD TO CART" color='babyBlue' onPress={() => addToCart(item.id)}/>
                        <Button style={{width: "49%"}} title="Learn More" color='babyBlue' onPress={() => navigation.navigate("CarbonProject",{"Id" : item.id})}/>
                        </View>
                        <View style={styles.benifitsContainer}>
                            {item.tags.length ? (
                                <View >
                                <Text style={[styles.tags, styles.tree]}>Co-benifits</Text>
                                </View>
                            ): null }
                            <View style={{flexWrap: "wrap", flexDirection: "row"}}>
                                {item.tags.map((tag, index)=> (
                                    <View key={index} style={index !== 0 ? styles.tagsContainer: [styles.tagsContainer, {marginLeft: horizontalScale(0) }]}>
                                        <Text style={styles.tags}>{tag}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                )
            }
            />
        </View>
       
        


       
    </Screen>
    
  )
}

const styles = StyleSheet.create({
    benifitsContainer: {
        width: "100%"
    },
    container: {
        backgroundColor: "#f3f5f5",
        flex:1,
    
    },
    description:{
        color: "grey",
        marginTop: verticalScale(10),
        textAlign: "center"

        
    },
    investNature: {
        alignItems: "flex-start",
        justifyContent: "center"
    },
    listImage: {
        borderRadius: moderateScale(15)
    },
    listImageContainer: {
        height: verticalScale(200)
    },
    listItems: {
        marginTop: verticalScale(20),
        borderRadius: moderateScale(15),
        paddingVertical: verticalScale(20),
        paddingHorizontal: horizontalScale(14) ,
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center'
    },
    mainContainer: {
        paddingHorizontal: horizontalScale(25),
        paddingVertical: verticalScale(25)
    },
    priceSub: {
        fontSize: moderateScale(30),
        fontWeight: "bold"
    },
    tags : {
        color: "grey"
    },
    tagsContainer: {
        backgroundColor: "#f3f5f5",
        borderRadius: moderateScale(10),
        marginLeft: horizontalScale(10),
        marginTop: verticalScale(10),
        paddingVertical: verticalScale(5),
        paddingHorizontal: horizontalScale(10),
    },
    text: {
        fontWeight: "bold",
        textAlign: "center",
        color: "#1B2356"
    },
    textSub: {
        fontWeight: "bold",
        textAlign: "left",
        color: "#1B2356"

    },
    title: {
        fontSize: moderateScale(30),
        fontWeight: 'bold',
        lineHeight: verticalScale(30),
        width: '70%',
        
    },
    tree: {
        fontWeight: 'bold'
    },
    treeContainer: {
        alignItems: 'center',
        marginTop: verticalScale(10),
    },
    subTitle: {
        flexDirection: 'row',
        marginTop: verticalScale(10)

    },
    subContainer:{
        marginTop: verticalScale(20),
        borderRadius: moderateScale(15),
        paddingVertical: verticalScale(20),
        paddingHorizontal: horizontalScale(20),
        backgroundColor: 'white',
        width: '100%'
    },
    subTitleText: {
        flex:1,
        fontWeight: 'bold'
    },
    subTitlePrice: {
        flex:1,
        alignItems: "flex-end"
    },

    NavBarBottom: {
            marginTop: "3%",
            flexDirection: 'row',
            width: "85%",
            justifyContent: "space-around",
            marginLeft: "7.5%"

        },

        NavBarBottomText: {
            fontSize: GlobalStyles.NavBarBottomText.fontSize,
            fontWeight: GlobalStyles.NavBarBottomText.fontWeight,
            color: GlobalStyles.NavBarBottomText.fontColor,
        },

        titleText: {
                fontSize: GlobalStyles.Title.fontSize,
                fontWeight: GlobalStyles.Title.fontWeight,
                color: GlobalStyles.NavBarBottomText.fontColor,
            },

        doubleButtonDiv:{
            flexDirection: 'row',
            width: "100%",

            justifyContent: "space-between",
        }

})

export default Carbon