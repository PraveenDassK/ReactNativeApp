import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";

const AccountDeatils = () => {
  const [title, setTitle] = useState("");

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
          <Text style={styles.totalAmount}>£46,569.00</Text>
        </View>
        <View style={styles.bottomCard}>
          <View>
            <Text style={styles.incometext}>Income</Text>
            <Text style={styles.incomeAmount}>
              <AntDesign name="arrowup" size={20} />
              1200
            </Text>
          </View>
          <View>
            <Text style={styles.incometext}>Income</Text>
            <Text style={styles.incomeAmount}>
              <AntDesign name="arrowdown" size={20} />
              1200
            </Text>
          </View>
          <View>
            <Text style={styles.incometext}>Income</Text>
            <Text style={styles.incomeAmount}>1200</Text>
          </View>
        </View>
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
    fontSize: 16,
    color: "white",
    fontWeight: "regular",
    fontFamily: "Montserrat",
  },
  incomeAmount: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
});
