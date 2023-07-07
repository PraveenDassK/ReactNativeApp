import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
  Dimensions,
  FlatList,
} from "react-native";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
let height = Dimensions.get("window").height;
const Notification = ({ navigation }) =>
  //Comment
  // const cardName = "Carbonyte Standard - 7761"
  {
    const [cardname, setCardname] = useState(null);
    const [viewMore, setViewMore] = useState(false);
    const authContext = useContext(AuthContext);
    //Calls the API once during load
    useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        loadData();
      });
    }, []);
    const loadData = async () => {
      setCardname(authContext.accountID);
      console.log(authContext.accountID);
    };

    const dataOfLost = [
      {
        notification:
          "You received a payment of £134.00 from Richard Fernandes",
      },
      {
        notification: "Johny Walker requested a payment of £134.00",
      },
      {
        notification: "Johny Walker requested a payment of £134.00",
      },
      {
        notification: "You received a payment of £254.00 from Manuel Ferrera",
      },
      {
        notification: "James Deen requested a payment of £360.00",
      },
      {
        notification:
          "You received a payment of £2231.00 from Richard Fernandes",
      },
      {
        notification: "Johny Walker requested a payment of £134.00",
      },
      {
        notification: "Johny Walker requested a payment of £134.00",
      },
      {
        notification: "You received a payment of £254.00 from Manuel Ferrera",
      },
      {
        notification: "James Deen requested a payment of £360.00",
      },
    ];
    let arrayValue;
    if (viewMore) {
      arrayValue = dataOfLost;
    } else {
      arrayValue = dataOfLost.slice(0, 5);
    }
    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title.notification}</Text>
      </View>
    );
    return (
      <ImageBackground
        resizeMode="contain"
        source={require("../assets/backgrounds/replaceCard.jpg")}
        imageStyle={
          {
            top: "50%", // Whatever offset you want from the bottom
          }
        }
        style={{ position:"relative",flex:1}}
      >
        <View style={{ marginBottom:0, position: "relative" }}>
          <View style={styles.replaceCard}>
            <FlatList
              data={arrayValue}
              renderItem={({ item }) => <Item title={item} />}
              keyExtractor={(item, index) => index}

            />
          </View>

          {!viewMore && (
            <View>
              <Text
                style={{ textAlign: "center", color: "blue" }}
                onPress={() => setViewMore(true)}
              >
                View more
              </Text>
            </View>
          )} 
            
          {/* <View
            style={{
              position: "absolute",
              bottom: "10%",
              width: "100%",
              paddingHorizontal: 10,
              left: "10%",
            }}
          >
            <Text style={styles.bottomText}>
              Your <Text style={styles.bottomTextBold}> Money </Text>• Your{" "}
              <Text style={styles.bottomTextBold}>Planet</Text> • Your{" "}
              <Text style={styles.bottomTextBold}>Choice</Text>
            </Text>
          </View> */}
        </View>
      </ImageBackground>
    );
  };

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "white",
    borderColor: "gray",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderRadius: 10,
  },

  replaceCard: {
    width: "100%",
    backgroundColor:"transparent",
    zIndex: 1,
  },
  container: {
    width: "100%",
    height: 100,
    // height: height / 2.6,
    // position: "absolute",
    bottom: 0,
    // zIndex: -0.5,
  },
  bottomText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat",
    fontWeight: "regular",
  },
  bottomTextBold: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "transparent",
    paddingHorizontal: "10%",
    paddingVertical: "4%",
    marginTop: 5,
  },
  title: {
    color: "#000000",
    fontFamily: "Montserrat",
    fontSize: 16,
  },
});

export default Notification;
