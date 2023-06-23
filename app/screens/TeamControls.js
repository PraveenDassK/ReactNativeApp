import React, {useEffect} from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import { moderateScale } from '../config/scaling'

import itemObj from '../api/apiMarket'

const Marketplace = () => {

  useEffect(() => {
console.log('object', itemObj.id)
  },[])
  
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.comingSoonText}>coming</Text>
      <Text style={styles.comingSoonText}>soon</Text>

    </View>
  )
}

export default Marketplace

const styles = StyleSheet.create({
    comingSoonText: {
        textTransform: "uppercase",
        fontSize: moderateScale(80),
        fontWeight: "bold",
        textAlign:"center",

    },
    mainContainer: {
        flex:1,
        justifyContent:"center",
        alignContent: "center",
       
    }
})