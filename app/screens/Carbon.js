import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet,  View, Dimensions, Image, ScrollView, FlatList} from 'react-native'

import { horizontalScale, moderateScale, verticalScale } from '../config/metrics'
import carbonApi from "../api/carbon"
import Button from '../components/Button'
import Text from "../components/Text"
import Screen from '../components/Screen'
import AuthContext from '../auth/context'








const Carbon = ({ navigation }) => {
    console.log(Dimensions.get('screen'))

    const [data, setData] = useState(null)
  const { setUser } = useContext(AuthContext)

  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await carbonApi.getListings();
    console.log(response.data.details.data[0].tags)
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

  


  return (
    <Screen>

        <View style={styles.mainContainer}>
            <FlatList
                ListHeaderComponent={
                    <View
            style={styles.container}>
            <Text 
                onPress={()=> console.log("onpress")} 
                style={styles.title}
            >Remove Carbon, Restore Nature
            </Text>
            <View style={styles.treeContiner}>
                <Image 
                resizeMode='contain'
                style={{
                    width: horizontalScale(250),
                    height: verticalScale(400) 
                }}
                source={require("../assets/image-tree.png")}
                />
            </View>
            {/* <Text>
                At Carbonyte we help you to track, reduce and calvulate your C0<Text style={{fontSize: 15, lineHeight: 37}}>2</Text>emission from your daily transcation
            </Text> */}

        
            <Button title="CALCULATE CARBON FOOTPRINT" color="blue" onPress={() => console.log("Calulate carbon footprint")}/>
            <View style={styles.subContainer}>
                    <Text 
                    numberOflines={3}
                    style={styles.text}
                    >
                        At Carbonyte we help you track, reduce and calculate your C02 emission from your daily transcation
                    </Text>
            </View>
            <View style={[styles.subTitle, {marginTop: 100}]}>
                <View style={styles.investNature} >
                    <Text style={styles.title}>Invest in Nature</Text>
                </View>
                <View style={{alignItems:"flex-start", justifyContent: 'center'}}>
                    <Image 
                        resizeMode='contain'
                        style={{width:120, height: 120}}
                        source={require('../assets/image-twotrees.png')}
                    />
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <Button title="VISIT YOUR VIRTUAL FOREST" color='none' style={{borderColor: 'blue', borderWidth: 1,}} textColor={{color: 'blue'}} onPress={()=> navigation.navigate("ChooseCardsStandard5")}/>
                
            </View>
            
                <Text style={styles.description}>Remove your carbon footprint and restore nature in seconds with our revolutionary instant purchase platform. Just choose what you want to balance - personal, business or travel impact - then go climate positive</Text>
                <Text style={styles.description}>We only profile high-quality projects that meet our minimun standards in relation to carbon + biodiversity + social benifits</Text>
                <Text style={[styles.textSub, {marginTop: 50}]}>Select your project</Text>
           
            </View>

                }
                data={data} 
                keyExtractor={data => data.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.listItems}>
                        
                        <Image
                        resizeMode={item.image !== "" ? 'stretch': 'contain'}
                        style={[styles.listImage, {
                            width: horizontalScale(300),
                            height: verticalScale(180) 
                        }]}
                        source={
                            
                            item.image != "" ? {uri:item.image} : require("../assets/icon-bluecheck.png")
                        } />
                    
                        <View style={styles.subTitle}>
                            <View style={styles.subTitleText}>
                                <Text
                                    style={styles.textSub}
                                >{item.displayName}</Text>
                            </View>
                            <View style={styles.subTitlePrice}>
                                <Text
                                style={styles.priceSub}
                                >£1.45
                                </Text>
                                <Text style={styles.tree}>
                                    /{capitalized(item.asset.type)}
                                </Text>
                            </View>
                        </View>
                        <View style={{width: '100%',alignItems: "flex-start"}}>
                            <Text
                                style={styles.description}
                            >{item.description.replace(/<[^>]*>/g, "").substring(0,200).trim()}...</Text>
                        </View>
                        <Button title="ADD TO CART" color='blue' onPress={() => console.log('Add to cart')}/>
                        <View style={styles.benifitsContainer}>
                            {item.tags.length ? (
                                <View >   
                                <Text style={[styles.tags, styles.tree]}>Co-benifits</Text>
                                </View>
                            ): null }
                            <View style={{flexWrap: "wrap", flexDirection: "row"}}>
                                {item.tags.map((tag, index)=> (
                                    <View key={index} style={index !== 0 ? styles.tagsContainer: [styles.tagsContainer, {marginLeft: 0}]}>
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
        marginTop: 10,
        textAlign: "left"

        
    },
    investNature: {
        alignItems: "flex-start",
        justifyContent: "center"
    },
    listImage: {
        borderRadius: 15
    },
    listImageContainer: {
        height: 200
    },
    listItems: {
        marginTop: 20,
        borderRadius: 15,
        paddingVertical:20,
        paddingHorizontal:14,
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center'
    },
    mainContainer: {
        padding:25,
    },
    priceSub: {
        fontSize: 30,
        fontWeight: "bold"
    },
    tags : {
        color: "grey"
    },
    tagsContainer: {
        backgroundColor: "#f3f5f5",
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
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
    treeContiner: {
        alignItems: 'center',
        marginTop: verticalScale(10),
    },
    subTitle: {
        flexDirection: 'row',
        marginTop: 10

    },
    subContainer:{
        marginTop: 20,
        borderRadius: 15,
        padding:20,
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
    }

})

export default Carbon