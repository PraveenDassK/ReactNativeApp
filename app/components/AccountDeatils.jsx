import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import formatCurrency from "../utility/formatCurrency";

const AccountDeatils = () => {
  const [title, setTitle] = useState("12232312");

  const data = [
    { label: "12232312", value: "12232312" },
    { label: "12232314", value: "12232314" },
  ];
  return (
    <View style={styles.cardContainer}>
      <View style={styles.accountContainer}>
        <Text style={styles.accountName}>Account</Text>
        <View style={styles.accountNumberStyle}>
          <Dropdown
            data={data}
            value={title}
            labelField="label"
            valueField="value"
            defalutValue="12232312"
            onChange={(item) => {
              console.log(item, "thsis is item selected");
              setTitle(item.value);
            }}
            style={styles.dropdown}
            selectedTextStyle={{ color: "white" }}
            iconColor={"white"}
          />
        </View>
      </View>
      <View style={styles.bottomCardContainer}>
        <View>
          <Text style={styles.totalTitle}>Total Balance</Text>
          <Text style={styles.totalAmount}>
            {formatCurrency(46569, "GBP", false)}
          </Text>
        </View>
        <View style={styles.bottomCard}>
          <View>
            <Text style={styles.incometext}>Income</Text>
            <Text style={styles.incomeAmount}>
              <AntDesign name="arrowup" size={20} />
              {formatCurrency(46569, "GBP", false)}
            </Text>
          </View>
          <View>
            <Text style={styles.incometext}>Expenses</Text>
            <Text style={styles.incomeAmount}>
              <AntDesign name="arrowdown" size={20} />
              {formatCurrency(46569, "GBP", false)}
            </Text>
          </View>
          <View>
            <Text style={styles.incometext}>CO2 spending</Text>
            <Text style={styles.incomeAmount}>1200kg</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer} >
        <Pressable style={styles.sendButton}>
          <Text style={styles.sendButtonText}><AntDesign name="plus" size={14} />   Add funds</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AccountDeatils;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: "blue",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position:"relative"
  },
  accountContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
  },
  accountName: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  dropdown: {
    // height: 70,
    // width: 100,
    width: "65%",
    padding: 1,
    fontSize: 16,
    borderWidth: 0,
    opacity: 1,
    color: "red",
  },
  accountNumberStyle: {
    width: "50%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  bottomCardContainer: {
    paddingVertical: 15,
  },
  bottomCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 3,
    paddingVertical: 10,
  },
  totalTitle: {
    fontSize: 16,
    color: "white",
    fontWeight: "regular",
    fontFamily: "Montserrat",
  },
  totalAmount: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
  incometext: {
    fontSize: 14,
    color: "white",
    fontWeight: "normal",
    fontFamily: "Montserrat",
  },
  incomeAmount: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat",
    marginTop: 5,
  },
  sendButton: {
    height: 60,
    width: "50%",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:15,
    gap:4,
  },
  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "normal",
  },
  buttonContainer:{
    position:"absolute",
    width:"100%",
    bottom:-35,
    left:100,
  }
});
