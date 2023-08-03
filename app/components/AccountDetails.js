import { Pressable, StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import formatCurrency from "../utility/formatCurrency";
import { LinearGradient } from "expo-linear-gradient";
import Text from "./Text";
import GlobalStyles from "../../GlobalStyles";
import Logo from "../assets/Dashboard/half-carbonyte-logo.svg";
import apiCall from "../api/apiCall";
const CurrentDateComponent = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Function to format the date as "June 6, 2023"
    const formatDate = (date) => {
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);
    };

    // Get the current date
    const now = new Date();
    const formattedDate = formatDate(now);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <Text
      style={{
        color: GlobalStyles.Color.white,
        fontFamily: "Montserrat-Regular",
        fontSize: 12,
      }}
    >
      {currentDate}
    </Text>
  );
};

const AccountDeatils = ({
  userData,
  userImpact,
  handlePress,
  setBalance,
  accountBalance,
  accountId,
}) => {
  const [title, setTitle] = useState("");
  const [dropdownData, setDropdownData] = useState();
  console.log(accountBalance, "this is a new account");
  useEffect(() => {
    const newStateArray = [];
  console.log(userData,"this is user data");
    userData?.map((eachData, i) =>
      newStateArray.push({
        label: eachData?.accountId,
        value: eachData?.accountId,
      })
    );
    console.log(newStateArray, "thsis is state");
    setDropdownData(newStateArray);
    setTitle(newStateArray?.[0]?.value);
    handleBalance(accountId);
  }, []);

  const handleBalance = async (balance) => {
    const dataForBalance = await apiCall.GetCustomerDetails(balance);

    // let newBalance = userData?.filter(
    //   (eachValue, i) => eachValue?.accountId === balance
    // );
    // console.log(dataForBalance,"this is a new balance")
    setBalance(dataForBalance);
  };
  return (
    <View style={styles.border}>
      <LinearGradient
        colors={["#00005F", "#5888F5"]}
        style={styles.cardContainer}
      >
        <View
          style={{
            position: "absolute",
            right: 0,
            bottom: -2,
            opacity: 0.3,
          }}
        >
          <Logo width={140} height={160} />
        </View>
        <View style={styles.accountContainer}>
          <Text style={styles.accountName}>Account</Text>
          <View style={styles.accountNumberStyle}>
            <Dropdown
              fontFamily="Montserrat-Medium"
              data={dropdownData}
              value={title}
              activeColor={GlobalStyles.Color.backgroundColor}
              defaultValue={dropdownData?.[0]}
              labelField="label"
              valueField="value"
              onChange={(item) => {
                setTitle(item?.value);
                handleBalance(item?.value);
              }}
              style={styles.dropdown}
              selectedTextStyle={{
                color: GlobalStyles.Color.backgroundColorOg,
              }}
              iconColor={"white"}
              autoScroll={false}
              containerStyle={{
                borderBottomStartRadius: 10,
                borderBottomEndRadius: 10,
                width: "100%",
              }}
            />
          </View>
        </View>
        <View style={styles.bottomCardContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.totalTitle}>Total Balance</Text>
              <Text style={styles.totalAmount}>
                {formatCurrency(accountBalance?.balance, "GBP", false)}
              </Text>
            </View>
            <CurrentDateComponent />
          </View>

          <View style={styles.bottomCard}>
            <View>
              <Text style={styles.incometext}>Income</Text>
              {accountBalance[0]?.income ? (
                <Text style={styles.incomeAmount}>
                  <AntDesign name="arrowup" size={20} />
                  {formatCurrency(accountBalance?.income, "GBP", false)}
                </Text>
              ) : (
                // <Text style={styles.incomeAmount}>Coming soon..</Text>
                <Text style={styles.incomeAmount}>
                  <AntDesign name="arrowup" size={20} />
                  {formatCurrency(200, "GBP", false)}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.incometext}>Expenses</Text>
              {accountBalance?.expenses ? (
                <Text style={styles.incomeAmount}>
                  <AntDesign name="arrowdown" size={20} />
                  {formatCurrency(accountBalance[0]?.expenses, "GBP", false)}
                </Text>
              ) : (
                // <Text style={styles.incomeAmount}>Coming soon..</Text>
                <Text style={styles.incomeAmount}>
                  <AntDesign name="arrowdown" size={20} />
                  {formatCurrency(100, "GBP", false)}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.incometext}>CO{"\u2082"} spending</Text>
              <Text style={styles.incomeAmount}>
                {userImpact?.totalAssets} kg
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.sendButton} onPress={handlePress}>
          <Text style={styles.sendButtonText}>
            <AntDesign name="plus" size={14} /> Add funds
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AccountDeatils;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    // backgroundColor: "blue",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "relative",
  },
  accountContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: GlobalStyles.Color.white,
    borderBottomWidth: 0.5,
  },
  accountName: {
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    color: GlobalStyles.Color.white,
    letterSpacing: 1,
  },
  dropdown: {
    width: 130,
    fontSize: 14,
    borderWidth: 0,
  },
  accountNumberStyle: {
    width: "80%",
    justifyContent: "center",
    alignItems: "flex-end",
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
  border: {
    borderColor: GlobalStyles.Color.white,
    borderRadius: 20,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
  },
  totalTitle: {
    fontSize: 16,
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Regular",
  },
  totalAmount: {
    fontSize: 30,
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
  },
  incometext: {
    fontSize: 14,
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Medium",
  },
  incomeAmount: {
    fontSize: 16,
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
    marginTop: 5,
  },
  sendButton: {
    height: 60,
    width: "50%",
    backgroundColor: GlobalStyles.Color.lightBlack,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    gap: 4,
  },
  sendButtonText: {
    color: GlobalStyles.Color.white,
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: -35,
    left: 100,
  },
});
