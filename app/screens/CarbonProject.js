import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Screen from "../components/Screen";

import api from "../api/carbonSingle"
import AuthContext from "../auth/context";
import Button from "../components/Button"


const CarbonProject = ({navigation,route}) => {
  const [data, setData] = useState(null)
  console.log(route)
  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await api.getListingsSingle(route.params.Id);
    setData(response.data.details)
    console.log(response.data)
  }
  
  let projects = [];

  const formatData = () => {
    if(data != null){        
        projects.push(
          <View key = {data.id} style={styles.rectanglePressable}>
            <Text style={styles.titleText}> 
              {data.displayName} 
            </Text>
            
            <Image 
              style={styles.image}
              source={
                data.image != "" ? {uri:data.image} : require("../assets/icon-bluecheck.png")
              }
            />
            <View style={{backgroundColor: "grey"}}>
              <Text>
                {data.description}
              </Text>
            </View>
          </View>
        )
    }
  }

  formatData()


  return (
    <View style = {styles.mainPage}>
      <ScrollView>
        <View style = {styles.page}>
            {projects}
        </View>
      </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  helloTypo1: {
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "center",
    position: "absolute",},
  page:{
    width:"80%",
    left:"10%",
    color: "black",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 25,
  },
  emailPosition: {
    width: 280,
    textAlign: "center",
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
    width:"100%",
    top: "50%",
    position: "absolute",
  },
  textBox:{
    backgroundColor: "red"

  },
  mainPage:{
    backroundColor:"white",
    width:"100%",

  },
});

export default CarbonProject;
