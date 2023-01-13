import React,{ useEffect, useState,useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import carbonApi from "../api/test_api_list"
import AuthContext from "../auth/context";
import Button from "../components/Button"


const Carbon = ({navigation}) => {
  const [data, setData] = useState(null)
  const authContext = useContext(AuthContext)

  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await carbonApi.EcoModule_Earthly_GetProjectList();
    setData(response.data.details.data)
  }

  const switchProject = (_ID) => {
    console.log("Navigate to:"+_ID)
    authContext.setUser({ID : _ID})    
    navigation.navigate("CarbonProject")
  }

  var projects = []

  const formatData = () => {
    if(data != null){
      data.map(element => {
        projects.push(
          <View style={styles.projectBoxPadding}>
            <View key = {element.id} style={styles.projectBox}>

              <Image 
                style={{height: 150, width:230}}
                source={
                  element.image != "" ? {uri:element.image} : require("../assets/icon-bluecheck.png")
                }
              />

              <Text style = {styles.projectBoxTitleFont}>
                {element.displayName} 
              </Text>

              <Text style = {styles.projectBoxFont}>
                {element.description.replace(/<[^>]*>/g, "").substring(0,200).trim()}... 
              </Text>

              <Pressable onPress = {() => switchProject(element.id)} style={[styles.mainFont, styles.button]}>
                <Text style = {styles.mainFont}>
                  More details
                </Text>
              </Pressable>
            </View>
          </View>
        )
      });
    }
  }
  formatData()

  return (
    <View>
      <ScrollView>
        {
          //Header View
        }
        <View style={[styles.headerContainter]}>
          <Text style={[styles.header1, styles.headerText]}>
            <Pressable
              onPress={() => navigation.navigate("AccountMain")}                      
            >
              <Text>
                Account
              </Text>
            </Pressable>
          </Text>
          <Text style={[styles.header2, styles.headerText]}>
          <Pressable
              onPress={() => navigation.navigate("Analytics")}                      
            >
              <Text>
                Analysis
              </Text>
            </Pressable>
          </Text>
          <Text style={[styles.header3, styles.headerText]}>          
            <Pressable
              onPress={() => navigation.navigate("Carbon")}                      
            >
              <Text>
                Carbon
              </Text>
            </Pressable>
          </Text>
          <Text style={[styles.header4, styles.headerText]}>
            <Pressable
              onPress={() => navigation.navigate("Settings")}                      
            >
              <Text>
                Profile
              </Text>
            </Pressable>
          </Text>
        </View>

        {
          //Title box
        }
        <View style={styles.titleBox}>
          <Text style={styles.titleFont}>Remove Carbon,</Text>
          <Text style={styles.titleFont}>Restore Nature</Text>

        </View>
        <Image
          style={[styles.treeImage]}
          resizeMode="cover"
          source={require("../assets/image-twotrees.png")}
        />

        <Pressable
          style={[styles.groupParent, styles.groupPosition]}
          onPress={() => navigation.navigate("ChooseCardsStandard5")}
        >
          <Text style={[styles.mainFont, styles.footprintButton]}>
            Calculate Carbon Footprint
          </Text>
        </Pressable>

        <View/>
        <View style={styles.helloWrapper}>
          <Text >
            <Text >
              <Text style={styles.mainFont}>
                At Carbonyte we help you to track, reduce and calculate your CO2 emission from your daily transcation
              </Text>
            </Text>
          </Text>
        </View>



        <Text style={styles.mainFont}>
          Remove your carbon footprint and restore nature in seconds with our
          revolutionary instant purchase platform. Just choose what you want to
          balance – personal, business or travel impact – then go climate
          positive.
          We only profile high-quality projects that meet our minimum standards
          in relation to carbon + biodiversity + social benefits
        </Text>

        {projects}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  titleBox: {
    borderWidth: 1,
    borderColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 40,  
  },
  titleFont: {
    color: GlobalStyles.Color.indigo_100,
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontWeight:"bold",
    margin: GlobalStyles.Margin.margin_8xs,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'left',
  },
  mainFont: {
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    margin: GlobalStyles.Margin.margin_8xs,
    width: "80%"
  },

  rectanglePressable: {
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
  },
  headerContainter:{
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: GlobalStyles.Color.gray_500,
  },
  headerText:{

  },
  header1:{

  },
  header2:{

  },
  header3:{

  },
  header4:{

  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },

  footprintButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 150,
    backgroundColor: '#7FDEFA',
  },

  treeImage: {
    width: "100%",
    height: 400,
    alignContent: "center",
    justifyContent: "center",
  },

  projectBox: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#DEDEDE",
    width:"80%",
    left: "10%",
    borderRadius: 20,
    padding:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },

  projectBoxPadding:{
    padding:20
  },

  projectBoxTitleFont: {
    fontSize: GlobalStyles.FontSize.size_xl,
    textAlign: "left",
    width:100,
    fontWeight: "bold"
  },

  projectBoxFont: {
    color: 'dark-grey'
  }


});

export default Carbon;
