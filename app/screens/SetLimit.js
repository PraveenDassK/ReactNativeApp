import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, Pressable,TextInput,Image ,Keyboard} from "react-native";
import GlobalStyles from "../../GlobalStyles";

import api from "../api/api_list"
import AuthContext from "../auth/context";

const SetLimit = ({navigation}) => {

  //Sent call when navigating away
  const navigate = async() => {
    const response = await api.SetLimit(amount)
    navigation.navigate("SpendingLimit")
  }
  const [amountspent, setAmountspent] = useState(null)
  const [amount, setAmount] = useState("0")
  const [currency, setcurrency] = useState("GBP")

  return (
    <View style={styles.setLimit}>
      <Pressable 
        style={styles.groupParent}
        onPress={Keyboard.dismiss}
      >
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloColor1]}>
          Set a monthly limit
        </Text>
        <View style={styles.rectangleWrapper}>
          <View style={styles.groupChild} />
        </View>
        
        <TextInput style={[styles.hello1, styles.helloColor, styles.helloTypo]}
          placeholder = {"£"+amount}
          keyboardType="numeric"
          onChangeText={newText => setAmount(newText)}
        />
        <Text style={[styles.hello3, styles.helloPosition, styles.helloColor1]}>
          {currency}
        </Text>
        <Text
          style={[styles.hello4, styles.helloPosition, styles.helloColor]}
        >{`Spent this month : `}{amountspent}</Text>
        <Pressable
          style={[styles.groupParent, styles.parentPosition]}
          onPress={() => navigate()}
        >
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <View style={styles.groupItem} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello5, styles.helloTypo]}>Set limit</Text>
        </Pressable>
      </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  helloColor1: {
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
  },
  helloColor: {
    color: GlobalStyles.Color.gray_700,
    top: "50%",
  },
  helloTypo: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloPosition: {
    left: 15,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  parentPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello: {
    left: 2,
    fontSize: GlobalStyles.FontSize.size_7xl,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    marginTop: -31.5,
    borderRadius: GlobalStyles.Border.br_2xl,
    backgroundColor: GlobalStyles.Color.white,
    top: "50%",
    height: 63,
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    top: 44,
    height: 63,
    left: 0,
    right: 0,
    position: "absolute",
  },
  hello1: {
    marginTop: -136.5,
    right: 20,
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "right",
    fontWeight: "700",
    color: GlobalStyles.Color.gray_700,
    width: "50%",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello2: {
    top: 59,
    right: 28,
    fontSize: GlobalStyles.FontSize.size_4xl,
    fontWeight: "300",
    color: GlobalStyles.Color.blue_100,
    textAlign: "left",
  },
  hello3: {
    top: 62,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  hello4: {
    marginTop: -117.5,
    fontSize: GlobalStyles.FontSize.size_3xs,
  },
  groupItem: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blue_100,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
  },
  hello5: {
    top: "38.33%",
    left: "50.00%",
    marginLeft:-20,
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
  },
  groupParent: {
    height: 60,
  },
  helloParent: {
    width: "100%",
    height: 399,
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: -10.11,
    marginRight: 303.54,
    width: 15,
    height: 15,
  },
  setLimit: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_8xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
  },
});

export default SetLimit;
