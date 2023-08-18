import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/AppButton";
import { verticalScale } from "../config/scaling";
import AuthContext from "../auth/context";
import { ScrollView } from "react-native-gesture-handler";

const CarbonCart = ({ route, navigation }) => {
  const { customerDetails, accountID, cart, setCart, darkMode } =
    useContext(AuthContext);
  const [data, setData] = useState();
  const [totalUnits, setTotalUnits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(data, "this is data");
  useEffect(() => {
    const projects = [];
    let names = new Set(cart.map((item) => item.displayName));
    for (const name of names.entries()) {
      const displayName = name[0];
      const filteredEntries = cart.filter(
        (item) => item.displayName == displayName
      );
      const price = filteredEntries.reduce((a, b) => a + b.price, 0).toFixed(2);
      const totalUnits = filteredEntries.length;
      projects.push({ displayName, totalUnits, price });
    }
    setData(projects);
    setTotalPrice(
      projects.reduce((a, b) => a + parseFloat(b.price), 0).toFixed(2)
    );
    setTotalUnits(projects.reduce((a, b) => a + b.totalUnits, 0));
  }, []);

  const buy = () => {
    let newArray = cart.map((obj1) => {
      let obj2 = data.find((obj2) => obj2.displayName === obj1.displayName);
      return { ...obj1, ...obj2 };
    });

    const requestArray = newArray.map((eachvalue) => {
      return {
        projectId: eachvalue?.id,
        quantity: eachvalue?.totalUnits,
      };
    });

    const purchaseObj = {
      carbonyteUserId: customerDetails,
      projectLists: requestArray,
      sourceAccountId: accountID,
      totalAmount: totalPrice,
    };
    // console.log(purchaseObj, "this is purchase");
    navigation.navigate("PinCart", purchaseObj);
    setCart([]);
  };

  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/dashboardDark/DashboardBottom.png")
          : require("../assets/backgrounds/Dashboard.jpg")
      }
      resizeMode="contain"
      imageStyle={{
        bottom: "-70%", // Whatever offset you want from the bottom
      }}
      style={{
        width: "100%",
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.lightTheme_bg,
        flex: 1,
      }}
    >
      <View>
        <View style={styles.titleTextRow}>
          <Text style={styles.titleText}>Your Cart</Text>
        </View>
        <View style={styles.divContainer}>
          <View style={styles.cartTitle}>
            <Text style={styles.heading1}>Project</Text>
            <Text style={styles.heading2}>Unit</Text>
            <Text style={styles.heading3}>Price</Text>
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: GlobalStyles.Color.backgroundColor,
              height: 2,
            }}
          ></View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.list}>
                <Text style={styles.col1}>{item.displayName}</Text>
                <Text style={styles.col2}>{item.totalUnits}</Text>
                <Text style={styles.col3}>£{item.price}</Text>
              </View>
            )}
          />
          <View
            style={{
              width: "100%",
              backgroundColor: GlobalStyles.Color.backgroundColor,
              height: 2,
              top: 49,
            }}
          ></View>
          <View
            style={{
              width: "100%",
              height: 50,
              top: 50,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              backgroundColor: "white",
            }}
          >
            <View style={styles.cartTitle}>
              <Text style={styles.heading1}>Total</Text>
              <Text style={styles.heading2}>{totalUnits}</Text>
              <Text style={styles.heading3}>£{totalPrice}</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button}>
            <Button title="Buy Projects" onPress={() => buy()} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    width: "100%",
    flex: 1,
    flex: GlobalStyles.DivContainer.flex,
  },
  darkmainContainer: {
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
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
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },

  list: {
    paddingTop: "2.5%",
    flexDirection: "row",
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
    fontWeight: "600",
  },

  col2: {
    flex: 2.5,
    textAlign: "center",
  },

  col3: {
    flex: 2.5,
    textAlign: "center",
  },

  bottom: {
    bottom: "5%",
    flex: 1,
    justifyContent: "flex-end",
  },

  button: {
    width: "90%",
    left: "5%",
  },
});

export default CarbonCart;
