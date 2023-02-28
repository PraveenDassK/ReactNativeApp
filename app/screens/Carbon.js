import React, { useContext, useState, useEffect, useCallback } from "react";
import {   RefreshControl, StyleSheet, View, Image, FlatList, ActivityIndicator } from "react-native";
import GlobalStyles from "../../GlobalStyles";

import { horizontalScale, moderateScale, verticalScale } from "../config/metrics";
import carbonApi from "../api/carbon";
import apiCall from "../api/api";
import Button from "../components/Button";
import Text from "../components/Text";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import FadeInView from "../components/fadeInview";

const Carbon = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null);
  const { setUser } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true)
    const response = await apiCall.GetProjectList();
    setIsLoading(false)
    setData(response);
  };

  const [cart, setCart] = useState([]);
  let amount = 0;
  //Buy functions
  const addToCart = (ID) => {
    let arrobj = {
      projectId: ID,
      quantity: 1,
    };
    setCart((prevArray) => [...prevArray, arrobj]);
    amount++;
    checkout();
  };

  const checkout = () => {
    let obj = {
      userId: "A121BXVM",
      projectLists: cart,
      sourceAccountId: "A121BXVM",
      totalAmount: amount,
    };
  };

  const onRefresh = useCallback(() => {
    console.log("1st refresh")
    setRefreshing(true);
    setTimeout(() => {
      console.log("2nd refresh")
      loadData()
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
  ) => {
    if (Platform.OS === 'ios') {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: {width: xOffset, height: yOffset},
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === 'android') {
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717');

  if(isLoading) {
    return (
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
             <ActivityIndicator size="large" color="blue"/>
         </View>
    )
   }
  
  return (
    <Screen style={{ backgroundColor: "#F6F5F8" }}>
      {cart && cart.length ? (
        <Pressable style={{ position: "absolute", zIndex: 5, bottom: 0, right: 0 }} onPress={() => navigation.navigate("CarbonCart", cart)}>
          <Image resizeMode="contain" style={{ width: horizontalScale(120), height: verticalScale(120) }} source={require("../assets/ShoppingIcon.png")} />
        </Pressable>
      ) : null}

      <View style={styles.mainContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListHeaderComponent={
            <View style={styles.container}>
              <View style={styles.titleTextRow}>
                <Text style={[styles.titleText, {lineHeight: 30}]}>Remove Carbon,</Text>
                <Text style={[styles.titleText, {lineHeight: 30}]}>Restore Nature</Text>
              </View>
              <FadeInView>
                <View style={styles.treeContainer}>
                <Image
                style={styles.treeImage}
                resizeMode="contain"
                source={require("../assets/leafTree.png")}
              />
            
                </View>
              </FadeInView>
              {/* <Text>
                At Carbonyte we help you to track, reduce and calvulate your C0<Text style={{fontSize: 15, lineHeight: 37}}>2</Text>emission from your daily transcation
            </Text> */}

              <Button title="CALCULATE CARBON FOOTPRINT" color="babyBlue" style={styles.boxShadow} onPress={() => navigation.navigate("CarbonTonnesRemoved")} />
              <View style={styles.subContainer}>
                <Text numberOflines={3} style={styles.text}>
                  At Carbonyte we help you track, reduce and calculate your C02 emission from your daily transaction
                </Text>
              </View>
              <View style={[styles.subTitle, { marginTop: verticalScale(40) }]}>
                <View style={styles.investNature}>
                  <Text style={styles.titleText}>Invest in</Text>
                  <Text style={styles.titleText}>Nature</Text>
                </View>
                <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
                  <Image resizeMode="contain" style={{ width: horizontalScale(120), height: verticalScale(120), marginLeft: horizontalScale(100) }} source={require("../assets/image-twotrees.png")} />
                </View>
              </View>
              <View style={{ marginTop: verticalScale(20) }}>
                <View style={styles.doubleButtonDiv}>
                  <Button style={{ width: "49%", borderColor: "#D8EBF9", borderWidth: horizontalScale(1.5) }} title="VISIT YOUR VIRTUAL FOREST" color="none" fontColor={{ color: "blue" }} onPress={() => navigation.navigate("VirtualEcoSystem")} />
                  <Button style={{ width: "49%", borderColor: "#D8EBF9", borderWidth: horizontalScale(1.5) }} title="VISIT YOUR ECO SUMMARY" color="none" fontColor={{ color: "blue" }} onPress={() => navigation.navigate("ChooseCardsStandard5")} />
                </View>
              </View>

              <View style={{ marginBottom: "5%", textAlign: "center" }}>
                <Text style={styles.description}>Remove your carbon footprint and restore nature in seconds with our revolutionary instant purchase platform. Just choose what you want to balance - personal, business or travel impact - then go climate positive</Text>
                <Text style={styles.description}>We only profile high-quality projects that meet our minimum standards in relation to carbon + biodiversity + social benefits</Text>
              </View>

              {cart && cart.length ? (
                      <Button title="Visit Your Cart" color="babyBlue"  style={styles.boxShadow} onPress={() => navigation.navigate("CarbonCart", cart)} />
                    ) : <Button title="Visit Your Cart" color="babyBlue"  style={styles.boxShadow} onPress={() => alert("Your cart is empty, please add some items to your basket")} />}
              <Text style={[styles.textSub, { marginTop: verticalScale(50) }]}>Select your project</Text>
            </View>
          }
          data={data}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.listItems,  styles.boxShadow]}>
              <Image
                resizeMode={item.image !== "" ? "contain" : "contain"}
                style={[
                  styles.listImage,
                  {
                    width: horizontalScale(300),
                    height: verticalScale(180),
                    resizeMode: "stretch",
                  },
                ]}
                source={item.image != "" ? { uri: item.image } : require("../assets/image-placeholder.jpg")}
              />

              <View style={styles.subTitle}>
                <View style={styles.subTitleText}>
                  <Text style={styles.textSub}>{item.displayName}</Text>
                </View>
                <View style={styles.subTitlePrice}>
                  <Text style={styles.priceSub}>£{item.asset.displayAssetPriceWithMarkup.toFixed(2)}</Text>
                  <Text style={styles.tree}>/{item.asset.type == "LAND" ? "tCO2e" : item.asset.type}</Text>
                </View>
              </View>
              <View style={{ width: "100%", alignItems: "flex-start" }}>
                <Text style={styles.description}>
                  {item.description
                    .replace(/<[^>]*>/g, "")
                    .substring(0, 200)
                    .trim()}
                  ...
                </Text>
              </View>
              <View style={styles.doubleButtonDiv}>
                <Button style={{ width: "49%" }} title="ADD TO CART" color="babyBlue" onPress={() => addToCart(item.id)} />
                <Button style={{ width: "49%" }} title="Learn More" color="babyBlue" onPress={() => navigation.navigate("CarbonProject", { Id: item.id })} />
              </View>
              <View style={styles.benifitsContainer}>
                {item.tags.length ? (
                  <View>
                    <Text style={[styles.tags, styles.tree]}>Co-benifits</Text>
                  </View>
                ) : null}
                <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                  {item.tags.map((tag, index) => (
                    <View key={index} style={index !== 0 ? styles.tagsContainer : [styles.tagsContainer, { marginLeft: horizontalScale(0) }]}>
                      <Text style={styles.tags}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  boxShadow:{},
  treeImage: {
    height: verticalScale(300),
    width: horizontalScale(300)
  },
  benifitsContainer: {
    width: "100%",
  },
  container: {
    backgroundColor: "#f3f5f5",
    flex: 1,
  },
  description: {
    color: "grey",
    marginTop: verticalScale(10),
    textAlign: "center",
  },
  investNature: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  listImage: {
    borderRadius: moderateScale(15),
  },
  listImageContainer: {
    height: verticalScale(200),
  },
  listItems: {
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(14),
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
  },
  mainContainer: {
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(25),
  },
  priceSub: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
  },
  tags: {
    color: "grey",
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
    color: "#1B2356",
  },
  textSub: {
    fontWeight: "bold",
    textAlign: "left",
    color: "#1B2356",
  },
  title: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    lineHeight: verticalScale(30),
    width: "70%",
  },
  tree: {
    fontWeight: "bold",
  },
  treeContainer: {
    alignItems: "center",
    marginVertical: verticalScale(20),
  },
  subTitle: {
    flexDirection: "row",
    marginTop: verticalScale(10),
  },
  subContainer: {
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: "white",
    width: "100%",
  },
  subTitleText: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitlePrice: {
    flex: 1,
    alignItems: "flex-end",
  },

  NavBarBottom: {
    marginTop: "3%",
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-around",
    marginLeft: "7.5%",
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

  doubleButtonDiv: {
    flexDirection: "row",
    width: "100%",

    justifyContent: "space-between",
  },
});

export default Carbon;
